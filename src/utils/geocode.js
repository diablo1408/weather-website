const request = require("postman-request");

const geocode = (address, callback) => {
  const geoCodeURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?access_token=pk.eyJ1Ijoic2h1YmhhbWIxNCIsImEiOiJja3RtaGVjbGwyNXFsMm9xbm8zNmllY2ttIn0.Zh5JpqzPRBmJGYsWcy2n_Q&limit=1`;
  //console.log(geoCodeURL);
  request({ url: geoCodeURL, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to location services!", undefined);
    } else if (response.body.features.length === 0) {
      callback("Unable to find location. Try another search.", undefined);
    } else {
     // console.log(response.body.features);
      callback(undefined, {
        latitude: response.body.features[0].center[1],
        longitude: response.body.features[0].center[0],
        location: response.body.features[0].place_name,
      });
    }
  });
};

module.exports = geocode;
