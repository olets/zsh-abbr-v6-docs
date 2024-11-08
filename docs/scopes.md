---
prev:
  text: Essential commands
  link: /essential-commands.html
---

# Scopes

:::danger
These docs are for the not-yet-released v6.  
For v5 docs visit <https://zsh-abbr.olets.dev>
:::

Some zsh-abbr commands take a **scope** parameter. There are two supported scopes: **session** and **user**. Session abbreviations are available in the terminal session they are created in. User abbreviations are available in all terminal sessions.

User is the default scope.

## User

User abbreviations are **immediately available to all current and future sessions** (that is, in all open and future terminals).

To scope a zsh-abbr command to the user, pass the `--user` flag or its shorthand `-U`… or do not pass a scope flag — user is the default scope.

In the following example, user abbreviations created in terminal 1 _are_ available in terminal 2.

```shell
# terminal 1

% abbr hw="echo hello world"
Added the regular user abbreviation `hw`

% hw[Enter] # expands to `echo hello world` and runs the command
hello world

% abbr --user l="echo longhand"
Added the regular user abbreviation `l`

% l[Enter] # expands to `echo longhand` and runs the command
longhand

% abbr -U s="echo shorthand"
Added the regular user abbreviation `l`

% s[Enter] # expands to `echo shorthand` and runs the command
shorthand
```

```shell
# terminal 2

% hw[Enter] # expands to `echo hello world` and runs the command
hello world

% l[Enter] # expands to `echo longhand` and runs the command
longhand

% s[Enter] # expands to `echo shorthand` and runs the command
shorthand
```

## Session

Session abbreviations are available only in the session they are created in.

To scope a zsh-abbr command to the session, pass the `--session` flag or its shorthand `-S`.

In the following example, session abbreviations created in terminal 1 _are not_ available in terminal 2.

```shell
# terminal 1

% abbr --session hw="echo hello world"
Added the regular session abbreviation `hw`

% hw[Enter] # expands to `echo hello world` and runs the command
hello world

% abbr -S s="echo shorthand"
Added the regular session abbreviation `s`

% s[Enter] # expands to `echo shorthand` and runs the command
shorthand
```

```shell
# terminal 2

% hw[Enter] # no expansion. abbreviation is scoped to terminal 1
zsh: command not found: hw

% s[Enter] # no expansion. abbreviation is scoped to terminal 1
zsh: command not found: s
```

For many users, session scope can reasonably be thought of as "scoped to the current terminal". In fact, it is more restrictive. In the following example, a session abbreviation is not available to a subshell:

```shell
% abbr --session hw="echo hello world"
Added the regular session abbreviation `hw`

% hw[Enter] # expands to `echo hello world` and runs the command
hello world

% zsh

% hw[Enter] # no expansion. abbreviation is scoped to terminal 1
zsh: command not found: hw

% exit

% hw[Enter] # expands to `echo hello world` and runs the command
hello world
```
