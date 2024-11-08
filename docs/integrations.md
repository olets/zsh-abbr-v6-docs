# Integrations

:::danger
These docs are for the not-yet-released v6.  
For v5 docs visit <https://zsh-abbr.olets.dev>
:::

:::warning
These integrations are not regularly tested. It is possible that they are out of date. Pull requests are welcome to fix broken integrations. The zsh-abbr maintainer does not commit to keeping them working — if something breaks and the maintainer and the community does not have a fix, it may be removed from this documentation.
:::

## Syntax highlighting

### fast-syntax-highlighting

To highlight user abbreviations that will expand, [fast-syntax-highlighting](https://github.com/zdharma-continuum/fast-syntax-highlighting) users can add these lines to `.zshrc` *below* where zsh-abbr and all abbreviations are loaded.

> Known limitations:
> 1. the following fast-syntax-highlighting solution only supports single-word abbreviations. 🌟 Want highlighting for multi-word abbreviations? Read [zsh-abbr#24](https://github.com/olets/zsh-abbr/issues/24).
> 1. Only and all of the abbreviations defined when the shell was started will be highlighted. fast-syntax-highlighting won't know about any abbreviation additions, erasures, or renames. To update fast-syntax-highlighting, open a new terminal, or restart the shell by running `exec zsh`.

```shell
# .zshrc

# load zsh-abbr, then

chroma_single_word() {
  (( next_word = 2 | 8192 ))

  local __first_call="$1" __wrd="$2" __start_pos="$3" __end_pos="$4"
  local __style

  (( __first_call )) && { __style=${FAST_THEME_NAME}alias }
  [[ -n "$__style" ]] && (( __start=__start_pos-${#PREBUFFER}, __end=__end_pos-${#PREBUFFER}, __start >= 0 )) && reply+=("$__start $__end ${FAST_HIGHLIGHT_STYLES[$__style]}")

  (( this_word = next_word ))
  _start_pos=$_end_pos

  return 0
}

register_single_word_chroma() {
  local word=$1
  if [[ -x $(command -v $word) ]] || [[ -n $FAST_HIGHLIGHT["chroma-$word"] ]]; then
    return 1
  fi

  FAST_HIGHLIGHT+=( "chroma-$word" chroma_single_word )
  return 0
}

if [[ -n $FAST_HIGHLIGHT ]]; then
  for abbr in ${(f)"$(abbr list-abbreviations)"}; do
    if [[ $abbr != *' '* ]]; then
      register_single_word_chroma ${(Q)abbr}
    fi
  done
fi
```

### zsh-syntax-highlighting

To highlight user abbreviations that will expand, [zsh-syntax-highlighting](https://github.com/zsh-users/zsh-syntax-highlighting) users can add these lines to `.zshrc` *below* where zsh-abbr is loaded. For more info read the [zsh-syntax-highlighting regexp highlighter documentation](https://github.com/zsh-users/zsh-syntax-highlighting/blob/master/docs/highlighters/regexp.md).

Replace `<styles for …>` with a [zsh character highlighting](http://zsh.sourceforge.net/Doc/Release/Zsh-Line-Editor.html#Character-Highlighting) string (start at "The available types of highlighting are the following."). For example `fg=blue`, `fg=blue,bg=red,bold`, etc.

> Known limitations:
> 1. The following zsh-syntax-highlighting solutions do not support unmatched parentheses within abbreviations. For example the valid `abbr '('='(x'` will make zsh-syntax-highlighting error. 🌟 Have a better solution? Please [contribute it](/contributing.html)!
> 1. Only and all of the abbreviations defined when the shell was started will be highlighted. zsh-syntax-highlighting won't know about any abbreviation additions, erasures, or renames. To update zsh-syntax-highlighting, open a new terminal, or restart the shell by running `exec zsh`.

Linux:

```shell
# .zshrc

# load zsh-abbr, then
# make sure to replace `<styles for …>` (read above)

(( ${#ABBR_REGULAR_USER_ABBREVIATIONS} )) && {
  ZSH_HIGHLIGHT_HIGHLIGHTERS+=(regexp)
  ZSH_HIGHLIGHT_REGEXP+=('^[[:blank:][:space:]]*('${(j:|:)${(Qk)ABBR_REGULAR_USER_ABBREVIATIONS}}')$' <styles for regular abbreviations>)
  ZSH_HIGHLIGHT_REGEXP+=('\<('${(j:|:)${(Qk)ABBR_GLOBAL_USER_ABBREVIATIONS}}')$' <styles for global abbreviations>)
}
```

macOS:

```shell
# .zshrc

# load zsh-abbr, then
# make sure to replace `<styles for …>` (read above)

(( ${#ABBR_REGULAR_USER_ABBREVIATIONS} )) && {
  ZSH_HIGHLIGHT_HIGHLIGHTERS+=(regexp)
  ZSH_HIGHLIGHT_REGEXP=('^[[:blank:][:space:]]*('${(j:|:)${(Qk)ABBR_REGULAR_USER_ABBREVIATIONS}}')$' <styles for regular abbreviations>)
  ZSH_HIGHLIGHT_REGEXP+=('[[:<:]]('${(j:|:)${(Qk)ABBR_GLOBAL_USER_ABBREVIATIONS}}')$' <styles for global abbreviations>)
}
```

After adding the snippets, all new terminals will use them. To use them in an already-open terminal, restart zsh in that terminal:

```shell
exec zsh
```

## vi mode

Switching to vi mode —with `bindkey -v` or software which calls `bindkey -v` — will wipe out the keybindings zsh-abbr's interactive behavior relies on. If you use vi mode, enable it before initializing zsh-abbr. 

```shell
# .zshrc

bindkey -v
# load zsh-abbr here
```

## macOS System Text Substitutions

Run following snippet in your terminal to create regular user abbreviations for all your macOS text substitutions (to create session and/or global abbreviations, modify the `abbr add` line).

```shell
for substitution in ${(f)"$(defaults read ~/Library/Preferences/.GlobalPreferences.plist NSUserDictionaryReplacementItems | plutil -convert json -o - - | jq -r 'to_entries[] | "\(.value.replace)=\(.value.with)"')"}; do
  abbr add "$substitution"
done
```

## Suggestions

For [zsh-autosuggestions](https://github.com/zsh-users/zsh-autosuggestions) integration, use [zsh-autosuggestions-abbreviations-strategy](https://github.com/olets/zsh-autosuggestions-abbreviations-strategy).
