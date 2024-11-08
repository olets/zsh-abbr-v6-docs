# Uninstalling

:::danger
These docs are for the not-yet-released v6.  
For v5 docs visit <https://zsh-abbr.olets.dev>
:::

Delete the session data storage directory

```shell
% rm -rf $ABBR_TMPDIR
```

If you want to delete the user abbreviations file,

```shell
% rm $ABBR_USER_ABBREVIATIONS_FILE
```

If you haven't customized `$ABBR_USER_ABBREVIATIONS_FILE`, you will probably want to delete its parent directory

```shell
# check whether there's anything in there
% ls $ABBR_USER_ABBREVIATIONS_FILE:h
# IF you want to delete it
% rm -rf $ABBR_USER_ABBREVIATIONS_FILE:h
```

Then follow the standard uninstall procedure for your installation method. This is typically the reverse of what you did to install.
