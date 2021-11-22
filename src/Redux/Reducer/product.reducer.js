import { GetProductsConstants } from "../Actions/constants"

const initialState={
    loading:false,
    products:[],
    productsCount:null,
    error:null,
    product:{},
    success:false
}
export const productReducer=(state=initialState,action)=>{
    switch(action.type){
        case GetProductsConstants.GET_ALL_PRODUCTS_REQUEST:{
            const newState={
                ...state,
               loading:true
            }
            return newState
        }
        case GetProductsConstants.GET_ALL_PRODUCTS_SUCCESS:{
            const newState={
                ...state,
               loading:false,
               products:action.payload.products,
               productsCount:action.payload.countProducts
            }
            return newState
        }
        case GetProductsConstants.GET_ALL_PRODUCTS_FAIL:{
            const newState={
                ...state,
               loading:false,
               error:action.payload
            }
            return newState
        }
        case GetProductsConstants.GET_PRODUCTS_CLEAR_ERRORS: {
            const newState = {
              ...state,
              error: null,
            };
            return newState;
          }
        default:{
            return state
        }
    }
}

export const productSingleReducer=(state=initialState,action)=>{
    switch(action.type){
        case GetProductsConstants.GET_SINGLE_PRODUCT_REQUEST:{
            const newState={
                ...state,
               loading:true
            }
            return newState
        }
        case GetProductsConstants.GET_SINGLE_PRODUCT_SUCCESS:{
            const newState={
                ...state,
               loading:false,
               product:action.payload.product,
            }
            return newState
        }
        case GetProductsConstants.GET_SINGLE_PRODUCT_FAIL:{
            const newState={
                ...state,
               loading:false,
               error:action.payload
            }
            return newState
        }
        case GetProductsConstants.PRODUCTS_CLEAR_ERRORS: {
            const newState = {
              ...state,
              error: null,
            };
            return newState;
          }
        default:{
            return state
        }
    }
}

export const addProductReducer=(state=initialState,action)=>{
    switch(action.type){
        case GetProductsConstants.ADD_SINGLE_PRODUCT_REQUEST:{
            const newState={
                ...state,
               loading:true
            }
            return newState
        }
        case GetProductsConstants.ADD_SINGLE_PRODUCT_SUCCESS:{
            const newState={
                ...state,
               loading:false,
               products:action.payload.product,
               success:action.payload.success,
               error:null,
            }
            return newState
        }
        case GetProductsConstants.ADD_SINGLE_PRODUCT_FAIL:{
            const newState={
                ...state,
               loading:false,
               error:action.payload
            }
            return newState
        }
        case GetProductsConstants.PRODUCTS_CLEAR_ERRORS: {
            const newState = {
              ...state,
              error: null,
            };
            return newState;
          }
        default:{
            return state
        }
    }
}
