const fetch = require('node-fetch');

// fetch('https://apidemo.theysay.io/api/v1/sentiment', {
//   headers: {
//     accept: 'application/json',
//     'accept-language': 'de-DE,de;q=0.9,en-US;q=0.8,en;q=0.7',
//     'content-type': 'application/json',
//     'sec-fetch-dest': 'empty',
//     'sec-fetch-mode': 'cors',
//     'sec-fetch-site': 'same-origin',
//     'x-requested-with': 'XMLHttpRequest',
//     // cookie: '_ga=GA1.2.251480195.1588850332; _gid=GA1.2.1031969901.1588850332',
//     'User-Agent':
//       'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.129 Safari/537.36',
//   },
//   referrer: 'https://apidemo.theysay.io/',
//   referrerPolicy: 'no-referrer-when-downgrade',
//   body: '{"text":"Hallo wie gehts?\\nhfgh","level":"sentence"}',
//   method: 'POST',
//   // mode: 'cors',
// })
//   .then((res) => res.text())
//   .then((body) => console.log(body));

fetch('https://apidemo.theysay.io/api/v1/sentiment', {
  headers: {
    accept: 'application/json',
    Origin: 'https://apidemo.theysay.io',
    Connection: 'keep-alive',
    UserAgent:
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.129 Safari/537.36',

    acceptlanguage: 'de-DE,de;q=0.9,en-US;q=0.8,en;q=0.7',
    contenttype: 'application/json',
    secfetchdest: 'empty',
    secfetchmode: 'cors',
    secfetchsite: 'same-origin',
    xrequestedwith: 'XMLHttpRequest',
    Referer: 'https://apidemo.theysay.io/',
  },
  referrer: 'https://apidemo.theysay.io/',
  referrerPolicy: 'no-referrer-when-downgrade',
  body: '{"text":"Hallo wie gehts?"}',
  method: 'POST',
  mode: 'cors',
  credentials: 'include',
})
  .then((res) => res.text())
  .then((body) => console.log(body));
