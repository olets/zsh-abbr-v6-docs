# Storage and manual editing

:::danger
These docs are for the not-yet-released v6.  
For v5 docs visit <https://zsh-abbr.olets.dev>
:::

User abbreviations live in a plain text file which you can edit directly, share, keep in version control, etc.

The path to the file is stored in the `ABBR_USER_ABBREVIATIONS_FILE` configuration variable. Read [Configuration variables](#configuration-variables) for details.

Abbreviations in this file are loaded when each new session is opened; non-`abbr` commands will be ignored and then excised from the file.

zsh-abbr automatically keeps the user abbreviations storage file alphabetized, with all global user abbreviations before the first regular user abbreviation.

Every time an `abbr` command is run, the session's updates its user abbreviations with the latest from the user abbreviations file. This should add no appreciable time, but you prefer it can be turned off by setting `ABBR_AUTOLOAD=0`.

To refresh the user abbreviations from the user abbreviation, run `abbr load` (or any other `abbr` command).

