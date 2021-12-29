import { axiosApi } from '../../../helper/urlConfig';

// import axios from '../../../helper/axios';
const axios = require('axios');
const { InitialDataConstants, CLEAR_ERRORS } = require('../constants');

export const getInitialData = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: InitialDataConstants.INITIAL_DATA_REQUEST,
      });
      const token = localStorage.getItem('token');
      const res = await axios.get('/initialData', {
        baseURL: axiosApi,
        headers: {
          'X-Custom-Header': 'foobar',
          Authorization: token || '',
        },
        withCredentials: true,
      });
      const { products, orders, users, categories, subcategories } = res.data;
      dispatch({
        type: InitialDataConstants.INITIAL_DATA_SUCCESS,
        payload: {
          products,
          orders,
          users,
          categories,
          subcategories,
        },
      });
    } catch (err) {
      console.log(err);
      dispatch({
        type: InitialDataConstants.INITIAL_DATA_FAIL,
        payload: err.message,
      });
      dispatch({
        type: CLEAR_ERRORS,
      });
    }
  };
};
