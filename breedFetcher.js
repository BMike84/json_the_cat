const request = require('request');
const breed = process.argv[2];

request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
  //changing it back to reguar javascript
  const data = JSON.parse(body);
  //check if theres a error from searching the site
  if (error) {
    console.log('Error');
  //if the breed name doestn exist will return 0 for length
  } else if (data.length === 0) {
    console.log(`Bread ${breed} not found`);
  //return the breeds description
  } else {
    console.log(data[0].description);
  }
});