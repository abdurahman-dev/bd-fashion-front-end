import React, { useEffect, useState } from 'react';
import './style.css';
import { BsFillXCircleFill, BsFillBagCheckFill } from 'react-icons/bs';
import products from '../../untils/Data/products';

const CartItems = ({ setCart, cart }) => {
  const [cartProductsKeys, setCartProductsKeys] = useState({});
  const [cartProducts, setCartProducts] = useState({});

  const handleCart = () => {
    setCart(false);
  };

  useEffect(() => {
    const product = localStorage.getItem('cartItem') || '{}';
    setCartProductsKeys(JSON.parse(product));
  }, [cart]);

  useEffect(() => {
    const pd = Object.keys(cartProductsKeys);
    const sProducts = pd.map((key) => {
      const pt = products.find((item) => (item.id = key));
      pt.qnt = cartProductsKeys[key];
      return pt;
    });
    setCartProducts(sProducts);
  }, [cartProductsKeys]);

  return (
    <div className={`${cart ? 'active' : 'deactivate'} cart`}>
      <div className="flex-col justify-between">
        <div className="flex justify-between items-center  py-4 border-b-2 border-solid border-white">
          <div className="flex items-center">
            <BsFillBagCheckFill className="text-xl" />
            <h3 className="text-black text-2xl font-semibold ml-1">
              {cartProducts.length} {cartProducts.length > 1 ? 'Items' : 'Item'}
            </h3>
          </div>

          <button
            onClick={handleCart}
            className=" font-medium text-xl text-black hover:text-white"
          >
            <BsFillXCircleFill />
          </button>
        </div>
        <div className="mt-4 overflow-y-auto" style={{ height: '80vh' }}>
          {cartProducts.length > 0
            ? cartProducts.map((item) => (
                <div className="flex justify-between items-center p-2 border-gray-500 border mb-2">
                  <div>qnt</div>
                  <div>img</div>
                  <div>
                    <div>name</div>
                    <div>price</div>
                  </div>
                  <div>
                    {' '}
                    <BsFillXCircleFill />
                  </div>
                </div>
              ))
            : 'Null'}
        </div>
      </div>
      <div>process</div>
    </div>
  );
};

export default CartItems;
