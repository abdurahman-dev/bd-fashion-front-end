import { CLEAR_ERRORS, OrdersConstants } from "../Actions/constants"

const initialData={
    success:false,
    loading:false,
    order:{},
    error:null
}

export const OrderReducer=(state=initialData,action)=>{
    switch(action.type){
        case OrdersConstants.ORDERS_REQUEST:{
            const newState={
                ...state,
                loading:true
            }
            return newState
        }
        case OrdersConstants.ORDERS_SUCCESS:{
            const newState={
                ...state,
                loading:false,
                order:action.payload.order,
                success:action.payload.success
            }
            return newState
        }
        case OrdersConstants.ORDERS_COMPLETED:{
            const newState={
                ...state,
                loading:false,
                order:{},
                success:false
            }
            return newState
        }
        case OrdersConstants.ORDERS_FAIL:{
            const newState={
                ...state,
                loading:false,
                error:action.payload.err
            }
            return newState
        }
        case CLEAR_ERRORS:{
        const newState={
            ...state,
            error:null
        }
        return newState
        }
        default:{
            return state
        }
    }
}