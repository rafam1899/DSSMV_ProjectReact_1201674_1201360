
import { makeHTTPRequest } from '../service/Service';

export const URL_API = "https://api.cognitive.microsofttranslator.com";
export const KEY = "ed5cc29c2e6a40acb057e4074bcd770a";
export const LOCATION = "global";

export const FETCH_TRANSLATION_STARTED = 'FETCH_TRANSLATION_STARTED';
export const FETCH_TRANSLATION_SUCCESS = 'FETCH_TRANSLATION_SUCCESS';
export const FETCH_TRANSLATION_FAILURE = 'FETCH_TRANSLATION_FAILURE';


export function fetchTranslation(url, request, key, location, text, from, to, dispatch) {
  //função ser executado em caso de sucesso
  const success = (res) => dispatch(fetchTranslationSuccess(res));
  //função ser executado em caso de falha
  const failure = (err) => dispatch(fetchTranslationFailure(err.message));
  makeHTTPRequest(url, request, key, location, text, from, to, success, failure);
}


export function fetchTranslationStarted() {
  return {
    type: FETCH_TRANSLATION_STARTED,

  }
}

export function fetchTranslationSuccess(text) {
  return {
    type: FETCH_TRANSLATION_SUCCESS,
    payload: {
      data:
        [...text]
    }

  }
}
export function fetchTranslationFailure(message) {
  return {
    type: FETCH_TRANSLATION_FAILURE,
    payload: {
      error: message
    }
  }
}
