import { /* Fill */ } from '../actions/types'

const initialState = {
  isFetching: false,
  didInvalidate: false,
  all: []
}
export default function(state = initialState, action) {
  switch(action.type) {
  case FAILED_VERSESBYCAT:
    return { ...state, isFetching: false, didInvalidate: true };
  case REQUEST_VERSESBYCAT:
    return { ...state, isFetching: true, didInvalidate: false };
  case RECEIVE_VERSESBYCAT:
    return { ...state, all: action.payload.results, isFetching: false, didInvalidate: false };
  default:
    return state;
  }
}