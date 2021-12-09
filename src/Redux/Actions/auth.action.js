
import axios from '../../helper/axios';
import { AuthDeleteConstants, AuthLoginConstants, AuthRegisterConstants, AuthUpdateConstants, CLEAR_ERRORS } from './constants';

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

export const userUpdate = (info) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: AuthUpdateConstants.AUTH_UPDATE_REQUEST,
      });
      const res = await axios.put('/profile/me/update', info);
      const {  user } = res.data;
      localStorage.setItem("user", JSON.stringify(user));

      dispatch({
        type: AuthUpdateConstants.AUTH_UPDATE_SUCCESS,
        payload: res.data.user,
      });
    } catch (error) {
      dispatch({
        type: AuthUpdateConstants.AUTH_UPDATE_FAIL,
        payload: error,
      });
      dispatch({
        type: CLEAR_ERRORS,
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
       //token will be remove after 7days
       const date = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
       document.cookie =`token=${data.token || ''};expires=${date}; path=/`;
       const { token, userInfo } = data;
       localStorage.setItem("token", token);
       localStorage.setItem("user", JSON.stringify(userInfo));
      
      console.log(data);
      dispatch({
        type: AuthRegisterConstants.AUTH_REGISTER_SUCCESS,
        payload: data.userInfo,
      });
      dispatch({
        type: AuthLoginConstants.AUTH_LOGIN_SUCCESS,
        payload: data.userInfo,
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

export const authDelete=(info)=>{
  return async dispatch=>{
    try{
      dispatch({
        type:AuthDeleteConstants.AUTH_DELETE_REQUEST
      })
      const res=await axios.delete(`/admin/user/delete/${info}`)
      dispatch({
        type:AuthDeleteConstants.AUTH_DELETE_SUCCESS,
        payload:res.data.user
      })
    }catch(err){
        dispatch({
          type:AuthDeleteConstants.AUTH_DELETE_FAIL,
          payload:err
        })
        dispatch({
          type:CLEAR_ERRORS
        })
    }
  }
}

export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: AuthLoginConstants.AUTH_CLEAR_ERRORS,
  });
};
