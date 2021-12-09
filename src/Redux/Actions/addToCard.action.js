import { CardConstants } from './constants';
import store from '../Store';

export const addToCard = (id,quantity,from) => {
  return async (dispatch) => {
    const { cardItem } = store.getState().CardReducer;
      let qty=Number
      if(from === "fromCard"){
        qty = cardItem[id] ? cardItem[id]= cardItem[id]+1 : 1;
      }else{
        qty = cardItem[id] ? cardItem[id]= quantity : quantity;
      }
      cardItem[id] = qty;
      localStorage.setItem('cart', JSON.stringify(cardItem));
      dispatch({
        type: CardConstants.ADD_TO_CARD,
        payload: { cardItem},
      });
  };
};
 
export const removeFromCard=(id)=>{
  return async dispatch=>{
    const { cardItem } = store.getState().CardReducer;
    delete cardItem[id]
    localStorage.setItem('cart', JSON.stringify(cardItem));
    dispatch({
      type: CardConstants.ADD_TO_CARD,
      payload: { cardItem},
    });
  }
}

export const updateAddToCard=()=>{
  return async dispatch=>{
    const cardItem=localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')): null;
    if(cardItem){
      dispatch({
        type:CardConstants.ADD_TO_CARD,
        payload:{cardItem}
      })
    }
  }
}
