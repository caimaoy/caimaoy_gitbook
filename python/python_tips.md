# Python tips

- 如何检查文件是否 json 格式，并且格式化输出
    ```
    ❯ python -m json.tool book.json
    {
        "plugins": [
            "disqus"
        ],
        "pluginsConfig": {
            "disqus": {
                "shortName": "caimaoygitbook"
            }
        }
    }
    ```

    ```
    ❯ python -m json.tool README.md
    No JSON object could be decoded
    ```

- 简易Web Server
    通过 Python 快速共享文件,进入到你要共享文件的目录下并在命令行中运行下面的代码：
    ```
    # Python 2
    python -m SimpleHTTPServer

    # Python 3
    python -m http.server
    ```
    更多的一行方法请参考 [Python官方文档](https://wiki.python.org/moin/Powerful%20Python%20One-Liners)


- 优雅地分组

    ```
    def divide_into_groups(l, group_len):
        return [a[i:i+group_len] for i in range(0, len(l), group_len)]

    divide_into_groups(range(10), 3)
    ```
