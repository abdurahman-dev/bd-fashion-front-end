import {
  CLEAR_ERRORS,
  deleteProductsConstants,
  GetProductsConstants,
} from './constants';
import axiosInstance from '../../helper/axios';
import store from '../Store';

export const getProducts = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: GetProductsConstants.GET_ALL_PRODUCTS_REQUEST,
      });
      const { data } = await axiosInstance.get('/allProducts');
      dispatch({
        type: GetProductsConstants.GET_ALL_PRODUCTS_SUCCESS,
        payload: data,
      });
     
    } catch (error) {
      dispatch({
        type: GetProductsConstants.GET_ALL_PRODUCTS_FAIL,
        payload: error,
      });
    }
  };
};

export const getSingleProduct = (id) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: GetProductsConstants.GET_SINGLE_PRODUCT_REQUEST,
      });

      const { data } = await axiosInstance.post(`/product/${id}`);
      dispatch({
        type: GetProductsConstants.GET_SINGLE_PRODUCT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: GetProductsConstants.GET_SINGLE_PRODUCT_FAIL,
        payload: error,
      });
    }
  };
};

export const newProductAdded = (productInfo) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: GetProductsConstants.ADD_SINGLE_PRODUCT_REQUEST,
      });
      const res = await axiosInstance.post(
        '/admin/product/create',
        productInfo
      );
      
      dispatch({
        type: GetProductsConstants.ADD_SINGLE_PRODUCT_SUCCESS,
        payload: {
          success: res.data.success,
          product: res.data.product,
        },
      });
    } catch (err) {
      console.log(err);
      dispatch({
        type: GetProductsConstants.ADD_SINGLE_PRODUCT_FAIL,
        payload: err,
      });
    }
  };
};

export const deleteSingleProduct = (id) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: deleteProductsConstants.DELETE_SINGLE_PRODUCT_REQUEST,
      });
      const res = await axiosInstance.delete(`/admin/product/delete/${id}`);
      dispatch({
        type: deleteProductsConstants.DELETE_SINGLE_PRODUCT_SUCCESS,
        payload: res.data.product,
      });
    } catch (err) {
      dispatch({
        type: deleteProductsConstants.DELETE_SINGLE_PRODUCT_FAIL,
        payload: err,
      });
      dispatch({
        type: CLEAR_ERRORS,
      });
    }
  };
};

export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: GetProductsConstants.PRODUCTS_CLEAR_ERRORS,
  });
};
