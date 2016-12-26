# python 文件中获取 robot 的全局变量

<http://stackoverflow.com/questions/14388253/robot-framework-access-robots-global-variables-from-python-library-code>


- 比如我想测试不同环境的 case
- 使用命令行参数区分环境
- 命令行大致如下：

```
robot --variable TEST_IN:ENV_AUTO test.txt
```

- robot 中可以通过如下方法获取

```
${TEST_IN}
```

- 用户自己扩展的 python 关键字如何获取？
- 引用 robot 的 `BuiltIn` 使用 `get_variable_value` 方法

```
from robot.libraries.BuiltIn import BuiltIn
test_in = BuiltIn().get_variable_value("${TEST_IN}")
```
