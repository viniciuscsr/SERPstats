import {
  SEARCH_CREATE_REQUEST,
  SEARCH_CREATE_SUCCESS,
  SEARCH_CREATE_FAIL,
} from '../constants/searchConstants';

export const searchReducer = (state = {}, action) => {
  switch (action.type) {
    case SEARCH_CREATE_REQUEST:
      return { loading: true, results: [] };
    case SEARCH_CREATE_SUCCESS:
      return { loading: false, results: action.payload };
    case SEARCH_CREATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
