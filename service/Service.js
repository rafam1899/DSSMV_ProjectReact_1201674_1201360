import { Alert } from "react-native";

export function makeHTTPRequest(url, request, key, location, text, from, to, success, failure) {
  const axios = require('axios').default;
  const { v4: uuidv4 } = require('uuid');
  
  axios({
    baseURL: url,
    url: '/translate',
    method: 'post',
    headers: {
        'Ocp-Apim-Subscription-Key': key,
        'Ocp-Apim-Subscription-Region': location,
        'Content-type': 'application/json',
        'X-ClientTraceId': uuidv4.toString()
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
      Alert.alert("Alert Title");
      Alert.alert(JSON.stringify(response.data, null, 4));
      success(response);
    })
    .catch(function(response){
      Alert.alert(" " + response);
      failure(response);
    });
}

