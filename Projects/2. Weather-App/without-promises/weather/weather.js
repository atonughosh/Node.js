const request = require('request');

var getWeather = (lat, lng, callback) => {

  request({
    url: `https://api.darksky.net/forecast/d8a2328528b0a41246ddafad2ffb4e92/${lat},${lng}?units=si`,
    json: true
  }, (error, response, body) => {
    if (error) {
      callback('Unable to connect to Dark Sky (http://darksky.net) server.');
    } else if (body.code === 400) {
      callback('Invalid address. No data available.');
    } else if (response.statusCode === 403) {
      callback('API key error! Contact administrator.');
    } else if (response.statusCode === 200){
      callback(undefined, {
        summary: body.currently.summary,
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature,
        humidity: body.currently.humidity
      });
    }
  });

};


module.exports = {
  getWeather
};
