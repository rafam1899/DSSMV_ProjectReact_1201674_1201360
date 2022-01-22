
import {
  FETCH_TRANSLATION_STARTED,
  FETCH_TRANSLATION_SUCCESS,
  FETCH_TRANSLATION_FAILURE,
  FETCH_DETECTION_STARTED,
  FETCH_DETECTION_SUCCESS,
  FETCH_DETECTION_FAILURE,
  FETCH_LIST_STARTED,
  FETCH_LIST_SUCCESS,
  FETCH_LIST_FAILURE
} from './Actions'

function reducer(state, action) {
  switch (action.type) {
    case FETCH_TRANSLATION_STARTED:
      return {
        ...state,
        text: {
          loading: true,
          error: null,
          data: [],
        }
      }
    case FETCH_TRANSLATION_SUCCESS:
      return {
        ...state,
        text: {
          loading: false,
          error: null,
          data: [...action.payload.data]
        }
      }
    case FETCH_TRANSLATION_FAILURE:
      return {
        ...state,
        text: {
          loading: false,
          error: action.payload.error,
          data: [],
        }
      }
      case FETCH_DETECTION_STARTED:
      return {
        ...state,
        language: {
          loading: true,
          error: null,
          data: []
        }
      }
      case FETCH_DETECTION_SUCCESS:
      return {
        ...state,
        language: {
          loading: false,
          error: null,
          data: [...action.payload.data]
        }
      }
      case FETCH_DETECTION_FAILURE:
      return {
        ...state,
        language: {
          loading: false,
          error: action.payload.error,
          data: [],
        }
      }
      case FETCH_LIST_STARTED:
      return {
        ...state,
        languages: {
          loading: true,
          error: null,
          data: null,
        }
      }
      case FETCH_LIST_SUCCESS:
      return {
        ...state,
        languages: {
          loading: false,
          error: null,
          data: action.payload.data
        }
      }
      case FETCH_LIST_FAILURE:
      return {
        ...state,
        languages: {
          loading: false,
          error: action.payload.error,
          data: null,
        }
      }
    default:
      return state
  }
}


export default reducer;
