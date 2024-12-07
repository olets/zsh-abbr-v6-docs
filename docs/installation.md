# Installation

## Package

### Homebrew

zsh-abbr is available on Homebrew. Run

```shell
brew install olets/tap/zsh-abbr
```

and follow the post-install instructions logged to the terminal.

:::tip
`brew upgrade` will upgrade you to the latest version, even if it's a major version change.

Want to stay on this major version until you _choose_ to upgrade to the next? When installing zsh-abbr with Homebrew for the first time, run

```shell
brew install olets/tap/zsh-abbr@6
```

If you've already installed `olets/tap/zsh-abbr` with Homebrew, you can switch to the v6 formula by running

```shell
brew uninstall --force zsh-abbr && brew install olets/tap/zsh-abbr@6
```
:::

### Linux package repositories

::: warning
These may lag behind the official release channels.
:::

Community members have created packages in some Linux distros' package repositories. These include

- [Arch](https://aur.archlinux.org/packages/zsh-abbr)
- [NixOS](https://search.nixos.org/packages?show=zsh-abbr)

There may be others out there. If you know of another, please make a pull request to this page!

## Plugin

You can install zsh-abbr with a zsh plugin manager, including those built into frameworks such as Oh-My-Zsh (OMZ) and prezto. Each has their own way of doing things. Read your package manager's documentation or the [zsh plugin manager plugin installation procedures gist](https://gist.github.com/olets/06009589d7887617e061481e22cf5a4a); Fig users can install zsh-abbr from [its page in the Fig plugin directory](https://fig.io/plugins/other/zsh-abbr_olets).

:::warning
v6 is compatible with most but not all plugin managers in the [zsh plugin manager plugin installation procedures gist](https://gist.github.com/olets/06009589d7887617e061481e22cf5a4a).

Antibody, Antigen, zplug, and zsh4humans may be incompatible (if you have a working solution for any of those, please suggest an edit to this page).

If your plugin manager is not compatible, you can still install zsh-abbr [manually](#manual) or [with Homebrew](#homebrew).
:::

:::tip
Want to stay on this major version until you _choose_ to upgrade to the next? Use your package manager's convention for specifying the branch `v6`.
:::

After adding the plugin to the manager, it will be available in all new terminals. To use it in an already-open terminal, restart zsh in that terminal:

```shell
exec zsh
```

## Manual

:::warning Heads up
Getting a warning "There was a problem finishing installing dependencies"? If you cloned the Git repo, make sure you initialized the plugin's submodules. A simple solution is to pass `--recurse-submodules` when `git clone`ing.
:::

- Either download the archive of the release of your choice from <https://github.com/olets/zsh-abbr/releases> and expand it (ensures you have the latest official release). Follow the release notes: you want the file at

    ```
    https://github.com/olets/zsh-abbr/releases/download/<version>/<version>.tar.gz
    ```

    *not* one of the ones at

    ```
    https://github.com/olets/zsh-abbr/archive/refs/tags/<version>.<extension>
    ```

  :::tip Want to automate downloading an archive?
  Advanced users can script downloading the latest release's tarball without depending on Git.
  
  <details>
  <summary class="underline">Click to display details.</summary>

  One way is to use the GitHub REST API to find the latest release's associated tag, and then download the associated release's same-named asset. Learn more in GitHub's ["Get the latest release" REST API docs](https://docs.github.com/en/rest/releases/releases?apiVersion=2022-11-28#get-the-latest-release).

  ```json
  // JSON response

  {
    // ...
    "tag_name": // …
    // ...
  }
  ```

  The URL pattern for the correct tarball to download is:

  ```
  https://github.com/olets/zsh-abbr/releases/download/<latest release's tag name>/<latest release's tag name>.tar.gz
  ```
  </details>
  :::

- or clone a single branch:

    ```shell
    git clone https://github.com/olets/zsh-abbr --recurse-submodules --single-branch --branch <branch> --depth 1
    ```

    Replace `<branch>` with a branch name. Good options are `main` (for the latest stable release), `next` (for the latest release, even if it isn't stable), or `v6` (for releases in this major version).

Then add `source path/to/zsh-abbr.zsh` to your `.zshrc` (replace `path/to/` with the real path), and restart zsh:

```shell
exec zsh
```

### Updating

If you downloaded an archive, download the latest and update your `.zshrc` if necessary.

If you cloned the repo, `cd` into the clone and run

```shell
git pull --recurse-submodules --depth 1
```
