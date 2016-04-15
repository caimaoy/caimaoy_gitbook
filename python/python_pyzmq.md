# Python pyzmq

- 给pyzmq 添加超时时间
    详情请见 [github](https://github.com/zeromq/pyzmq/issues/132)
    ```
    import sys
    import zmq

    # None of these operations will block, regardless of peer:
    context = zmq.Context()
    socket = context.socket(zmq.REQ)
    socket.setsockopt(zmq.LINGER, 0)
    socket.connect("tcp://127.0.0.1:12346")
    socket.send_json({"msg": "testmsg"}) # send can block on other socket types, so keep track
    # use poll for timeouts:
    poller = zmq.Poller()
    poller.register(socket, zmq.POLLIN)
    if poller.poll(10*1000): # 10s timeout in milliseconds
        msg = socket.recv_json()
    else:
        raise IOError("Timeout processing auth request")

    # these are not necessary, but still good practice:
    socket.close()
    context.term()

    sys.exit(0)
    ```
