
import {
  FETCH_TRANSLATION_STARTED,
  FETCH_TRANSLATION_SUCCESS,
  FETCH_TRANSLATION_FAILURE,
} from './Actions'

function reducer(state, action) {
  switch (action.type) {
    case FETCH_TRANSLATION_STARTED:
      return {
        ...state,
        text: {
          loading: true,
          error: null,
          data: []
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
    default:
      return state
  }
}


export default reducer;
