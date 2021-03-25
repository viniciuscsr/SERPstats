import axios from 'axios';
import {
  KEYWORD_SEARCH_REQUEST,
  KEYWORD_SEARCH_SUCCESS,
  KEYWORD_SEARCH_FAIL,
} from '../constants/keywordConstants';

export const search = (keyword) => async (dispatch) => {
  try {
    dispatch({ type: KEYWORD_SEARCH_REQUEST });

    const { data } = await axios.get(`/api/search?keyword=${keyword}`);
    dispatch({ type: KEYWORD_SEARCH_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: KEYWORD_SEARCH_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.date.message
          : error.message,
    });
  }
};
