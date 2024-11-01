# Reminders

:::danger
These docs are for the not-yet-released v6.  
For v5 docs visit <https://zsh-abbr.olets.dev>
:::

Are you're forgetting to take advantage of the abbreviations you've added? Toggle on reminders.

`ABBR_GET_AVAILABLE_ABBREVIATION` enables and disables the reminders system.

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

If the reminders system is on and you miss using one of your abbreviations, `ABBR_UNUSED_ABBREVIATION`, `ABBR_UNUSED_ABBREVIATION_EXPANSION`, `ABBR_UNUSED_ABBREVIATION_PREFIX`, `ABBR_UNUSED_ABBREVIATION_SCOPE`, and `ABBR_UNUSED_ABBREVIATION_TYPE` will be set. You could use these in your prompt, or in a `precmd` hook.

You don't have to roll your notifier though. Toggle `ABBR_LOG_AVAILABLE_ABBREVIATION` on, and if the reminders system is on and you miss using one of your abbreviations, a reminder message will be logged in the terminal. By default the message prints before command output (the logger will run as a preexec hook); if you prefer to have it print after the command output, toggle on `ABBR_LOG_AVAILABLE_ABBREVIATION_AFTER` (the logger will run as a precmd hook).

Learn how to configure prefixes in [Configuration variables](./configuration-variables.md).
