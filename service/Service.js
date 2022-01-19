import { Alert } from "react-native";

export function makeHTTPRequestTranslate(url, key, location, text, from, to, success, failure) {
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
  });
}

export function makeHTTPRequestDetect(url, key, location, text, success, failure) {
  const axios = require('axios').default;
  
  axios({
    baseURL: url,
    url: '/detect',
    method: 'post',
    headers: {
        'Ocp-Apim-Subscription-Key': key,
        'Ocp-Apim-Subscription-Region': location,
        'Content-type': 'application/json'
    },
    params: {
        'api-version': '3.0'
    },
    data: [{
        'text': text
    }],
    responseType: 'json'
}).then(function(response){
      success(response.data);
  })
  .catch(function (error) {
      failure(error);
  });
}