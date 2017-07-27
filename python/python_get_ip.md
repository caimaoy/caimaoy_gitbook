# Python IP


##  在 shell 中可以一行调用，获取到本机IP
```
python -c "import socket;print([(s.connect(('8.8.8.8', 53)), s.getsockname()[0], s.close()) for s in [socket.socket(socket.AF_INET, socket.SOCK_DGRAM)]][0][1])"
10.12.189.16
```

## 可以封装成函数，方便 Python 的程序调用
```
import socket

def get_host_ip():
    try:
        s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        s.connect(('8.8.8.8', 53))
        ip = s.getsockname()[0]
    finally:
        s.close()
    return ip
```

## 注意

这个方法并不会真正发请求，但是会申请一个 UDP 的端口
