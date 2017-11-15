# Python asyncio


## asyncio timeout

1. 使用原生 `asyncio.wait_for`
2. 使用第三方库 `async_timeout.timeout`


代码如下：  
原生解决方案

```
async def tcp_echo_client(message, loop):
    port = 8899
    reader, writer = await asyncio.open_connection('127.0.0.1', port,
                                                   loop=loop)
    writer.write(message)
    data = b''
    try:
        data = await asyncio.wait_for(reader.read(1024), 1)
    except asyncio.TimeoutError:
        pass
    writer.close()
```

async_timeout demo
```

from async_timeout import timeout

async def tcp_echo_client(message, loop):
    port = 8899
    reader, writer = await asyncio.open_connection('127.0.0.1', port,
                                                   loop=loop)

    print('Send: %r' % message)
    writer.write(message)

    data = b''
    try:
        async with timeout(3) as cm:
            data = await reader.read(1024)
    except asyncio.TimeoutError:
        pass
    print(cm.expired)
    writer.close()
```
