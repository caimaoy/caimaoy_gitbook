# Python debug

如何调试 python 程序？

## print

这个方法不说了

## pdb

```
import pdb
pdb.set_trace()
```

## ipdb
```
import ipdb
ipdb.set_trace()
```

requirements.txt
`ipython`
`ipdb`

## python 代码出现了，直接能够跳到 ipython 中

```
import sys

class ExceptionHook:
    instance = None

    def __call__(self, *args, **kwargs):
        if self.instance is None:
            from IPython.core import ultratb
            self.instance = ultratb.FormattedTB(mode='Plain',
                color_scheme='Linux', call_pdb=1)

        return self.instance(*args, **kwargs)

sys.excepthook = ExceptionHook()
```
