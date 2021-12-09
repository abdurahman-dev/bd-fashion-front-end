import {
  AuthDeleteConstants,
  CLEAR_ERRORS,
  deleteProductsConstants,
  GetProductsConstants,
  InitialDataConstants,
} from '../../Actions/constants';

const initData = {
  loading: false,
  products: [],
  orders: [],
  category: [],
  subcategories: [],
  users: [],
  success: false,
  error: null,
};

export const adminInitialData = (state = initData, action) => {
  switch (action.type) {
    case InitialDataConstants.INITIAL_DATA_REQUEST: {
      const newState = {
        ...state,
        loading: true,
      };
      return newState;
    }
    case InitialDataConstants.INITIAL_DATA_SUCCESS: {
      const newState = {
        ...state,
        loading: false,
        success: true,
        products: action.payload.products,
        orders: action.payload.orders,
        category: action.payload.categories,
        subcategories: action.payload.subcategories,
        users: action.payload.users,
      };
      return newState;
    }
    case InitialDataConstants.INITIAL_DATA_FAIL: {
      const newState = {
        ...state,
        loading: false,
        error: action.payload,
      };
      return newState;
    }

    case GetProductsConstants.ADD_SINGLE_PRODUCT_SUCCESS: {
      const newState = {
        ...state,
        loading: false,
        products: action.payload.product,
        success: true,
      };
      return newState;
    }

    case deleteProductsConstants.DELETE_SINGLE_PRODUCT_REQUEST: {
      const newState = {
        ...state,
        loading: true,
      };
      return newState;
    }
    case deleteProductsConstants.DELETE_SINGLE_PRODUCT_SUCCESS: {
      const newState = {
        ...state,
        loading: false,
        products: prodsAfterDelete(state.products, action.payload),
        success: true,
      };
      return newState;
    }
    case deleteProductsConstants.DELETE_SINGLE_PRODUCT_FAIL: {
      const newState = {
        ...state,
        loading: false,
        error: action.payload,
      };
      return newState;
    }
    case AuthDeleteConstants.AUTH_DELETE_REQUEST: {
      const newState = {
        ...state,
        loading: true,
      };
      return newState;
    }
    case AuthDeleteConstants.AUTH_DELETE_SUCCESS: {
      const newState = {
        ...state,
        loading: false,
        users: usersAfterDelete(state.users, action.payload),
        success: true,
      };
      return newState;
    }
    case AuthDeleteConstants.AUTH_DELETE_FAIL: {
      const newState = {
        ...state,
        loading: false,
        error: action.payload,
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

const prodsAfterDelete = (pds, info) => {
  return pds.filter((item) => item._id !== info._id);
};
const usersAfterDelete = (pds, info) => {
  return pds.filter((item) => item._id !== info._id);
};
