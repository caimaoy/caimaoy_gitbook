# tcp status

获取机器 TCP 状态

```
netstat -n | awk '/^tcp/ {++S[$NF]} END {for(a in S) print a, S[a]}'
```

类似下面结果：

```
CLOSE_WAIT 30
ESTABLISHED 805
FIN_WAIT2 1
TIME_WAIT 4565
```

附带 alias 配置
```
alias tcp='netstat -n | awk '"'"'/^tcp/ {++S[$NF]} END {for(a in S) print a, S[a]}'"'"''
```

