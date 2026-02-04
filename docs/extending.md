# Extending

In addition to the CLI [Commands](./commands.md), the [Exported Variables](./exported-variables.md), and the [Widgets](./widgets-and-key-bindings.md), zsh-abbr makes available functions which will are useful for extensions authors.

### abbr-expand-line <Badge type="info">6.5.0</Badge>

`abbr-expand-line <left-text> [<right text>]` does the heavy lifting of figuring out whether and how a line of text should be manipulated given the cursor placement, the user's zsh-abbr and zsh configurations, and the available abbreviations.

To use it, first create an associative array name `reply` in the scope you'll call `abbr-expand-line` from. Then call `abbr-expand-line`, passing one or two strings.

`abbr-expand-line` will pass if it finds an expandable abbreviation, and will fail otherwise.

The function will change `reply`. The possible keys are

key | Type | Use | Condition
---|---|---|---
`abbreviation` | string | The expandable abbreviation | Exists if an expandable abbreviation was found
`expansion` | string | The expandable abbreviation's expansion | Exists if an expandable abbreviation was found
`expansion_cursor_set` | integer | Whether (`1`) or not (`0`) the expansion cursor was set. Learn more at [Cursor placment](./cursor-placement.md). | Always exists.
`linput` | string | Text to the left of the cursor before any expansion, provided as an argument. | Always exists.
`loutput` | string | Text to the left of the cursor after any expansion. Can be identical to `linput`. | Always exists.
`rinput` | string | Text to the right of the cursor before any expansion, optionally provided as an argument. | Exists if provided, or if `expansion_cursor_set` is truthy.
`routput` | string | Text to the right of the cursor after any expansion. Can be identical to `rinput`. | Exists if an `rinput` was provided, or if `expansion_cursor_set` is truthy.
`type` | string | The expandable abbreviation's [type](./types.md). | Exists if an expandable abbreviation was found

Example CLI use:

```shell
% abbr foo=bar
% typeset -A reply
% abbr-expand-line foo;
% echo $?
0
% typeset -p reply
typeset -A reply=(
  # line breaks added for legibility
  
  [abbreviation]=foo
  [expansion]=bar
  [expansion_cursor_set]=0
  [linput]=foo
  [loutput]=bar
  [type]=regular
)
```

```shell
% abbr -g baz=qux
% typeset -A reply
% abbr-expand-line "foo baz" bar
% echo $?
0
% typeset -p reply
typeset -A reply=(
  # line breaks added for legibility
  
  [abbreviation]=baz
  [expansion]=qux
  [expansion_cursor_set]=0
  [linput]='foo baz'
  [loutput]='foo qux'
  [rinput]=bar
  [routput]=bar
  [type]=global
)
```

```shell
% abbr-expand-line bar
% echo $?
1
% typeset -p reply
typeset -A reply=(
  # line breaks added for legibility
  
  [expansion_cursor_set]=0
  [linput]=bar
  [loutput]=bar
)
```

Example script use (buffer variable use is _not_ required):

```shell
my_fn() {
  local -A reply # will be set by abbr-expand-line
  
  # …
  
  abbr-expand-line $LBUFFER $RBUFFER && {
    [[ -n $reply[abbreviation] ]] && # …
    
    (( reply[expansion_cursor_set] )) && # …
  } || {
    # …
  }
  
  # …
}
```
