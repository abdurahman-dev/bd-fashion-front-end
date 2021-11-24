import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { BsTagFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import ReactStars from 'react-stars';
import { storeProduct } from '../../untils/Cart';
import './style.css';

export default function SingleProductInfo({ pd,quickView}) {
  const [qntCount, setQntCount] = useState(1);
  useEffect(() => {
    setQntCount(1);
  }, []);
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

  const handleQnty = (action) => {
    if (action === 'sub') {
      if (qntCount <= 1) {
        alert('quantity must be greater then one');
        return;
      } else {
        setQntCount(qntCount - 1);
      }
    }
    if (action === 'add') {
      console.log('add');
      if (qntCount >= productStock) {
        alert(`There are ${productStock} product in Stock`);
        return;
      } else {
        setQntCount(qntCount + 1);
      }
    }
  };
  const handleProductAddToCard = (id) => {
    storeProduct(id, qntCount);
  };
  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
      <div className="justify-self-center" style={{ width: '94%' }}>
        <Slider {...settings}>
          {productImage?.map((item, i) => (
            <img src={item?.url} alt="" className="rounded img-height" />
          ))}
        </Slider>
        <div className="h-20 "></div>
      </div>
      <div className="self-center">
        <div>
          <span
            className={` px-4  rounded text-center text-white ${
              Number(productStock) ? 'bg-green-500' : 'bg-red-500'
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
            <ReactStars count={5} value={ratings} size={24} color2={'#ffd700'}  edit={false}/>
           
          </div>
          <div className="ml-8">
            {
              quickView===true ? <p className={`${
                reviews?.length ? 'text-yellow-500' : 'text-red-500'
              }`}>
                  {reviews?.length} reviews
              </p> : <a
              href={'#PdReviews'}

              className={`${
                reviews?.length ? 'text-yellow-500' : 'text-red-500'
              }`}
            >
              {reviews?.length} reviews
            </a>
            }
            
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
            <Link to="/" className="underline">
              {productCategory}
            </Link>{' '}
          </span>
        </div>
        <div className=" w-2/5 my-4">
          Quantity
          <div className="flex mt-2 justify-between text-center items-center w-full h-full">
            <button
              onClick={() => handleQnty('sub')}
              className="border-2  flex-1"
            >
              -
            </button>
            <div className="border-2  flex-1">{qntCount}</div>
            <button
              onClick={() => handleQnty('add')}
              className="border-2 flex-1"
            >
              +
            </button>
          </div>
        </div>

        {Number(productStock) ? (
          <div className="flex text-white py-4">
            <button
              onClick={() => handleProductAddToCard(_id)}
              className="py-2 px-4 bg-yellow-600 rounded"
            >
              add to card
            </button>
            <button className="py-2 px-4 bg-green-600 rounded ml-4">
              Buy Now
            </button>
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
