# Migrating between versions

[[toc]]

## Upgrading from v5 to v6

1. If you've set up something custom with [Advanced&nbsp;>&nbsp;Widgets&nbsp;and&nbsp;key&nbsp;bindings](/advanced.html#widgets-and-key-bindings) make sure you've migrated off deprecated functions.

    - Instead of `abbr-expand-and-space` use `abbr-expand-and-insert`

1. If you customized the v5-deprecated `ABBR_PRECMD_LOGS`, you can delete that - the feature it relates to has been dropped.

1. If you're using any undocumented internal zsh-abbr functions deprecated in v5, you'll have to come up with something else. 

    <details>
    <summary>See the full list</summary>

    These internal values were dropped:
    - `ABBR_PRECMD_MESSAGE`

    These internal functions were dropped:

    - `_abbr_add_widgets`
    - `_abbr_bind_widgets`
    - `_abbr_deprecations`
    - `_abbr_integrations`
    - `_abbr_precmd`
    - `_abbr:util_deprecated`

    These internal functions deprecated are now internal _only_:

    - `_abbr_init`
    - `_abbr_warn_deprecation`
    - `_abbr:add`
    - `_abbr:clear_session`
    - `_abbr:erase`
    - `_abbr:expand`
    - `_abbr:expansion`
    - `_abbr:export_aliases`
    - `_abbr:git`
    - `_abbr:import_aliases`
    - `_abbr:import_fish`
    - `_abbr:import_git_aliases`
    - `_abbr:list`
    - `_abbr:list_abbreviations`
    - `_abbr:list_commands`
    - `_abbr:print_version`
    - `_abbr:profile`
    - `_abbr:rename`
    - `_abbr:util_add`
    - `_abbr:util_alias`
    - `_abbr:util_bad_options`
    - `_abbr:util_check_command`
    - `_abbr:util_error`
    - `_abbr:util_import_alias`
    - `_abbr:util_list`
    - `_abbr:util_list_item`
    - `_abbr:util_log_unless_quiet`
    - `_abbr:util_log_unless_quieter`
    - `_abbr:util_print`
    - `_abbr:util_set_once`
    - `_abbr:util_set_to_typed_scope`
    - `_abbr:util_sync_user`
    - `_abbr:util_usage`
    - `_abbr:util_warn`

    </details>

1. Install the latest zsh-abbr following the instructions at [Installation](/installation.html).

1. If you use `zsh-syntax-highlighting` to highlight abbreviations, use the new snippets at [Reference&nbsp;>&nbsp;Advanced&nbsp;>&nbsp;Syntax highlighting](/advanced.html#syntax-highlighting).

## Downgrading from v6 to v5

1. Update the config: @TODO
1. Install v5.x
    - Plugin manager: use your manager to install zsh-abbr from branch `v5`.
    - Homebrew:
        install v4
        ```shell:no-line-numbers
        brew uninstall --force zsh-abbr && brew install olets/tap/zsh-abbr@5
        ```
        and follow the post-install instructions logged to the terminal.
    - Manual:
      - either download the latest v5.x's archive from <https://github.com/olets/zsh-abbr/releases>
      - or clone the `v5` branch:
          ```shell:no-line-numbers
          git clone https://github.com/olets/zsh-abbr --single-branch --branch v5 --depth 1
          ```
1. Restart zsh 
    ```shell:no-line-numbers
    exec zsh
    ```

## Older versions

See the [v5 docs](https://v5.zsh-abbr.olets.dev).
