import axios from 'axios';
import {
  SEARCH_CREATE_REQUEST,
  SEARCH_CREATE_SUCCESS,
  SEARCH_CREATE_FAIL,
} from '../constants/searchConstants';

export const search = () => async (dispatch, keyword) => {
  try {
    dispatch({ type: SEARCH_CREATE_REQUEST });

    const { data } = await axios.get(`/api/search?keyword=${keyword}`);
    dispatch({ type: SEARCH_CREATE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: SEARCH_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.date.message
          : error.message,
    });
  }
};
