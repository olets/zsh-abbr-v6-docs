# Reminders

## Basics

Think you're forgetting to take advantage of the abbreviations you've added? Want to be reminded? Enable the reminders system and the reminders notifier:

```shell
# .zshrc

ABBR_GET_AVAILABLE_ABBREVIATION=1
ABBR_LOG_AVAILABLE_ABBREVIATION=1
```

Now if you miss using one of your abbreviations, a reminder message will be logged in the terminal.

```
% abbr a=b
% b[Enter]
abbr: `a` is your regular user abbreviation for `b`
```

By default, the message prints before command output, if any.

```shell
% abbr hw="echo hello world"
% echo hello world
abbr: `a` is your regular user abbreviation for `b`
hello world
```

If you prefer to have it print after the command output, toggle on `ABBR_LOG_AVAILABLE_ABBREVIATION_AFTER`:

```shell
# .zshrc

ABBR_GET_AVAILABLE_ABBREVIATION=1
ABBR_LOG_AVAILABLE_ABBREVIATION=1
ABBR_LOG_AVAILABLE_ABBREVIATION_AFTER=1
```

```shell
% abbr hw="echo hello world"
% echo hello world
hello world
abbr: `a` is your regular user abbreviation for `b`
```

::: info
The reminders system cannot distinguish between a command you typed and a command you pulled up from history. For example, with the reminders system on and reminder logging on:

```shell
% abbr a=b

% b[Enter]
abbr: `a` is your global user abbreviation for `b`
# ^ that's good

# now 
% [pull up the previous from history][Enter]
abbr: `a` is your global user abbreviation for `b`
# ^ might feel like a false positive
```

But _you_ know you didn't miss using the abbreviation!
:::

## Advanced

The reminders system sets several variables:

- `ABBR_UNUSED_ABBREVIATION` is the abbreviation you could have used
- `ABBR_UNUSED_ABBREVIATION_EXPANSION` is what you typed instead
- `ABBR_UNUSED_ABBREVIATION_PREFIX` is the prefix you would have to use along with the abbreviation, if any (learn more at [Prefixes](./prefixes.md))
- `ABBR_UNUSED_ABBREVIATION_SCOPE` is the scope of the abbreviation you could have used (learn more at [Scopes](./scopes.md))
- `ABBR_UNUSED_ABBREVIATION_TYPE` is the type of the abbreviation you could have used (learn more at [Types](./types.md))

Advanced users might choose to do something with these values. For example, you could not enable the reminders notifier and instead use a `precmd` hook to customize your prompt:

```shell
# .zshrc

ABBR_GET_AVAILABLE_ABBREVIATION=1
# leave ABBR_LOG_AVAILABLE_ABBREVIATION unset
my_abbreviation_reminder() {
  # …
}
autoload -U add-zsh-hook
add-zsh-hook precmd my_abbreviation_reminder
```
