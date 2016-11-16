# Python timeit


## 使用 timeit 测试语句执行速度

I did some benchmarking and it turns out that dict is faster than both list and set for large data sets, running python 2.7.3 on an i7 CPU on linux:

```
python -mtimeit -s 'd=range(10**7)' '5*10**6 in d'
```

10 loops, best of 3: 64.2 msec per loop
```
 python -mtimeit -s 'd=dict.fromkeys(range(10**7))' '5*10**6 in d'
```

10000000 loops, best of 3: 0.0759 usec per loop
```
 python -mtimeit -s 'from sets import Set; d=Set(range(10**7))' '5*10**6 in d'
```

1000000 loops, best of 3: 0.262 usec per loop
