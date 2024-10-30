# What's new?

Highlights in 6.x

- <Badge type="warning">Since 6.0.0</Badge> [History](./advanced/history.md)

    Optionally save the abbreviation to your shell history when running
    
    ```shell
    <abbreviation>[Space]
    ```

    When running 
    
    ```shell
    other stuff <global abbreviation>[Enter]
    ```

    optionally save the abbreviation _or_ first the abbreviation and then the entire line containing the abbreviation to your history.

- <Badge type="warning">Since 6.0.0</Badge> [Prefixes](./advanced/prefixes.md)

    Configure strings and globs which can precede regular abbreviations. Out of the box, you can now do

    ```shell
    sudo <regular abbreviation>[Enter]
    ```

- <Badge type="warning">Since 6.0.0</Badge> [Reminders](./advanced/reminders.md)

    Optionally get "you have an abbreviation you could have used for the command you just ran" reminders. zsh-abbr can log the reminder messages to your terminal, or you can use the results in your own zsh hook.
