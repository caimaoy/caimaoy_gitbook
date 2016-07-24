# Mac OS FAQ

- [Turn off the rootless in OS X El Capitan 10.11](https://www.quora.com/How-do-I-turn-off-the-rootless-in-OS-X-El-Capitan-10-11)
- 强制使用 32 位：
```
    defaults write com.apple.versioner.python Prefer-32-Bit -bool yes
```
- 去掉强制使用 32 位：
```
    defaults write com.apple.versioner.python Prefer-32-Bit -bool no
```
