## Exported variables

:::danger
These docs are for the not-yet-released v6.  
For v5 docs visit <https://zsh-abbr.olets.dev>
:::

::: tip
Scroll the table horizontally
:::

In addition to exporting the configuration variables above, zsh-abbr creates the following variables:

Variable | Added&nbsp;In | Type | Value
---|---|---|---
`ABBR_GLOBAL_SESSION_ABBREVIATIONS` | <Badge type="info">4.0.0</Badge> | associative array | The global session abbreviations
`ABBR_GLOBAL_USER_ABBREVIATIONS` | <Badge type="info">4.0.0</Badge> | associative array | The global user abbreviations
`ABBR_REGULAR_SESSION_ABBREVIATIONS` | <Badge type="info">4.0.0</Badge> | associative array | The regular session abbreviations
`ABBR_REGULAR_USER_ABBREVIATIONS` | <Badge type="info">4.0.0</Badge> | associative array | The regular user abbreviations
`ABBR_SOURCE_PATH` | <Badge type="info">3.3.3</Badge> | string | Path to the `zsh-abbr.zsh`
`ABBR_UNUSED_ABBREVIATION` | <Badge type="warning">6.0.0</Badge> | string | If `ABBR_GET_AVAILABLE_ABBREVIATION` is non-zero and you miss an opportunity to use one of your abbreviations, this is set to the abbreviation you could have used.
`ABBR_UNUSED_ABBREVIATION_EXPANSION` | <Badge type="warning">6.0.0</Badge> | string | If `ABBR_GET_AVAILABLE_ABBREVIATION` is non-zero and you miss an opportunity to use one of your abbreviations, this is set to the thing you could have abbreviated.
`ABBR_UNUSED_ABBREVIATION_PREFIX` | <Badge type="warning">6.0.0</Badge> | string | If `ABBR_GET_AVAILABLE_ABBREVIATION` is non-zero and you miss an opportunity to use a prefixed abbreviation, this is set to the prefix.
`ABBR_UNUSED_ABBREVIATION_SCOPE` | <Badge type="warning">6.0.0</Badge> | string |  If `ABBR_GET_AVAILABLE_ABBREVIATION` is non-zero and you miss an opportunity to use one of your abbreviations, this is set to the scope (`user` or `session`) of abbreviation you could have used.
`ABBR_UNUSED_ABBREVIATION_TYPE` | <Badge type="warning">6.0.0</Badge> | string |  If `ABBR_GET_AVAILABLE_ABBREVIATION` is non-zero and you miss an opportunity to use one of your abbreviations, this is set to the type (`regular` or `global`) of the abbreviation you could have used.

Each element in `ABBR_GLOBAL_SESSION_ABBREVIATIONS`, `ABBR_GLOBAL_USER_ABBREVIATIONS`, `ABBR_REGULAR_SESSION_ABBREVIATIONS`, and `ABBR_REGULAR_USER_ABBREVIATIONS` has the form `ABBREVIATION=EXPANSION`. The expansion value is quoted. Scripters will probably want to remove one level of quotes, using the [Q modifier](http://zsh.sourceforge.net/Doc/Release/Expansion.html#Modifiers) (e.g. `for v in ${(Qv)ABBR_REGULAR_USER_ABBREVIATIONS}...`).

### Transient exported variables

zsh-abbr exports the following variables in limited contexts:

::: tip
Scroll the table horizontally
:::

Variable | Added&nbsp;In | Type | Value
---|---|---|---
`ABBR_INITIALIZING` | <Badge type="info">4.0.0</Badge> | integer | Set to `1` when zsh-abbr is initializing, otherwise not set
`ABBR_LOADING_USER_ABBREVIATIONS` | <Badge type="info">4.0.0</Badge> | integer | Set to `1` when the interactive shell is refreshing its list of user abbreviations, otherwise not set
