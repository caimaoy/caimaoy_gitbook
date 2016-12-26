# Mac OS use 32 bits

- 强制使用 32 位：
```
    defaults write com.apple.versioner.python Prefer-32-Bit -bool yes
```
- 去掉强制使用 32 位：
```
    defaults write com.apple.versioner.python Prefer-32-Bit -bool no
```
