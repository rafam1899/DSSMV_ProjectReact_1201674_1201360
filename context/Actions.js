
import { makeHTTPRequestTranslate, makeHTTPRequestDetect } from '../service/Service';

export const URL_API = "https://api.cognitive.microsofttranslator.com";
export const KEY = "1e46abd893c649dc8c797f8f84354d0f";
export const LOCATION = "global";

export const FETCH_TRANSLATION_STARTED = 'FETCH_TRANSLATION_STARTED';
export const FETCH_TRANSLATION_SUCCESS = 'FETCH_TRANSLATION_SUCCESS';
export const FETCH_TRANSLATION_FAILURE = 'FETCH_TRANSLATION_FAILURE';
export const FETCH_DETECTION_STARTED = 'FETCH_DETECTION_STARTED';
export const FETCH_DETECTION_SUCCESS = 'FETCH_DETECTION_SUCCESS';
export const FETCH_DETECTION_FAILURE = 'FETCH_DETECTION_FAILURE';


export function fetchTranslation(url, key, location, text, from, to, dispatch) {
  //função ser executado em caso de sucesso
  const success = (res) => dispatch(fetchTranslationSuccess(res));
  //função ser executado em caso de falha
  const failure = (err) => dispatch(fetchTranslationFailure(err.message));
  makeHTTPRequestTranslate(url, key, location, text, from, to, success, failure);
}

export function fetchDetection(url, key, location, text, dispatch) {
  //função ser executado em caso de sucesso
  const success = (res) => dispatch(fetchDetectionSuccess(res));
  //função ser executado em caso de falha
  const failure = (err) => dispatch(fetchDetectionFailure(err.message));
  makeHTTPRequestDetect(url, key, location, text, success, failure);
}


export function fetchTranslationStarted() {
  return {
    type: FETCH_TRANSLATION_STARTED,

  }
}

export function fetchDetectionStarted() {
  return {
    type: FETCH_DETECTION_STARTED,

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

export function fetchDetectionSuccess(text) {
  return {
    type: FETCH_DETECTION_SUCCESS,
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

export function fetchDetectionFailure(message) {
  return {
    type: FETCH_DETECTION_FAILURE,
    payload: {
      error: message
    }
  }
}
