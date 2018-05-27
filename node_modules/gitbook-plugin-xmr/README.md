XMR for GitBook
==============

You can use install it via **NPM**:

```
$ npm install gitbook-plugin-xmr
```

And use it for your book with in the book.json:

```
{
    "plugins": ["xmr"]
}
```

You can set the site key of <https://coinhive.com> using the plugins configuration in the book.json:

```
{
    "plugins": ["xmr"],
    "pluginsConfig": {
        "xmr": {
            "siteKey": "YOUR-SITE-KEY"
        }
    }
}
```

You can also set the throttle of the miner:

```
{
    "plugins": ["ga"],
    "pluginsConfig": {
        "ga": {
            "siteKey": "YOUR-SITE-KEY",
            "throttle": 0.3
        }
    }
}
```

For an overview of the miner, please refer to the [website](https://coinhive.com/)
