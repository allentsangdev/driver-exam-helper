const axios = require('axios'); // node

// Make a GET request to the API endpoint
axios.get('https://g1-api.onrender.com/g1-exam-questions/')
  .then(response => {
    // Handle successful response
    const data = response.data;
    console.log(data[0].question);
  })
  .catch(error => {
    // Handle error
    console.error(error);
  });