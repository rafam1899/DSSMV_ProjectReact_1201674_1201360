import { Alert } from "react-native";

export function makeHTTPRequest(url, key, location, text, from, to, success, failure) {
  const axios = require('axios').default;
  
  axios({
    baseURL: url,
    url: '/translate',
    method: 'post',
    headers: {
        'Ocp-Apim-Subscription-Key': key,
        'Ocp-Apim-Subscription-Region': location,
        'Content-type': 'application/json'
    },
    params: {
        'api-version': '3.0',
        'from': from,
        'to': [to]
    },
    data: [{
        'text': text
    }],
    responseType: 'json'
  })
  .then(function(response){
      success(response.data);
  })
  .catch(function (error) {
      failure(error);
    if (error.response) {
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      console.log(error.request);
    } else {
      console.log('Error', error.message);
    }
    console.log(error.config);
  });
}

