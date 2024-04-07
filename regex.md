## Email

| Syntax | Description |
| --- | --- |
| `^[a-zA-Z0-9\.+_-]+@[a-zA-Z0-9\._-]+\.[a-zA-Z]+$` | basic |

## Phone

| Country | Syntax | Description |
| --- | --- | --- |
| US | `^\d{10}&` | basic |
|| `(\(\d{3}\))\|(\d{3}-?)\d{3}-?\d{3}` | with () or - | <!--- copy from raw md: (\(\d{3}\))\|(\d{3}-?)\d{3}-?\d{3} -->

## Misc

| Syntax | Description |
| --- | --- |
| `<\/?(strong\|p\|br\|span\|em.*?)>` | text related HTML tags | <!--- copy from raw md: <\/?(strong|p|br|span.*?)> --> 