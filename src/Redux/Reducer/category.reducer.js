import { CatConstants, CLEAR_ERRORS } from '../Actions/constants';

const initialData = {
  loading: false,
  category: {},
  subcategory: {},
  categories:[],
  subcategories:[],
  success: false,
  error: null,
};
export const categoryReducer = (state = initialData, action) => {
  switch (action.type) {
    //get categories
    case CatConstants.GET_ALL_CATEGORY_SUBCATEGORY_REQUEST: {
      const newState = {
        ...state,
        loading: true,
      };
      return newState;
    }
    case CatConstants.GET_ALL_CATEGORY_SUBCATEGORY_SUCCESS: {
      const newState = {
        ...state,
        loading: false,
        categories:action.payload.categories,
        success:action.payload.success
      };
      return newState;
    }
    //add function
    case CatConstants.ADD_CATEGORY_REQUEST: {
      const newState = {
        ...state,
        loading: true,
      };
      return newState;
    }
    case CatConstants.ADD_SUBCATEGORY_REQUEST: {
      const newState = {
        ...state,
        loading: true,
      };
      return newState;
    }
    case CatConstants.ADD_CATEGORY_SUCCESS: {
    const newState = {
      ...state,
      loading: false,
      category:action.payload.cat,
      success:action.payload.success
    };
    return newState;
  }
  case CatConstants.ADD_SUBCATEGORY_SUCCESS: {
    const newState = {
      ...state,
      loading: false,
      subcategory:action.payload.cat,
      success:action.payload.success
    };
    return newState;
  }
  //update function
  case CatConstants.UPDATE_CATEGORY_REQUEST: {
      const newState = {
        ...state,
        loading: true,
      };
      return newState;
    }
    case CatConstants.UPDATE_SUBCATEGORY_REQUEST: {
      const newState = {
        ...state,
        loading: true,
      };
      return newState;
    }

    case CatConstants.UPDATE_CATEGORY_SUCCESS: {
    const newState = {
      ...state,
      loading: false,
      category:action.payload.cat,
      success:action.payload.success
    };
    return newState;
  }
  case CatConstants.UPDATE_SUBCATEGORY_SUCCESS:{
    const newState = {
      ...state,
      loading: false,
      subcategory:action.payload.subcategory,
      success:action.payload.success
    };
    return newState;
  }
  // if error
  case CatConstants.CATEGORY_FAIL: {
    const newState = {
      ...state,
      loading: false,
      success:false,
      error:action.payload
    };
    return newState;
  }
  case CLEAR_ERRORS:{
      const newState={
          ...state,
          error:null
      }
      return newState
  }
    default:
      return state;
  }
};

// export const getCatReducer=(state=initialData,action)=>{
//   switch (action.type) {
//     case CatConstants.GET_ALL_CATEGORY_SUBCATEGORY_REQUEST:{
//       const newState={
//         ...state,
//         loading:true
//       }
//       return newState
//     }
//     case CatConstants.GET_ALL_CATEGORY_SUBCATEGORY_SUCCESS:{
//       const newState={
//         ...state,
//         loading:false,
//         success:action.payload.success,
//         categories:action.payload.categories
//       }
//       return newState
//     }
//     case CatConstants.GET_ALL_CATEGORY_SUBCATEGORY_FAIL:{
//       const newState={
//         ...state,
//         success:false,
//         error:action.payload
//       }
//       return newState
//     }
//     case CLEAR_ERRORS:{
//       const newState={
//           ...state,
//           error:null
//       }
//       return newState
//   }
//     default:{
//       return state
//     }
//   }
// }

// export const updateCategory = (state = initialData, action) => {
//   switch (action.type) {
//     case CatConstants.UPDATE_CATEGORY_REQUEST ||
//       CatConstants.UPDATE_SUBCATEGORY_REQUEST: {
//       const newState = {
//         ...state,
//         loading: true,
//       };
//       return newState;
//     }
//     case CatConstants.UPDATE_CATEGORY_SUCCESS ||
//     CatConstants.ADD_SUBCATEGORY_SUCCESS: {
//     const newState = {
//       ...state,
//       loading: false,
//       category:action.payload.cat,
//       success:action.payload.success
//     };
//     return newState;
//   }
//   case CatConstants.UPDATE_CAT_FAIL: {
//     const newState = {
//       ...state,
//       loading: false,
//       success:false,
//       error:action.payload
//     };
//     return newState;
//   }
//   case CLEAR_ERRORS:{
//       const newState={
//           ...state,
//           error:null
//       }
//       return newState
//   }
//     default:
//       return state;
//   }
// };