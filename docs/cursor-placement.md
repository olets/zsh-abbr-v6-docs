# Cursor placement

:::danger
These docs are for the not-yet-released v6.  
For v5 docs visit <https://zsh-abbr.olets.dev>
:::

## Basic usage

zsh-abbr can change the position of your cursor. This unlocks "template" abbreviations.

Toggle the cursor placement system on:

```shell
# .zshrc

ABBR_SET_LINE_CURSOR=1
```

Now, under the default configuration, <kbd>Space</kbd> will jump the cursor to the next instance of `%`. For example, create this abbreviation

```shell
% abbr a='my command --flag=% --another-flag %'
```

Now typing `a`<kbd>Space</kbd> expands the abbreviation and places the cursor:

```shell
% my command --flag=[CURSOR IS HERE] --another-flag %
```

And now, typing `xyz`<kbd>Space</kbd> places the cursor again:

```shell
% my command --flag=xyz --another-flag [CURSOR IS HERE]
```

## Advanced usage

The "marker" doesn't have to be `%`. Customize it with the `ABBR_LINE_CURSOR_MARKER` configuration variable. Learn more at [Configuration variables](./configuration-variables.md).

The trigger doesn't have to be <kbd>Space</kbd>. Learn more at [Widgets and key bindings](./widgets-and-key-bindings.md).

### Multiple markers

You can have two distinct cursor markers. One (`ABBR_LINE_CURSOR_MARKER`) is jumped to by the `abbr-expand-and-insert` widget[^1]  _regardless_ of whether an abbreviation was expanded. The other (`ABBR_EXPANSION_CURSOR_MARKER`) is jumped to by the `abbr-expand` widget[^2] _when_ an abbreviation is expanded.

[^1]: In the default configuration, `abbr-expand` is bound to <kbd>Space</kbd>.

[^2]: `abbr-expand` is triggered indirectly by `abbr-expand-and-insert`. You can also bind it directly to a key - learn more at [Widgets and key bindings](./widgets-and-key-bindings.md)

By default, both are `%`. Learn more at [Configuration variables](./configuration-variables.md).

An illustration:

```shell
% ABBR_EXPANSION_CURSOR_MARKER=+
% abbr a=b+c+d%e
% a # after one [Space]: b[CURSOR]c+d%e
    # after a second [Space]: bc+d[CURSOR]e
    #  *not* bc[CURSOR]d%e because the
    #  second [Space] didn't expand an abbreviation
```
