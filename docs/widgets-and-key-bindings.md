# Widgets and key bindings

By default

- <kbd>Space</kbd> expands abbreviations
- <kbd>Ctrl</kbd><kbd>Space</kbd> is a normal space
- <kbd>Enter</kbd> expands and accepts abbreviations

(In incremental search mode, <kbd>Space</kbd> is a normal space and <kbd>Ctrl</kbd><kbd>Space</kbd> expands abbreviations.)

There are three available widgets:

Widget | Behavior | Default binding
---|---|---
`abbr-expand` | If following an abbreviation, expands it | Not bound
`abbr-expand-and-accept` | If following an abbreviation, expands it (with `abbr-expand`). Then accepts the line | <kbd>Enter</kbd>
`abbr-expand-and-insert` | If following an abbreviation, expands it (with `abbr-expand`). Then appends the binding | <kbd>Space</kbd> in normal mode, <kbd>Ctrl</kbd><kbd>Space</kbd> in search mode

::: tip
If the expansion cursor placement system is enabled, you can make `abbr-expand-and-accept` behave like `abbr-expand` on a per-abbreviation basis by appending the expansion cursor marker to the expansion. Learn more in [Cursor placement](./cursor-placement.md).
:::

`abbr-expand-and-space` was deprecated in v5.4.0 and dropped in v6.0.0. Use `abbr-expand-and-insert` instead.

zsh-abbr also binds <kbd>Ctrl</kbd><kbd>Space</kbd> (`"^ "`) to `magic-space` and, in search mode, <kbd>Space</kbd> (`-M isearch " "`) to `magic-space`.

In the following example, additional bindings are added such that <kbd>Ctrl</kbd><kbd>e</kbd> expands abbreviations without adding a trailing space and <kbd>Ctrl</kbd><kbd>a</kbd> has the same behavior as <kbd>Space</kbd>.

```shell
# .zshrc

bindkey "^E" abbr-expand
bindkey "^A" abbr-expand-and-insert
```

To prevent the creation of the default bindings, set `ABBR_DEFAULT_BINDINGS` to `0` before initializing zsh-abbr. In the following example, <kbd>Ctrl</kbd><kbd>Space</kbd> expands abbreviations and <kbd>Space</kbd> is not bound to any zsh-abbr widget.

```shell
# .zshrc

ABBR_DEFAULT_BINDINGS=0
bindkey "^ " abbr-expand-and-insert
# load zsh-abbr here
```

## Alternative keymaps

By default, zsh-abbr is only enabled for the default keymap. To enable a widget for another keymap, run `bindkey -M`. For example, the following extends zsh-abbr's default behavior to the `viins` keymap:

```shell
# .zshrc

bindkey -M viins " " abbr-expand-and-insert
bindkey -M viins "^ " magic-space
bindkey -M viins "^M" abbr-expand-and-accept
```
