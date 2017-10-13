# Notes Application
>Simple CLI application for managing notes.
>
>### Operations possible :
> - add a note
> - delete a note
> - view a note
> - list all notes
>
>### Commands :
> - add
> ```sh
> node app.js add -t "Title of note" -b "Body of note"
>```
> or without alias
>```sh
> node app.js add --title "Title of note" --body "Body of note"
>```
>
> - list
> ```sh
> node app.js list
>```
> - read
> ```sh
> node app.js read -t "Title of note"
>```
> or without alias
>```sh
> node app.js read --title "Title of note"
>```
> - delete
> ```sh
> node app.js delete -t "Title of note"
>```
> or without alias
>```sh
> node app.js delete --title "Title of note"
>```
> - --help
> ```sh
> node app.js --help
>```
> each command supports help as in
> ```sh
> node app.js add --help
>```
