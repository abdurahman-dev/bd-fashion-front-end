import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Layout from '../../Components/Layout';
import store from '../../Redux/Store';

const ShoppingCard = () => {
  const [pds, setPds] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);
  const { cardItem } = useSelector((state) => state.CardReducer);
  const {products} = useSelector((state) => state.productReducer);
  useEffect(() => {
    if (products) {
      setPds(products);
    }
  }, [products]);
  useEffect(() => {
    const localCart = localStorage.getItem('cart');
  
    if (localCart) {
      const pd = Object.keys(cardItem);
      const sProducts = pd.map((key) => {
        const pt = pds.find((item) => item._id === key);
        if (pt) {
          pt.qnt = cardItem[key];
        }
        return pt;
      });
      setCartProducts(sProducts);
    } else {
        setCartProducts([])
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cardItem, pds,store.getState().CardReducer]);
  console.log(cartProducts);
  return <Layout>this is shopping card</Layout>;
};

export default ShoppingCard;
