const request = require("postman-request"); 

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=27dce5f16dfb27ec542dd2e283b3b02f&query=${latitude},${longitude}`;
  //console.log(url);
  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to weather services!", undefined);
    } else if (response.body.error) {
      callback("Unable to find location.", undefined);
    } else {
      callback(undefined, `It is currently ${response.body.current.temperature} degrees out.It feels like ${response.body.current.feelslike}`);
    }
  });
};

module.exports = forecast;
