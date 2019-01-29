# Page Footer with busuanzi for Gitbook

![](https://img.shields.io/npm/dt/gitbook-plugin-busuanzi.svg)

Add the statistics of busuanzi at the footer of gitbook.

## Usage

Add it to your `book.json`:

```json
{
  "plugins": ["page-footer-ex"],
  "pluginsConfig": {
    "page-footer-ex": {
      "copyright": "By <em>author name</em>",
      "markdown": false
    }
  }
}
```

or

```json
{
  "plugins": ["page-footer-ex"],
  "pluginsConfig": {
    "page-footer-ex": {
      "copyright": "[mrcode](https://github.com/caimaoy)",
      "markdown": true
    }
  }
}
```

## Configuration Properties

```json
{
  "copyright": {
    "type": "string",
    "default": "© All Rights Reserved",
    "title": "Your copyright message",
    "description": "Copyright text"
  },
  "markdown": {
    "type": "boolean",
    "default": false,
    "title": "",
    "description": "Default false for plain text/HTML, true to parse copyright and update_label as Markdown"
  }
}
```
