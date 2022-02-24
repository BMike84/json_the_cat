const request = require('request');

const fetchBreedDescription = ((breed, callback) => {
  
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
    //changing it back to reguar javascript
    const data = JSON.parse(body);
    //check if theres a error from searching the site
    if (error) {
      callback(error, null);
      return;
    }
    //if the breed name doesn't exist will return 0 for length
    if (data.length === 0) {
      callback(`Bread ${breed} not found!`, null);
    //return the breeds description
    } else {
      callback(null, data[0].description);
    }
  });

});

module.exports =  { fetchBreedDescription };
