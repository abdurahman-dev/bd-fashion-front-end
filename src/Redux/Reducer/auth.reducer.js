import { AuthLoginConstants, AuthRegisterConstants } from '../Actions/constants';

const initialData = {
  loading: false,
  isAuthenticated: false,
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
    case AuthLoginConstants.AUTH_CLEAR_ERRORS: {
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



