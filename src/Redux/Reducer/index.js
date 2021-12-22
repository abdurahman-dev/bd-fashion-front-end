import { combineReducers } from 'redux';
import { authLoginReducer, authRegisterReducer } from './auth.reducer';
import {
  productReducer,
  productSingleReducer,
  addProductReducer,
} from './product.reducer';
import { categoryReducer } from './category.reducer';
import { adminInitialData } from '../Reducer/Admin/initialData.reducer';
import {CardReducer} from '../Reducer/addToCard.reducer'
import {OrderReducer} from '../Reducer/order.reducer'


const rootReducer = combineReducers({
  authLoginReducer,
  authRegisterReducer,
  productReducer,
  productSingleReducer,
  addProductReducer,
  categoryReducer,
  adminInitialData,
  CardReducer,
  OrderReducer
});

export default rootReducer;
