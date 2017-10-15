//Module dependencies
const request = require('request');
const yargs = require('yargs');

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

//Encode the address string provided by user
var encodedAddress = encodeURIComponent(argv.a);

//Fetch data from Google API
request({
  url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,   //inject encoded address into URL
  json:true
}, function (error, response, body) {
  if (error) {
    console.log('Unable to connect to the Google servers.');    //Check connection or server error
  } else if (body.status === 'ZERO_RESULTS') {        //Check address validity
    console.log("You entered an invalid address. Please check the address & retry.");
  } else if (body.status === 'OK') {    //Check if things went well
    console.log(`Address : ${body.results[0].formatted_address}`);
    console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
    console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
  }
});
