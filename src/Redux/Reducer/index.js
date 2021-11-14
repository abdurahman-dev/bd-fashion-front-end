import { combineReducers } from "redux";
import { authLoginReducer, authRegisterReducer } from "./auth.reducer";
import {productReducer,productSingleReducer,addProductReducer} from './product.reducer'

const rootReducer= combineReducers({
    authLoginReducer,
    authRegisterReducer,
    productReducer,
    productSingleReducer,
    addProductReducer
})

export default rootReducer