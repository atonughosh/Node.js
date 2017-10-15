const request = require('request');

var geocodeAddress = function geocodeAddress (code, callback) {
  //Encode the address string provided by user
  var encodedAddress = encodeURIComponent(code);

  //Fetch data from Google API
  request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,   //inject encoded address into URL
    json:true
  }, function (error, response, body) {
    if (error) {
      callback('Unable to connect to the Google servers.'); ////Check connection or server error and return message
    } else if (body.status === 'ZERO_RESULTS') {
      callback('You entered an invalid address. Please check the address & retry.'); //Check address validity and return message
    } else if (body.status === 'OK') {
      geoInfo = {
          address: body.results[0].formatted_address,
          latitude: body.results[0].geometry.location.lat,
          longitude: body.results[0].geometry.location.lng
      };
      callback(undefined, geoInfo);
    }
  });

};


//Export the function
module.exports = {
  geocodeAddress
};
