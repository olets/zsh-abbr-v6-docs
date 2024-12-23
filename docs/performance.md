---
next:
  text: Contributing
  link: /contributing.html
---

# Performance

zsh-abbr adds roughly 8ms + <=0.4ms/abbreviation to first prompt lag, 12ms + <=0.4ms/abbreviation to first command lag, and 6ms + 0.3ms/abbreviation to exit time.

Explanations of the measures are at <https://github.com/romkatv/zsh-bench#what-it-measures>.

Raw single-run data is available at <https://oletsdev.notion.site/12fc6fd61c5780359e3bfb68c66cf774>.

The performance suite uses [zsh-bench](https://github.com/romkatv/zsh-bench). Run the performance suite with

```shell
zsh-bench --isolation docker --config-dir ./performance -- not-installed fresh-install zero-abbreviations ten-abbreviations one-hundred-abbreviations
```
