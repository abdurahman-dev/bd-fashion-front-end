import axios from '../../../helper/axios';
import { CatConstants, CLEAR_ERRORS } from '../constants';

//add function
export const AddCategory = (name, func) => {
  return async (dispatch) => {
    try {
      if (func === 'category') {
        dispatch({
          type: CatConstants.ADD_CATEGORY_REQUEST,
        });

        const res = await axios.post('/createCategory', { name: name });
        dispatch({
          type: CatConstants.ADD_CATEGORY_SUCCESS,
          payload: {
            cat: res.data.category,
            success: res.data.success,
          },
        });
      }
      if (func === 'subcategory') {
        dispatch({
          type: CatConstants.ADD_SUBCATEGORY_REQUEST,
        });
        const res = await axios.post('/createSubcategory', { name: name });
        console.log(res.data.subcategory);
        dispatch({
          type: CatConstants.ADD_CATEGORY_SUCCESS,
          payload: {
            subcategory: res.data.subcategory,
            success: res.data.success,
          },
        });
      }
    } catch (err) {
      dispatch({
        type: CatConstants.ADD_CAT_FAIL,
        payload: err,
      });
      dispatch({
        type: CLEAR_ERRORS,
      });
    }
  };
};

// export const getCat = () => {
//   return async (dispatch) => {
//     try {
//       dispatch({
//         type:CatConstants.GET_ALL_CATEGORY_SUBCATEGORY_REQUEST
//       });
//       const res= await axios.get('/categories')

//       dispatch({
//         type:CatConstants.GET_ALL_CATEGORY_SUBCATEGORY_SUCCESS,
//         payload:{
//           success:res.data.success,
//           categories:res.data.categories
//         }
//       })
//     } catch (err) {
//       console.log(err);
//       dispatch({
//         type: CatConstants.GET_ALL_CATEGORY_SUBCATEGORY_FAIL,
//       });
//       dispatch({
//         type: CLEAR_ERRORS,
//       });
//     }
//   };
// };

//update function
export const updateCategory = (name, func, id) => {
  return async (dispatch) => {
    try {
      //category update
      if (func === 'categoryUpdate') {
        dispatch({
          type: CatConstants.UPDATE_CATEGORY_REQUEST,
        });
        const res = await axios.post(`/updateCategory/${id}`, { name: name });

        dispatch({
          type: CatConstants.UPDATE_CATEGORY_SUCCESS,
          payload: {
            cat: res.data.cat,
            success: res.data.success,
          },
        });
      }

      // subcategory update
      if (func === 'subcategoryUpdate') {
        dispatch({
          type: CatConstants.UPDATE_CATEGORY_REQUEST,
        });
        const res = await axios.post(`/updateSubcategory/${id}`, {
          name: name,
        });
        dispatch({
          type: CatConstants.UPDATE_CATEGORY_SUCCESS,
          payload: {
            subcategory: res.data.subcategory,
            success: res.data.success,
          },
        });
      }
    } catch (err) {
      dispatch({
        type: CatConstants.UPDATE_CAT_FAIL,
        payload: err,
      });
      dispatch({
        type: CLEAR_ERRORS,
      });
    }
  };
};

export const getCategory = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type:CatConstants.GET_ALL_CATEGORY_SUBCATEGORY_REQUEST
      })

      const res= await axios.get('categories')
      const {categories,success}=res.data
      dispatch({
        type:CatConstants.GET_ALL_CATEGORY_SUBCATEGORY_SUCCESS,
        payload:{
          categories,
          success
        }
      })
    } catch (err) {
      dispatch({
        type:CatConstants.CATEGORY_FAIL,
        payload:err
      })
      dispatch({
        type:CLEAR_ERRORS,
      })
    }
  };
};
