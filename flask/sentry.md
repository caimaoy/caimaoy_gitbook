# Flask Sentry

## [Sentry](https://sentry.io/)

Users and logs provide clues. Sentry provides answers.


###  What's Sentry?
>> Sentry fundamentally is a service that helps you monitor and fix crashes in realtime. The server is in Python, but it contains a full API for sending events from any language, in any application.
>> <https://github.com/getsentry/sentry>


这里我们就不详细介绍，具体内容见官网，简单理解是一个面向主流语言的开源错误日志收集服务

### Flask use Sentry

flask 如何使用 Sentry?  
见[官网](https://docs.sentry.io/clients/python/integrations/flask/),基本接入非常简单，两行代码级别就搞定


### Problem

接入 Sentry 之后我们发现使用原先 [flask.Request.get_data](http://flask.pocoo.org/docs/1.0/api/#flask.Request.get_data) 方法无法获取原始报文!  


`get_data(cache=True, as_text=False, parse_form_data=False)`

>> This reads the buffered incoming data from the client into one bytestring. By default this is cached but that behavior can be changed by setting cache to False.

>> Usually it’s a bad idea to call this method without checking the content length first as a client could send dozens of megabytes or more to cause memory problems on the server.

>> Note that if the form data was already parsed this method will not return anything as form data parsing does not cache the data like this method does. To implicitly invoke form data parsing function set parse_form_data to True. When this is done the return value of this method will be an empty string if the form parser handles the data. This generally is not necessary as if the whole data is cached (which is the default) the form parser will used the cached data to parse the form data. Please be generally aware of checking the content length first in any case before calling this method to avoid exhausting server memory.

>> If as_text is set to True the return value will be a decoded unicode string.


查看 Flask Sentry 的源码发现，在每个请求之前 Sentry 会记录请求信息，想想他要实现的功能也应该可以预见这个实现。  
实现中会访问 `request.form` 或者 `request.data` [源码](https://github.com/getsentry/raven-python/blob/master/raven/contrib/flask.py#L207-L211)  

[werkzeug.wrappers.BaseRequest.data](http://werkzeug.pocoo.org/docs/0.14/wrappers/#werkzeug.wrappers.BaseRequest.data)
>> Contains the incoming request data as string in case it came with a mimetype Werkzeug does not handle.

那也就是说 Sentry 会先于我们自己的代码获取 `request.data`，同时当 `request.data` 无法被 utf8 编码的情况下，抛弃掉这些内容，之后我们获取的内容就为空了。

### Resolve

#### 方案一

<https://github.com/getsentry/raven-python/issues/457>, 我们一定不是第一个遇到这个问题的人
```
@app.before_request
def enable_form_raw_cache():
  if request.path.startswith('/redacted'):
    if request.content_length > 1024 * 1024:  # 1mb
      abort(413)  # Payload too large
    request.get_data(parse_form_data=False, cache=True)
```


#### 方案二

```
@app.before_request
def enable_form_raw_cache():
    cache_path_list = [
        '/PATH_FOO',
        '/PATH_BAR',
    ]
    path = request.path
    if any([path.startswith(i) for i in cache_path_list]):
        request.get_data(parse_form_data=False, cache=True)
```

总体思路都是在 Sentry 访问 `request.data` 之前把它先缓存起来，并且是选择性的缓存起来


### N more things

更多的思考

- 为什么会有不是 utf8 编码的数据？
    - 这个是开玩笑了，因为我们要接受 GBK 编码的 XML 数据，这个的根本原因我们就不细谈了。

- 为什么 flask 不缓存所有的原始对象？
    - 这应该是个好问题，可能的原因，太多的原始对象消耗内存。同时因为已经将请求数据从流对象中读出，然后结构化了，也就没有必要保存原始对象了
