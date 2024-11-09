# Cursor placement

:::danger
These docs are for the not-yet-released v6.  
For v5 docs visit <https://zsh-abbr.olets.dev>
:::

## Place the cursor after expanding abbreviations

Toggle the "expansion cursor placement" system on:

```shell
# .zshrc

ABBR_SET_EXPANSION_CURSOR=1
```

and use the "expansion cursor marker" in your abbreviations (default: `%`; learn more at [Configuration variables > `ABBR_EXPANSION_CURSOR_MARKER`](./configuration-variables.md))

```shell
% abbr git m='commit -m "%"'
Added the regular user abbreviation `m`
Added the global user abbreviation `git m`
```

Now, typing `m`<kbd>Space</kbd> expands the abbreviation `m` and replaces the expansion's first expansion cursor marker with the cursor:

> `git commit -m "`<kbd>Cursor</kbd>`"`

&nbsp;

::: tip
You can use this to disable the trailing space after expanding abbreviations with <kbd>Space</kbd> in the default config:

```shell
% abbr a="trailing space"
% abbr b="no trailing space%"
% a[Space]b[Space] # expands to `trailing space no trailing space`
```
:::

## Place the cursor, regardless of expansion

zsh-abbr can change the position of your cursor even when you aren't expanding abbreviations. This unlocks "template" abbreviations.

Toggle the "line cursor placement" system on:

```shell
# .zshrc

ABBR_SET_LINE_CURSOR=1
```

Now, under the default configuration, <kbd>Space</kbd> will jump the cursor to the next instance of `%`. For example, create this abbreviation

```shell
% abbr a='my command --flag=% --another-flag %'
```

Now typing `a`<kbd>Space</kbd> expands the abbreviation and then replaces the line's first _line_ cursor marker (`%` by default) with the cursor:

> `my command --flag=`<kbd>Cursor</kbd>` --another-flag %`

From here, typing `xyz`<kbd>Space</kbd> places the cursor again:

> `my command --flag=xyz --another-flag `<kbd>Cursor</kbd>

## Advanced usage

- The "markers" don't have to be `%`. Customize the with `ABBR_EXPANSION_CURSOR_MARKER` and/or `ABBR_LINE_CURSOR_MARKER`. Learn more at [Configuration variables](./configuration-variables.md).

    ::: tip
    Consider changing the markers to something you'll never use in a command. For example an unusual Unicode character, or a long string like `%ABBR_CURSOR_MARKER%`.
    :::

- The trigger doesn't have to be <kbd>Space</kbd>. Learn more at [Widgets and key bindings](./widgets-and-key-bindings.md).

- The _expansion_ cursor placement and _line_ cursor placement systems can use distinct "markers". One (`ABBR_LINE_CURSOR_MARKER`) is jumped to by the `abbr-expand-and-insert` widget[^1] _regardless_ of whether an abbreviation was expanded. The other (`ABBR_EXPANSION_CURSOR_MARKER`) is jumped to by the `abbr-expand` widget[^2] _when_ an abbreviation is expanded.

    [^1]: In the default configuration, `abbr-expand` is bound to <kbd>Space</kbd>.

    [^2]: `abbr-expand` is triggered indirectly by `abbr-expand-and-insert`. You can also bind it directly to a key - learn more at [Widgets and key bindings](./widgets-and-key-bindings.md)

    By default, both are `%`. Learn more at [Configuration variables](./configuration-variables.md).

    An illustration:

    ```shell
    # .zshrc

    ABBR_SET_EXPANSION_CURSOR=1
    ABBR_SET_LINE_CURSOR=1
    ABBR_EXPANSION_CURSOR_MARKER=+
    # load zsh-abbr here
    ```

    ```shell
    % abbr a=b+c+d%e
    ```

    Now, typing `a`<kbd>Space</kbd> will change the line to `b`<kbd>Cursor</kbd>`c+d%e`. The cursor replaces the abbreviation's first expansion cursor marker because <kbd>Space</kbd> expanded an abbreviation.
    
    Typing <kbd>Space</kbd> a second time will change the line to `bc+d`<kbd>Cursor</kbd>`e`. The cursor doesn't replace the line's next _expansion_ cursor marker, because no abbreviation was expanded; instead the cursor replaces the line's next _line_ cursor marker.
