# open max files process

```
lsof -n |awk '{print $2}'|sort|uniq -c |sort -nr|more
```

