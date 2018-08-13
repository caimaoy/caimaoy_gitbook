# Mac OS Copy and Paste

- Mac 命令行拷贝

## pbcopy
This command allows you to copy text from stdin into the clipboard1 buffer. Trivial example:

```
echo 'Hello World!' | pbcopy
```
“Hello World!” is now in your clipboard.

## pbpaste

Pastes from your clipboard to stdout. Trivial example:

```
echo `pbpaste`
```
This will echo the contents of your clipboard. If you’re following along you’ll see “Hello World!”.


[pbpaste & pbcopy in Mac OS X (or: Terminal + Clipboard = Fun!)](https://langui.sh/2010/11/14/pbpaste-pbcopy-in-mac-os-x-or-terminal-clipboard-fun/)
