var request = require('request');

request(
  {
    method: 'POST',
    url: 'https://api.theysay.io',
    headers: {
      'Content-Type': 'index.js; charset=UTF-8',
    },
    body:
      '{  "text": "was geht",  "level": "sentence",  "bias": {    "positive": 3.5,    "neutral": 2.7,    "negative": 18  }}',
  },
  function (error, response, body) {
    console.log('Status:', response.statusCode);
    console.log('Headers:', JSON.stringify(response.headers));
    console.log('Response:', body);
  },
);
