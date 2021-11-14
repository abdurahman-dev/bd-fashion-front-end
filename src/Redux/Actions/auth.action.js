import axiosInstance from '../../helper/axios';
import { AuthLoginConstants, AuthRegisterConstants } from './constants';

export const getLogged = (info) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: AuthLoginConstants.AUTH_LOGIN_REQUEST,
      });

      const { data } = await axiosInstance.post('/login', {
        ...info,
      });

      // eslint-disable-next-line no-useless-concat
      document.cookie = 'token' + "=" + (data.token || "")   + "; path=/";

      console.log(data.user);
      dispatch({
        type: AuthLoginConstants.AUTH_LOGIN_SUCCESS,
        payload: data.user,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: AuthLoginConstants.AUTH_LOGIN_FAIL,
        payload: error,
      });
    }
  };
};

export const userRegister = (info) => {

  return async (dispatch) => {
    try {
      dispatch({
        type: AuthRegisterConstants.AUTH_REGISTER_REQUEST,
      });
      console.log(info);
      const { data } = await axiosInstance.post('/register', {
        ...info,
      });

      console.log(data.user);
      dispatch({
        type: AuthRegisterConstants.AUTH_REGISTER_SUCCESS,
        payload: data.user,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: AuthRegisterConstants.AUTH_REGISTER_FAIL,
        payload: error,
      });
    }
  };
};

export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: AuthLoginConstants.AUTH_CLEAR_ERRORS,
  });
};
