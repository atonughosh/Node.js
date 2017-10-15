//Module dependencies
const yargs = require('yargs');
const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

//Configure yargs
const argv = yargs
.options({        //configure the only argument options for this app - "address"
a: {
  demand: true,
  alias: 'address',
  describe: 'Address to fetch wether for',
  string: true
}
})
.help()
.alias('help', 'h')
.alias('version', 'v')
.argv;


//Call geocode function and pass in the address entered by user
//to fetch the Latitude & Longitude
geocode.geocodeAddress(argv.address, (errorMessage, results) => {
  if (errorMessage) {
    console.log(errorMessage);
  } else {
    console.log('--------------------------------------------');
    console.log(`Address: ${results.address}`);
    weather.getWeather(results.latitude, results.longitude, (errorMessage, weatherResults) => {
      if (errorMessage) {
        console.log(errorMessage);
      } else {
        console.log('--------------------------------------------');
        console.log('Current weather:');
        console.log('--------------------------------------------');
        console.log(`Summary: ${weatherResults.summary}`);
        console.log(`Temperature: ${weatherResults.temperature} C`);
        console.log(`Feels Like: ${weatherResults.apparentTemperature} C`);
        console.log(`Humidity: ${weatherResults.humidity}`);
        console.log('--------------------------------------------');
      }
    });
  }
});
