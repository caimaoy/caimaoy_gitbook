# prime factors

## 分解质因数

```
def primefactors(n):
    i = 2
    while i * i <= n:
        while not n % i:
            yield i
            n //= i
        i += 1
    if n > 1:
        yield n

list(primefactors(600851475143))
```

