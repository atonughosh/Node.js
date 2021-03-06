# Weather Application
CLI application to fetch current weather by entering a full address or city or country or PIN code.
Address is fetched using API call to Google Maps server.
Weather is fetched using API call to [Dark Sky](https://www.darksky.net) server.

>This application requires an active internet connection to fetch information. 

### Operations possible :
> - Get current weather report

### Modules Used :
> - Yargs
> - Request (Used in app without promises)
> - Axios (Used in app with promises)

### Storage :
> No data is stored in the file system. API calls are used.

### Commands :
> - Get weather
>```sh
> node app.js -a "Kolkata India"
>```
> or
>```sh
> node app.js --address "Abu Dhabi"
>```
> or
>```sh
> node app.js -a Chennai
>```
> or
>```sh
> node app.js -a 700081
>```
> - help
> ```sh
> node app.js --help
>```
