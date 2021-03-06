import { AuthLoginConstants, AuthRegisterConstants, AuthUpdateConstants, AUTH_LOGOUT, AUTH_LOGOUT_COMPLETE, CLEAR_ERRORS } from '../Actions/constants';

const initialData = {
  loading: false,
  isAuthenticated: false,
  logoutSuccess: false,
  user: {},
  error: null,
};

export const authLoginReducer = (state = initialData, action) => {
  switch (action.type) {
    case AuthLoginConstants.AUTH_LOGIN_REQUEST: {
      const newState = {
        ...state,
        loading: true,
      };
      return newState;
    }
    case AuthLoginConstants.AUTH_LOGIN_SUCCESS: {
      const newState = {
        ...state,
        loading: false,
        isAuthenticated: true,
        user: action.payload
      };
      return newState;
    }
    case AuthLoginConstants.AUTH_LOGIN_FAIL: {
      const newState = {
        ...state,
        loading: false,
        user: null,
        isAuthenticated: false,
        error: action.payload,
      };
      return newState;
    }
    case AuthUpdateConstants.AUTH_UPDATE_REQUEST: {
      const newState = {
        ...state,
        loading: true,
      };
      return newState;
    }
    case AuthUpdateConstants.AUTH_UPDATE_SUCCESS: {
      const newState = {
        ...state,
        loading: false,
        isAuthenticated: true,
        user: action.payload
      };
      return newState;
    }
    case AUTH_LOGOUT:{
      const newState={
        ...state,
        loading: false,
        logoutSuccess:action.payload.success,
        isAuthenticated: false,
      }
      return newState
    }
    case AUTH_LOGOUT_COMPLETE:{
      const newState={
        ...state,
        loading: false,
        logoutSuccess: false,
        isAuthenticated: false,
      }
      return newState
    }
    
    //error handling
    case AuthLoginConstants.AUTH_CLEAR_ERRORS: {
      const newState = {
        ...state,
        error: null,
      };
      return newState;
    }
    case CLEAR_ERRORS: {
      const newState = {
        ...state,
        error: null,
      };
      return newState;
    }
    default: {
      return state;
    }
  }
};


export const authRegisterReducer = (state = initialData, action) => {
  switch (action.type) {
    case AuthRegisterConstants.AUTH_REGISTER_REQUEST: {
      const newState = {
        ...state,
        loading: true,
      };
      return newState;
    }
    case AuthRegisterConstants.AUTH_REGISTER_SUCCESS: {
      const newState = {
        ...state,
        loading: false,
        isAuthenticated: true,
        user: action.payload,
      };
      return newState;
    }
    case AuthRegisterConstants.AUTH_LOGIN_FAIL: {
      const newState = {
        ...state,
        loading: false,
        user: null,
        isAuthenticated: false,
        error: action.payload,
      };
      return newState;
    }
    
    case AuthRegisterConstants.AUTH_CLEAR_ERRORS: {
      const newState = {
        ...state,
        error: null,
      };
      return newState;
    }
    default: {
      return state;
    }
  }
};



