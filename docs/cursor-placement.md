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

and use the `ABBR_EXPANSION_CURSOR_MARKER` (default: `%`) in your abbreviations

```shell
% abbr git m='commit -m "%"'
Added the regular user abbreviation `m`
Added the global user abbreviation `git m`
% m[SPACE] # expands to `git commit -m ""` with the cursor between the quotation marks
```

You can use this to disable the trailing space after expanding abbreviations with <kbd>Space</kbd> in the default config:

```shell
% abbr a="trailing space"
% abbr b="no trailing space%"
% a[Space]b[Space] # expands to `trailing space no trailing space`
```

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

Now typing `a`<kbd>Space</kbd> expands the abbreviation and places the cursor:

```shell
% my command --flag=[CURSOR IS HERE] --another-flag %
```

And now, typing `xyz`<kbd>Space</kbd> places the cursor again:

```shell
% my command --flag=xyz --another-flag [CURSOR IS HERE]
```

## Advanced usage

- The "marker" doesn't have to be `%`. Customize it with the `ABBR_LINE_CURSOR_MARKER` configuration variable. Learn more at [Configuration variables](./configuration-variables.md).

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
    % a # after one [Space]: b[CURSOR]c+d%e
        #   because [Space] expanded an abbreviation
        #
        # after a second [Space]: bc+d[CURSOR]e
        #   *not* bc[CURSOR]d%e
        #   because the second [Space]
        #   didn't expand an abbreviation
    ```
