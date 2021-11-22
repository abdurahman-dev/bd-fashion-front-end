import axios from '../../helper/axios';
import { AuthLoginConstants, AuthRegisterConstants } from './constants';

export const getLogged = (info) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: AuthLoginConstants.AUTH_LOGIN_REQUEST,
      });

      const res = await axios.post('/login', {
        ...info,
      });
      //token will be remove after 7days
      const date = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
      document.cookie =`token=${res.data.token || ''};expires=${date}; path=/`;
      const { token, userInfo } = res.data;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(userInfo));
      
      dispatch({
        type: AuthLoginConstants.AUTH_LOGIN_SUCCESS,
        payload: res.data.userInfo,
      });
    } catch (error) {
      dispatch({
        type: AuthLoginConstants.AUTH_LOGIN_FAIL,
        payload: error,
      });
    }
  };
};

export const isLoggedIn = () => {
  return (dispatch) => {
    const token = localStorage.getItem("token");
    if (token) {
      const user = JSON.parse(localStorage.getItem("user"));
      dispatch({
        type: AuthLoginConstants.AUTH_LOGIN_SUCCESS,
        payload: {
          token,
          ...user,
        },
      });
    } else {
      dispatch({
        type: AuthLoginConstants.AUTH_LOGIN_FAIL,
        payload: {
          err: "need to logIn",
        },
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
      const { data } = await axios.post('/register', {
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
