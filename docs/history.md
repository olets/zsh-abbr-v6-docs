# History

You can configure zsh-abbr to save abbreviations to your shell history.

There are two levers in the history system:

## Save abbreviations to history

zsh-abbr can add expanded abbreviations to your shell history. Given this configuration [^1]

[^1]: Learn more at [Configuration variables](./configuration-variables.md).

```shell
# .zshrc

ABBR_EXPAND_PUSH_ABBREVIATION_TO_HISTORY=1
```

and these abbreviations

```shell
% abbr a=b
% abbr -g c=d
```

When you do any of

```shell
% a[Space]
% a[Enter]
% c[Space]
% c[Enter]
% e c[Space]
% e c[Enter]
```

the abbreviation you expanded (`a` or `c`) will be added to your shell history.

## Save lines with abbreviations to history

When you hit enter[^2] to expand an abbreviation and run the command line, an abbreviation in a line that has content besides the abbreviation, you can save the full line with the unexpanded abbreviation to the shell history.

[^2]: Learn more at [Widgets and key bindings](./widgets-and-key-bindings.md).

```shell
# .zshrc

ABBR_EXPAND_AND_ACCEPT_PUSH_ABBREVIATED_LINE_TO_HISTORY=1
```

and this abbreviation

```shell
% abbr -g c=d
```

When you do

```shell
% e c[Enter]
```

_two_ entries will be added to your shell history: first `e c` and then `e d`.

::: danger Caution
This feature supports `hist_ignore_space` (learn more in the [zsh History Options docs](https://zsh.sourceforge.io/Doc/Release/Options.html#History)) _to a degree_: it follows the value of `hist_ignore_space` when the session is initialized, but does not pick up on changes made interactively to the option.

**Do this**

```shell
# .zshrc

setopt hist_ignore_space
ABBR_EXPAND_AND_ACCEPT_PUSH_ABBREVIATED_LINE_TO_HISTORY=1
```

```shell
abbr a=b
echo a[Enter] # `echo a` will saved to history (expected)
 echo a[Enter] # `echo a` will not be saved to history (expected)
```

**Don't do this**

```shell
# .zshrc

ABBR_EXPAND_AND_ACCEPT_PUSH_ABBREVIATED_LINE_TO_HISTORY=1
```

```shell
abbr a=b
setopt hist_ignore_space
echo a[Enter] # `echo a` will saved to history (expected)
 echo a[Enter] # ⚠️ `echo a` will be saved to history (unexpected) ⚠️
```
:::

## Save abbreviations _and_ lines with abbreviations to history

The two can be combined. Given this configuration,

```shell
# .zshrc

ABBR_EXPAND_PUSH_ABBREVIATED_LINE_TO_HISTORY=1
ABBR_EXPAND_AND_ACCEPT_PUSH_ABBREVIATED_LINE_TO_HISTORY=1
```

and this abbreviation

```shell
% abbr -g c=d
```

When you do

```shell
% e c[Enter]
```

_three_ entries will be added to your shell history: first `c`, then `e c`, and then `e d`.
