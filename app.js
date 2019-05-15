const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

//console.log(process.argv[2]);
const address = process.argv[2];

if (!address) {
  return console.log("Please, provide Location after filename");
}

geocode(address, (error, data) => {
  if (error) {
    return console.log(error);
  }
  const { latitude, longitude, location } = data;
  forecast(latitude, longitude, (error, forecastData) => {
    if (error) {
      return console.log(error);
    }
    console.log(location);
    console.log(forecastData);
  });
});
