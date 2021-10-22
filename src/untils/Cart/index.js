const storeProduct = (key, count) => {
  const data = localStorage.getItem('cartItem') || '{}';
  const currentCart = JSON.parse(data);
  currentCart[key] = count;
  localStorage.setItem('cartItem', JSON.stringify(currentCart));
};

export { storeProduct };
