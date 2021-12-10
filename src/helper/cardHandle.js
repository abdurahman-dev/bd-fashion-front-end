import { addToCard, removeFromCard } from '../Redux/Actions/addToCard.action';
import store from '../Redux/Store';

export const handleIncPdQty = (item, qty) => {
  store.dispatch(addToCard(item._id, qty + 1, 'fromCart'));
};
export const handleDeIncPdQty = (item, qty, cartProducts) => {
  if (qty - 1 < 1) {
    store.dispatch(removeFromCard(item._id));
    handlePdRemove(item._id, cartProducts);
  } else {
    store.dispatch(addToCard(item._id, qty - 1, 'fromCart'));
  }
};
export const handlePdRemove = (id, allProducts = []) => {
  store.dispatch(removeFromCard(id));
  return allProducts.filter((item) => item._id !== id);
};
