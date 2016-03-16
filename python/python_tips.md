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
