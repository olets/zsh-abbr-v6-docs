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

Now typing `a` and then <kbd>Space</kbd> expands the abbreviation and places the cursor:

```
% my command --flag=[CURSOR IS HERE] %
```

And now, typing `xyz` and then <kbd>Space</kbd> places the cursor again:

```
% my command --flag=xyz --another-flag [CURSOR IS HERE]
```

## Advanced usage

The "marker" doesn't have to be `%`. Customize it with the `ABBR_LINE_CURSOR_MARKER` configuration variable. Learn more at [Configuration variables](./configuration-variables.md).

The trigger doesn't have to be <kbd>Space</kbd>. Learn more at [Widgets and key bindings](./widgets-and-key-bindings.md).

You can have two cursor markers, one —`ABBR_LINE_CURSOR_MARKER`— used by the `abbr-expand-and-insert` widget (the widget called by <kbd>Space</kbd> in the default configuration) and another —`ABBR_EXPANSION_CURSOR_MARKER`— used by the `abbr-expand` widget (not used in the default configuration). Learn more at [Configuration variables](./configuration-variables.md) and [Widgets and key bindings](./widgets-and-key-bindings.md).
