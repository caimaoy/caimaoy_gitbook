# Python pip

## 

- 今天在使用 python protobuf 的时候遇到了如下的异常  

```
TypeError: Couldn't build proto file into descriptor pool!
Invalid proto descriptor for file "comm_head.proto":
  comm_head.proto: A file with this name is already in the pool.
```

- 解决方案
- 参考
    - <https://github.com/google/protobuf/issues/3002>
    - <https://github.com/ValvePython/csgo/issues/8>

```
pip uninstall protobuf
pip install --no-binary=protobuf protobuf
```

- 问题来了： `requirement.txt` 如何写？
- 参考
    - <https://pip.pypa.io/en/stable/reference/pip_install/#per-requirement-overrides>

>Since version 7.0 pip supports controlling the command line options given to setup.py via requirements files. This disables the use of wheels (cached or otherwise) for that package, as setup.py does not exist for wheels.
>
>The --global-option and --install-option options are used to pass options to setup.py. For example:
>
>```
>FooProject >= 1.2 --global-option="--no-user-cfg" \
>                  --install-option="--prefix='/usr/local'" \
>                  --install-option="--no-compile"
>```
>The above translates roughly into running FooProject's setup.py script as:
>
>```
>python setup.py --no-user-cfg install --prefix='/usr/local' --no-compile
>```
>Note that the only way of giving more than one option to setup.py is through multiple --global-option and --install-option options, as shown in the example above. The value of each option is passed as a single argument to the setup.py script. Therefore, a line such as the following is invalid and would result in an installation error.
>
>```
># Invalid. Please use '--install-option' twice as shown above.
>FooProject >= 1.2 --install-option="--prefix=/usr/local --no-compile"
>```



