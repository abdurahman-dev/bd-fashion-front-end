import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Layout from '../../Components/Layout';
import NoProduct from '../../Components/NoProduct';
import store from '../../Redux/Store';
import {
  handleDeIncPdQty,
  handleIncPdQty,
  handlePdRemove,
} from '../../helper/cardHandle';
import { Table } from 'react-bootstrap';

const ShoppingCard = () => {
  const [pds, setPds] = useState([]);
  const [vat, setVat] = useState(Number(0));
  const [shipping, setShipping] = useState(Number(0));
  const [Sub_Total, setSub_Total] = useState(Number(0));
  const [cartProducts, setCartProducts] = useState([]);
  const { cardItem } = useSelector((state) => state.CardReducer);
  const { products } = useSelector((state) => state.productReducer);
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
      setCartProducts([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cardItem, pds, store.getState().CardReducer]);
  const shoppingUpTo = 500;
  useEffect(() => {
    if (cartProducts?.length > 0) {
      let total = Number(0);
      const vt = 15;

      cartProducts.forEach((item) => {
        total += item?.productPrice * item?.qnt;
      });
      setSub_Total(total);
      setVat(Math.round((vt / 100) * Number(total)));
      setShipping(total >= shoppingUpTo ? 0 : 50);
    }
  }, [cartProducts]);

  return (
    <Layout>
      <div className="pb-8 ">
        <div className="h-24 bg-gray-100">
          <div className="container flex items-center h-full">
            <div>
              <h2 className="text-2xl font-semibold mb-2">Cart Items</h2>
              <h2 className="text-md font-semibold">It's Your Pick {cartProducts.length} Products</h2>
            </div>
          </div>
        </div>
        <div className="container mx-auto py-4">
          <div className="grid grid-cols-12 gap-3 ">
            <div className="col-span-12 md:col-span-8  ">
              {cartProducts.length > 0 ? (
                <Table responsive className="border shadow-md rounded-lg">
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th></th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartProducts.map((item) => (
                      <tr key={Math.random()}>
                        <th>
                          <div>
                            <img
                              src={item?.productImage[0].url}
                              alt=""
                              className="w-24 h-24"
                            />
                          </div>
                        </th>
                        <th>
                          {' '}
                          <h2>{item?.productName}</h2>
                        </th>
                        <th>
                          <div>
                            $ <b>{item?.qnt}</b> {'×'}
                            <strong>{item?.productPrice}</strong>{' '}
                          </div>
                        </th>
                        <th>
                          <div>
                            <button
                              onClick={() => {
                                handleIncPdQty(item, item?.qnt);
                              }}
                              className="w-5 h-10 rounded-full bg-blue-600 text-gray-50"
                            >
                              +
                            </button>
                            <input
                              type="text"
                              readOnly
                              defaultValue={item?.qnt}
                              className="w-12 text-center mx-2 rounded-md outline-none ring-0  border-0 focus:ring-0 "
                            />
                            <button
                              onClick={() => {
                                handleDeIncPdQty(item, item?.qnt, cartProducts);
                              }}
                              className="w-5 h-10 rounded-full bg-blue-600 text-gray-50"
                            >
                              -
                            </button>
                          </div>
                        </th>
                        <th>
                          <button
                            className="px-4 py-2 bg-blue-400 rounded-md text-gray-50 hover:bg-blue-200 hover:text-blue-600 hover:border-transparent duration-500 mt-2"
                            onClick={() => {
                              setCartProducts(
                                handlePdRemove(item._id, cartProducts)
                              );
                            }}
                          >
                            Remove
                          </button>
                        </th>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              ) : (
                <NoProduct />
              )}
              <Link
                to="/shop/products"
                className="px-4 py-2 bg-blue-400 rounded-md text-gray-50 hover:bg-blue-200 hover:text-blue-600 hover:border-transparent duration-500"
              >
                Continue Shopping
              </Link>
            </div>
            <div className="col-span-12  md:col-span-4">
              <div className="border bg-gray-50 rounded-md shadow-md p-3">
                <div className="flex justify-between font-semibold mb-3">
                  <h2>Sub-Title</h2>
                  <h2>{isNaN(Sub_Total) ? 0 : Sub_Total}</h2>
                </div>
                <div className="flex justify-between font-semibold mb-3">
                  <h2>Vat(15%)</h2>
                  <h2>{isNaN(vat) ? 0 : vat}</h2>
                </div>
                <div className="flex justify-between font-semibold mb-3">
                  <h2>
                    Shipping{' '}
                    <span className="text-sm font-normal">
                      (free upto $ {shoppingUpTo})
                    </span>{' '}
                  </h2>
                  <h2>{shipping ? shipping : 'free'}</h2>
                </div>
                <div className="flex justify-between font-semibold mb-3">
                  <h2>Total</h2>
                  <h2>
                    {isNaN(vat + shipping + Sub_Total)
                      ? 0
                      : vat + shipping + Sub_Total}
                  </h2>
                </div>
                <div className="w-full">
                  <Link to="/shop/products">
                    <button className="bg-blue-400 rounded-md w-full h-10  hover:text-gray-50 hover:border-transparent duration-500 text-gray-50">
                      CheckOut
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ShoppingCard;
