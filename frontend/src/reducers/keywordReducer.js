import {
  KEYWORD_SEARCH_REQUEST,
  KEYWORD_SEARCH_SUCCESS,
  KEYWORD_SEARCH_FAIL,
} from '../constants/keywordConstants';

export const keywordSearchReducer = (state = {}, action) => {
  switch (action.type) {
    case KEYWORD_SEARCH_REQUEST:
      return { loading: true, results: [] };
    case KEYWORD_SEARCH_SUCCESS:
      return { loading: false, results: action.payload };
    case KEYWORD_SEARCH_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
