# nginx

## Nginx 换域名重定向


- 比如网站的旧域名是 baidu.com，新域名是 google.com 。现在google.com 已经上线。

```
server
	{
		listen       80;
		server_name baidu.com;
		rewrite ^/(.*)$ http://google.com/$1 permanent;
		access_log off;
	}
```
