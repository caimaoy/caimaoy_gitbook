# Python sqlalchemy

- 使用SQLAlchemy时遇到"#2006: MySQL server has gone away"
- 原因：
    - 客户端使用了一个已经在 mysql 中关闭的 session
    - mysql 中默认是 8 小时关闭
- 解决方案：
    1. 设置SQLAlchemy的连接有效期，在MySQL关闭它之前，我先关闭它。
    2. 在Web框架的层面，每次请求处理完毕时，显式地关闭session。
    3. 在使用session之前，先检查其有效性，无效则创建新的session以供使用。

- 参考 [blog](http://www.wangjunbo.com/?p=34)
- 参考[官方文档](http://docs.sqlalchemy.org/en/latest/core/pooling.html#disconnect-handling-pessimistic)

```
from sqlalchemy import exc
from sqlalchemy import event
from sqlalchemy import select

some_engine = create_engine(...)

@event.listens_for(some_engine, "engine_connect")
def ping_connection(connection, branch):
    if branch:
        # "branch" refers to a sub-connection of a connection,
        # we don't want to bother pinging on these.
        return

    # turn off "close with result".  This flag is only used with
    # "connectionless" execution, otherwise will be False in any case
    save_should_close_with_result = connection.should_close_with_result
    connection.should_close_with_result = False

    try:
        # run a SELECT 1.   use a core select() so that
        # the SELECT of a scalar value without a table is
        # appropriately formatted for the backend
        connection.scalar(select([1]))
    except exc.DBAPIError as err:
        # catch SQLAlchemy's DBAPIError, which is a wrapper
        # for the DBAPI's exception.  It includes a .connection_invalidated
        # attribute which specifies if this connection is a "disconnect"
        # condition, which is based on inspection of the original exception
        # by the dialect in use.
        if err.connection_invalidated:
            # run the same SELECT again - the connection will re-validate
            # itself and establish a new connection.  The disconnect detection
            # here also causes the whole connection pool to be invalidated
            # so that all stale connections are discarded.
            connection.scalar(select([1]))
        else:
            raise
    finally:
        # restore "close with result"
        connection.should_close_with_result = save_should_close_with_result
```
