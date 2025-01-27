# Types

Some zsh-abbr commands take a **type** parameter. There are two supported types: **regular** and **global**. Regular abbreviations expand only at the start of the command line. Global abbreviations expand anywhere in the command line.

Regular is the default type.

## Regular

Regular abbreviations expand only at the start of the command line, or —with the default configuration— after `sudo ` at the start of the command line.

::: tip
Read [Prefixes](./prefixes.md) for how to disable the `sudo ` prefix and/or add your own prefixes.
:::

To scope a zsh-abbr command to the user, pass the `--regular` flag or its shorthand `-r`… or do not pass a type flag — regular is the default scope.

In the following examples, regular abbreviations expand at the start of the line but not in other positions:

```shell
% abbr hw="echo hello world"
Added the regular user abbreviation `hw`

% hw[Enter] # expands to `echo hello world` and runs
hello world

% echo foo && hw[Enter] # runs without expanding `hw`
foo
zsh: command not found: hw
```

```shell
% abbr --regular l="echo longhand"
Added the regular user abbreviation `l`

% l[Enter] # expands to `echo longhand` and runs
longhand

% echo foo && l[Enter] # runs without expanding  `l`
zsh: command not found: l
```

```shell
% abbr -r s="echo shorthand"
Added the regular user abbreviation `s`

% s[Enter] # expands to `echo shorthand` and runs
shorthand

% echo foo && s[Enter] # runs without expanding  `s`
zsh: command not found: s
```

## Global

Global abbreviations expand everywhere.

To scope a zsh-abbr command to the user, pass the `--global` flag or its shorthand `-g`.

In the following examples, global abbreviations expand at the start of the line and also in other positions:

```shell
% abbr -g hw="echo hello world"
Added the global user abbreviation `hw`

% hw[Enter] # expands to `echo hello world` and runs
hello world

% echo foo && hw[Enter] # expands to `echo foo && echo hello world` and runs
foo
hello world
```

```shell
% abbr --global l="echo longhand"
Added the global user abbreviation `l`

% l[Enter] # expands to `echo longhand` and runs
longhand

% echo foo && l[Enter] # expands to `echo foo && echo longhand` and runs
foo
longhand
```

```shell
% abbr -g s="echo shorthand"
Added the global user abbreviation `s`

% s[Enter] # expands to `echo shorthand` and runs
shorthand

% echo foo && s[Enter] # expands to `echo foo && echo shorthand` and runs
foo
shorthand
```
