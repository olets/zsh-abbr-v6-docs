# Prefixes

:::danger
These docs are for the not-yet-released v6.  
For v5 docs visit <https://zsh-abbr.olets.dev>
:::

Out of the box regular abbreviations ([Types > Regular](../types.md#regular)) expand only at the start of the command line.

_Regular abbreviation prefixes_ are strings ( ) and globs that don't count against the "start of the line"-ness.

There is one regular abbreviation prefix by default: the string `sudo `. Here's the difference it makes:

```shell
# zsh-abbr < v6.0.0
abbr a=b
a[Enter] # expands to `b`
sudo a[Enter] # does nothing

# zsh-abbr 6.x
abbr a=b
a[Enter] # expands to `b`
sudo a[Enter] # expands to `b`
```

You can prefix a regular abbreviation with as many regular abbreviation prefixes as you like, and it will still expand.

Here's an example combining scalar (string or number) and glob prefixes:

```shell
# .zshrc
ABBR_REGULAR_ABBREVIATION_SCALAR_PREFIXES=( 'xyz ' 'sudo ' )
ABBR_REGULAR_ABBREVIATION_GLOB_PREFIXES=( '?.' )
```

```shell
abbr a=b
e.xyz sudo a[SPACE] # expands to `e.xyz sudo bcd`
xyz e.sudo a[SPACE] # expands to `xyz e.sudo bcd`
xyz sudo e.a[SPACE] # expands to `xyz sudo e.bcd`
```

Learn how to configure prefixes in [Configuration variables](./configuration-variables.md).
