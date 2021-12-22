import axios from "../../../helper/axios";
const { InitialDataConstants, CLEAR_ERRORS } = require("../constants");

export const getInitialData=()=>{
    return async dispatch=>{
        try{
            dispatch({
                type:InitialDataConstants.INITIAL_DATA_REQUEST
            })
            const res= await axios.get('/initialData')
            const {products,orders,users,categories,subcategories}=res.data
            dispatch({
                type:InitialDataConstants.INITIAL_DATA_SUCCESS,
                payload:{
                    products,orders,users,categories,subcategories
                }
            })
        }catch(err){
            console.log(err);
            dispatch({
                type:InitialDataConstants.INITIAL_DATA_FAIL,
                payload:err.message
            })
            dispatch({
                type:CLEAR_ERRORS,
            })
        }


    }
}