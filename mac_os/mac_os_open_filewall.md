# Mac OS 打开防火墙

完全打开防火墙的方法比较简单可自行 google。
但因为 IT 安装了防火墙，导致不能完全关闭防火墙，只能对部分应用关闭防火墙。  
在「应用程序」里面的应用，可以直接通过 UI 操作关闭防火墙，
但是如果不在「应用程序」里面的程序，例如：Nginx 等就需要执行如下命令：

```shell
sudo /usr/libexec/ApplicationFirewall/socketfilterfw --add /usr/local/Cellar/nginx/1.8.0/bin/nginx
sudo /usr/libexec/ApplicationFirewall/socketfilterfw --unblockapp /usr/local/Cellar/nginx/1.8.0/bin/nginx
```

执行命令后，如果依旧无法访问，可能需要重启电脑
