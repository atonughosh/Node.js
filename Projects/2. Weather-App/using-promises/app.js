//Module dependencies
const yargs = require('yargs');
const axios = require('axios');
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

var encodedAddress = encodeURIComponent(argv.address);
var addressURL = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;

axios.get(addressURL).then((response) => {
  if (response.data.status === 'ZERO_RESULTS') {
      throw new Error('Unable to find the address provided');
  }

  var lat = response.data.results[0].geometry.location.lat;
  var lng =response.data.results[0].geometry.location.lng;

  var weatherURL = `https://api.darksky.net/forecast/d8a2328528b0a41246ddafad2ffb4e92/${lat},${lng}?units=si`;

  console.log('Address : ', response.data.results[0].formatted_address);
  return axios.get(weatherURL);
}).then((response) => {
  var temperature = response.data.currently.temperature;
  var apparentTemperature = response.data.currently.apparentTemperature;
  console.log('Summary : ', response.data.currently.summary);
  console.log(`It's currently ${temperature}. Feels like ${apparentTemperature}`);
}).catch((e) => {
  if (e.code === 'ENOTFOUND') {
    console.log('Unable to connect to API servers.');
  } else {
    console.log(e.message);
  }
});
