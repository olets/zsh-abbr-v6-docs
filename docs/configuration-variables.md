# Configuration variables

:::danger
These docs are for the not-yet-released v6.  
For v5 docs visit <https://zsh-abbr.olets.dev>
:::

::: tip
Scroll the table horizontally
:::

Variable | Added&nbsp;In | Type | <div style="width: 300px">Use</div> | Default | Limitations
---|---|---|---|---|---
`ABBR_AUTOLOAD` | <Badge type="info">3.3.2</Badge> | integer | If non-zero, automatically account for updates to the user abbreviations file (read [Storage and manual editing](#storage-and-manual-editing)) | 1
`ABBR_DEBUG` | <Badge type="info">3.2.0</Badge> | integer | If non-zero, print debugging messages | 0
`ABBR_DEFAULT_BINDINGS` | <Badge type="info">2.0.0</Badge> | integer | If non-zero, add the default bindings (read [Widgets&nbsp;and&nbsp;key&nbsp;bindings](#widgets-and-key-bindings)) | 1
`ABBR_DRY_RUN` | <Badge type="info">3.2.0</Badge> | integer | If non-zero, use dry run mode without passing `--dry-run` | 0
`ABBR_EXPAND_AND_ACCEPT_PUSH_ABBREVIATED_LINE_TO_HISTORY` | <Badge type="warning">6.0.0</Badge> | integer | If non-zero, when `abbr-expand-and-accept` expands an abbreviation it adds one or two entries to the shell history, before the accepted line's history entry. If `ABBR_EXPAND_PUSH_ABBREVIATION_TO_HISTORY` is zero, one history entry is added: the line before it expanded. If `ABBR_EXPAND_PUSH_ABBREVIATION_TO_HISTORY` is non-zero the abbreviation is added to the shell history _and_, if there was more on the unexpanded line that just the abbreviation, the unexpanded line is added as a separate history entry. | 0 | Unaware of `setopt hist_ignore_space` and `unsetopt hist_ignore_space` run interactively after session initialization.
`ABBR_EXPAND_PUSH_ABBREVIATION_TO_HISTORY` | <Badge type="warning">6.0.0</Badge> | integer | If non-zero, when `abbr-expand` expands an abbreviation it also adds the abbreviation to the shell history | 0
`ABBR_EXPANSION_CURSOR_MARKER` | <Badge type="info">5.4.0</Badge> |string | Read `ABBR_SET_EXPANSION_CURSOR` in this table | `$ABBR_LINE_CURSOR_MARKER` | Cannot contain `^`. Read [issue #140](https://github.com/olets/zsh-abbr/issues/140).
`ABBR_FORCE` | <Badge type="info">5.1.0</Badge> | integer | If non-zero, use force mode without passing `--force` (read [Usage&nbsp;>&nbsp;Commands&nbsp;>&nbsp;`add`](/commands.html#add)) | 0
`ABBR_GET_AVAILABLE_ABBREVIATION` | <Badge type="warning">6.0.0</Badge> | integer | If non-zero, check whether you could have used an abbreviation | 0
`ABBR_LINE_CURSOR_MARKER` | <Badge type="info">5.4.0</Badge> | string | Read `ABBR_SET_LINE_CURSOR` in this table | `%`
`ABBR_LOG_AVAILABLE_ABBREVIATION` | <Badge type="warning">6.0.0</Badge> | integer | If non-zero, log the abbreviation you could have used (you'll want to toggle `ABBR_GET_AVAILABLE_ABBREVIATION` on, too) | 0
`ABBR_LOG_AVAILABLE_ABBREVIATION_AFTER` | <Badge type="warning">6.0.0</Badge> | integer | If non-zero, `ABBR_LOG_AVAILABLE_ABBREVIATION` output is logged _after_ the command output | 0
`ABBR_QUIET` | <Badge type="info">4.0.0</Badge> | integer | If non-zero, use quiet mode without passing `--quiet` | 0
`ABBR_QUIETER` | <Badge type="info">4.4.0</Badge> | integer | If non-zero, use quieter mode without passing `--quieter` | 0
`ABBR_REGULAR_ABBREVIATION_GLOB_PREFIXES` | <Badge type="warning">6.0.0</Badge> | array | Glob prefixes. One or more prefixes can go in front of a regular abbreviation, and it will still expand. | `( ' ' )`
`ABBR_REGULAR_ABBREVIATION_SCALAR_PREFIXES` | <Badge type="warning">6.0.0</Badge> | array | Scalar prefixes. One or more prefixes can go in front of a regular abbreviation, and it will still expand. | `( 'sudo ' )`
`ABBR_SET_EXPANSION_CURSOR` | <Badge type="info">5.4.0</Badge> | integer | If non-zero and the expansion includes `ABBR_EXPANSION_CURSOR_MARKER`, `abbr-expand` will replace the expansion's first instance of `ABBR_EXPANSION_CURSOR_MARKER` with the cursor, and `abbr-expand-and-insert`'s bound key will not be inserted at the end of the expansion (read also [Widgets and key bindings](#widgets-and-key-bindings)) | 0
`ABBR_SET_LINE_CURSOR` | <Badge type="info">5.4.0</Badge> | integer | If non-zero and `abbr-expand` didn't place the cursor (because the `ABBR_SET_EXPANSION_CURSOR` is zero or the expansion did not include `ABBR_EXPANSION_CURSOR_MARKER`), `abbr-expand-and-insert` will replace the line's first instance of `ABBR_LINE_CURSOR_MARKER` with the cursor instead of inserting its bound key at the end of the expansion (read also [Widgets and key bindings](#widgets-and-key-bindings)) | 0
`ABBR_TMPDIR` | <Badge type="info">4.0.0</Badge> | String | Path to the directory temporary files are stored in. | `${${TMPDIR:-/tmp}%/}/zsh-abbr/` for users without privileges,<br>`${${TMPDIR:-/tmp}%/}/zsh-abbr/` for users with privileges (e.g. `su`)<br><br> If changing this, you may want to delete the default directory.<br>As of v5.7.0, custom values for this variable do not have to end in `/`.
`ABBR_USER_ABBREVIATIONS_FILE` | <Badge type="info">4.0.0</Badge> | String | Path to the file user abbreviation are stored in (read [Storage and manual editing](#storage-and-manual-editing)) | `${XDG_CONFIG_HOME:-$HOME/.config}/zsh-abbr/user-abbreviations` <br><br> with legacy support for using `${XDG_CONFIG_HOME:-$HOME/.config}/zsh/abbreviations` instead if a file exists at that path <br><br> If changing this, you may want to delete the default file.
`NO_COLOR` | <Badge type="info">3.3.3</Badge> | mixed | If set (to any value or no value at all) abbr will not use color in its output. Learn more at <https://no-color.org/>.

