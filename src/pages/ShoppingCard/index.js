import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import Layout from '../../Components/Layout';
import NoProduct from '../../Components/NoProduct';
import store from '../../Redux/Store';
import {
  handleDeIncPdQty,
  handleIncPdQty,
  handlePdRemove,
} from '../../helper/cardHandle';
import { Modal, Table } from 'react-bootstrap';
import PaymentModal from './PaymentModal';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { createOrder } from '../../Redux/Actions/order.action';
import { requiredSuccessHandle } from '../../helper/toastNotification';

const stripePromise = loadStripe(
  'pk_test_51IfTqWDWHpMdIYYVcomyFkcyrlQW5OVTG97kTQCmNdEGRkxJYWPYE5k9KuElDwOawUMNnHIouSjtCU6XvgKEHyiw00sFVxAADQ'
);

const ShoppingCard = () => {
  const shoppingUpTo = 500;

  const [pds, setPds] = useState([]);
  const [vat, setVat] = useState(Number(0));
  const [paymentId, setPaymentId] = useState({
    success: false,
    id: '',
  });
  const [shipping, setShipping] = useState(Number(0));
  const [Sub_Total, setSub_Total] = useState(Number(0));
  const [show, setShow] = useState(false);
  const [cartProducts, setCartProducts] = useState([]);
  const [shippingInfoDetails, setShippingInfo] = useState({
    name: '',
    Street: '',
    city: '',
    PhoneNumber: Number,
    postalCode: '',
    country: 'Bangladesh',
  });

  const dispatch = useDispatch();
  const { cardItem } = useSelector((state) => state.CardReducer);
  const { products } = useSelector((state) => state.productReducer);
  const { order, success } = useSelector((state) => state.OrderReducer);

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
      // console.log(sProducts);
      setCartProducts(sProducts);
    } else {
      setCartProducts([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cardItem, pds, store.getState().CardReducer]);

  let orderItems = [];
  if (cartProducts.length > 0) {
    cartProducts.forEach((item, i) => {
      orderItems[i] = {
        productName: item?.productName,
        qnt: item?.qnt,
        productPrice: item?.productPrice,
        productImage: item?.productImage[0].url,
        ProductId: item?._id,
      };
    });
  }
  useEffect(() => {
    if (cartProducts?.length > 0) {
      let total = Number(0);
      const vt = 15;
      cartProducts.forEach((item, i) => {
        total += item?.productPrice * item?.qnt;
      });
      setSub_Total(total);
      setVat(Math.round((vt / 100) * Number(total)));
      setShipping(total >= shoppingUpTo ? 0 : 50);
    }
  }, [cartProducts]);

  const handlePlaceOut = () => {
    const shippingInfo = {
      name: shippingInfoDetails.name,
      Street: shippingInfoDetails.Street,
      city: shippingInfoDetails.city,
      PhoneNumber: shippingInfoDetails.PhoneNumber,
      postalCode: shippingInfoDetails.postalCode,
      country: shippingInfoDetails.country,
    };
    let paymentInfo = paymentId;
    let itemsPrice = Sub_Total;
    let TexPrice = vat;
    let shippingPrice = shipping;
    let totalPrice = Sub_Total + vat + shipping;
    const info = {
      itemsPrice,
      paymentInfo,
      shippingInfo,
      orderItems,
      TexPrice,
      shippingPrice,
      totalPrice,
    };
    dispatch(createOrder(info));
    requiredSuccessHandle('Order Successful')
  };

  if (Object.keys(order).length > 0 || success) {
    return <Redirect to="/userProductStatus" />;
  }
  return (
    <Layout>
      <div
        className={`pb-8 ${paymentId.success === false ? 'block' : 'hidden'}`}
      >
        <div className="h-24 bg-gray-100">
          <div className="container flex items-center h-full">
            <div>
              <h2 className="text-2xl font-semibold mb-2">Cart Items</h2>
              <h2 className="text-md font-semibold">
                It's Your Pick {cartProducts.length} Products
              </h2>
            </div>
          </div>
        </div>
        <div className="container mx-auto py-4">
          <div className="grid grid-cols-12 gap-3 ">
            <div className="col-span-12 md:col-span-8  ">
              {cartProducts.length > 0 ? (
                <CartProductTable
                  cartProducts={cartProducts}
                  setCartProducts={setCartProducts}
                />
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
                  <button
                    onClick={() => setShow(true)}
                    className="bg-blue-400 rounded-md w-full h-10  hover:text-gray-50 hover:border-transparent duration-500 text-gray-50"
                  >
                    CheckOut
                  </button>
                  {/* <Link to="/shop/products">
                    <button className="bg-blue-400 rounded-md w-full h-10  hover:text-gray-50 hover:border-transparent duration-500 text-gray-50">
                      CheckOut
                    </button>
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${paymentId.success === true ? '' : 'hidden'}`}>
        <div className="container mx-auto py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <ShippingInfoForm
              shippingInfoDetails={shippingInfoDetails}
              setShippingInfo={setShippingInfo}
            />
            <div>
              {' '}
              <CartProductTable
                cartProducts={cartProducts}
                setCartProducts={setCartProducts}
                placeOut
              />
            </div>
          </div>
          <div className="text-right">
            <button
              onClick={handlePlaceOut}
              className="px-3 py-2 bg-blue-400 rounded-md text-gray-50"
            >
              Place Out
            </button>
          </div>
        </div>
      </div>
      <Modal onHide={() => setShow(false)} show={show}>
        <Modal.Header closeButton>
          <Modal.Title>
            Payment {'$'}
            {vat + shipping + Sub_Total}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-0 bg-blue-200 border-0  rounded-b-md">
          <div className="p-4  outline-none border-0">
            <Elements stripe={stripePromise}>
              <PaymentModal
                setPaymentId={setPaymentId}
                handleClose={() => setShow(false)}
              />
            </Elements>
          </div>
        </Modal.Body>
      </Modal>
    </Layout>
  );
};

export default ShoppingCard;

const CartProductTable = ({ cartProducts, setCartProducts, placeOut }) => {
  return (
    <Table responsive className="border shadow-md rounded-lg">
      <thead>
        <tr>
          <th>Product</th>
          <th></th>
          <th>Price</th>
          {!placeOut && (
            <>
              <th>Quantity</th>
              <th></th>
            </>
          )}
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
                  className={`${placeOut ? 'w-16 h-16' : 'w-24 h-24'}  `}
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

            {!placeOut && (
              <th>
                <button
                  className="px-4 py-2 bg-blue-400 rounded-md text-gray-50 hover:bg-blue-200 hover:text-blue-600 hover:border-transparent duration-500 mt-2"
                  onClick={() => {
                    setCartProducts(handlePdRemove(item._id, cartProducts));
                  }}
                >
                  Remove
                </button>
              </th>
            )}
            {!placeOut && (
              <th>
                <div>
                  <button
                    onClick={() => {
                      handleIncPdQty(item, item?.qnt);
                    }}
                    className="w-5 h-10 rounded-full bg-blue-400 text-gray-50"
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
                    className="w-5 h-10 rounded-full bg-blue-400 text-gray-50"
                  >
                    -
                  </button>
                </div>
              </th>
            )}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

const ShippingInfoForm = ({ shippingInfoDetails, setShippingInfo }) => {
  return (
    <div className=" ">
      <h1 className="text-2xl font-semibold mb-2">Shipping Address</h1>
      <div className="mb-2">
        <label htmlFor="">Name</label> <br />
        <input
          type="text"
          onChange={(e) => {
            setShippingInfo({
              ...shippingInfoDetails,
              name: e.target.value,
            });
          }}
          placeholder="Enter Name"
          className="form-control rounded-xl bg-gray-200 border-0 px-2  outline-none"
        />
      </div>
      <div className="mb-2">
        <label htmlFor="">Phone</label> <br />
        <input
          type="Number"
          placeholder="Enter Number"
          defaultValue={shippingInfoDetails.PhoneNumber}
          onBlur={(e) => {
            setShippingInfo({
              ...shippingInfoDetails,
              PhoneNumber: e.target.value,
            });
          }}
          className="form-control rounded-xl bg-gray-200 border-0 px-2  outline-none"
        />
      </div>
      <div className="mb-2">
        <label htmlFor="">Street</label> <br />
        <input
          type="text"
          onChange={(e) => {
            setShippingInfo({
              ...shippingInfoDetails,
              Street: e.target.value,
            });
          }}
          placeholder="Enter Street"
          className="form-control rounded-xl bg-gray-200 border-0 px-2  outline-none"
        />
      </div>
      <div className="mb-2">
        <label htmlFor="">City</label> <br />
        <input
          type="text"
          onChange={(e) => {
            setShippingInfo({
              ...shippingInfoDetails,
              city: e.target.value,
            });
          }}
          placeholder="Enter City Name"
          className="form-control rounded-xl bg-gray-200 border-0 px-2  outline-none"
        />
      </div>

      <div className="mb-2">
        <label htmlFor="">postalCode</label> <br />
        <input
          type="text"
          onChange={(e) => {
            setShippingInfo({
              ...shippingInfoDetails,
              postalCode: e.target.value,
            });
          }}
          placeholder="Enter Postal Code"
          className="form-control rounded-xl bg-gray-200 border-0 px-2  outline-none"
        />
      </div>
      <div className="mb-2">
        <label htmlFor="">country</label> <br />
        <input
          type="text"
          value={'Bangladesh'}
          readOnly
          className="form-control rounded-xl bg-gray-200 border-0 px-2  outline-none"
        />
      </div>
    </div>
  );
};
