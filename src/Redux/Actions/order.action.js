import axiosInstance from '../../helper/axios';
import { CLEAR_ERRORS, OrdersConstants } from './constants';

export const createOrder = (info) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: OrdersConstants.ORDERS_REQUEST,
      });
        const res = await axiosInstance.post('/order/new',info);
       
      dispatch({
        type: OrdersConstants.ORDERS_SUCCESS,
        payload:{
          order:res.data.order,
          success:res.data.success,
        }
      });
      dispatch({
        type: OrdersConstants.ORDERS_COMPLETED,
      });
      localStorage.removeItem('cart')
    } catch (err) {
        console.log(err);
      dispatch({
        type: OrdersConstants.ORDERS_FAIL,
        payload:err
      });
      dispatch({
        type:  CLEAR_ERRORS
      });
    }
  };
};
