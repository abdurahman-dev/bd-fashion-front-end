import React, { useState } from 'react';
import Slider from 'react-slick';
import { BsTagFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import ReactStars from 'react-stars';
import './style.css';
import { useDispatch } from 'react-redux';
import { addToCard } from '../../Redux/Actions/addToCard.action';
import { Toaster } from 'react-hot-toast';
import { requiredErrorHandle } from '../../helper/toastNotification';

export default function SingleProductInfo({ pd, quickView }) {
  const [qntCount, setQntCount] = useState(1);
  const dispatch = useDispatch();
  const {
    productName,
    _id,
    productStock,
    ratings,
    discount,
    reviews,
    productPrice,
    productCategory,
    productDescription,
    productImage,
  } = pd;

  const settings = {
    customPaging: function (i) {
      return (
        <a href=" ">
          <img src={productImage[i]?.url} alt="" className="h-16 w-full" />
        </a>
      );
    },
    dots: true,
    dotsClass: 'slick-dots slick-thumb',
    infinite: true,
    speed: 500,
    draggable: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const discountPrice =
    Number(discount) > 0 && ((Number(discount) / 100) * productPrice).toFixed();

  const handleQnty = (action, pd) => {
    if (action === 'sub') {
      if (qntCount <= 1) {
        return requiredErrorHandle('Quantity must be greater then one');
      } else {
        setQntCount(qntCount - 1);
        //   dispatch(addToCard(pd,qntCount-1))
      }
    }
    if (action === 'add') {
      if (qntCount >= productStock) {
        return requiredErrorHandle(
          `There are ${productStock} product in Stock`
        );
      } else {
        setQntCount(qntCount + 1);
        // dispatch(addToCard(pd,qntCount+1))
      }
    }
  };
  const handleProductAddToCard = (pd) => {
    dispatch(addToCard(pd, qntCount));
  };
  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
      <Toaster />
      <div className="justify-self-center" style={{ width: '94%' }}>
        <Slider {...settings}>
          {productImage?.map((item, i) => (
            <img
              key={i}
              src={item?.url}
              alt=""
              className="rounded img-height"
            />
          ))}
        </Slider>
        <div className="h-20 "></div>
      </div>
      <div className="self-center">
        <div>
          <span
            className={` px-4  rounded text-center text-white ${
              Number(productStock) ? 'bg-blue-400' : 'bg-red-500'
            }`}
          >
            {Number(productStock) ? ' In Stock ' : 'Stock Out'}
          </span>
        </div>
        <div className="py-2">
          <h2 className="text-black text-3xl font-medium">{productName}</h2>
        </div>
        <div className="flex items-center">
          <div>
            <ReactStars
              count={5}
              value={ratings}
              size={24}
              color2={'#ffd700'}
              edit={false}
            />
          </div>
          <div className="ml-8">
            {quickView === true ? (
              <p
                className={`${
                  reviews?.length ? 'text-yellow-500' : 'text-red-500'
                }`}
              >
                {reviews?.length} reviews
              </p>
            ) : (
              <a
                href={'#PdReviews'}
                className={`${
                  reviews?.length ? 'text-yellow-500' : 'text-red-500'
                }`}
              >
                {reviews?.length} reviews
              </a>
            )}
          </div>
        </div>
        <div>
          <span className="text-2xl font-medium text-red-600">
            Price : $ {discountPrice ? discountPrice : productPrice}
          </span>
          {Number(discount) > 1 && (
            <span className="text-normal ml-3 text-gray-600">
              {discount && `$${productPrice}`} {discount}%off
            </span>
          )}
        </div>

        <div className="text-lg py-1">
          <span>
            <BsTagFill className="inline-block  text-xl" />
          </span>
          <span>
            {' '}
            Category :{' '}
            <Link to="/shop/products" className="underline">
              {productCategory}
            </Link>{' '}
          </span>
        </div>
        <div className=" w-2/5 my-4">
          Quantity
          <div className="flex  justify-between items-center p-2 ">
            <div>
              <button
                onClick={() => handleQnty('add', _id)}
                className="w-5 h-10 rounded-full bg-blue-400 text-gray-50"
              >
                +
              </button>
              <input
                type="text"
                readOnly
                value={qntCount}
                className="w-12 text-center mx-2 rounded-md outline-none ring-0  border-0 focus:ring-0 "
              />
              <button
                onClick={() => handleQnty('sub', _id)}
                className="w-5 h-10 rounded-full bg-blue-400 text-gray-50"
              >
                -
              </button>
            </div>
          </div>
        </div>

        {Number(productStock) ? (
          <div className="flex text-white py-4">
            <button
              onClick={() => handleProductAddToCard(_id)}
              className="py-2 px-4 bg-blue-400 rounded"
            >
              Add To Card
            </button>
            <Link to='/shoppingCard'
              onClick={() => handleProductAddToCard(_id)}
              className="py-2 px-4 bg-green-600 rounded ml-4 text-white"
            >
              Buy Now
            </Link>
          </div>
        ) : (
          ''
        )}
        <div className="">
          <span>
            {' '}
            <strong>Description</strong> : {productDescription}
          </span>
        </div>
      </div>
    </div>
  );
}
