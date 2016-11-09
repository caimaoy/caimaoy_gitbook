# Python decorator cheat


- A decorator without arguments

```
def decorator(f):
    @functools.wraps(f)
    def wrapped(*args, **kwargs):
        results = f(*args, **kwargs)
        # do something
        return results
    return wrapped
```


- A Decorator with arguments

```
def decorator_args(a, b, c):
    def decorator(f):
        @functools.wraps(f)
        def wrapped(*args, **kwargs):
            results = f(*args, **kwargs)
            # do something
            return results
        return wrapped
    return decorator
```
