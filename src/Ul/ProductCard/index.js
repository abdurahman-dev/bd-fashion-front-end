import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ReactStars from 'react-rating-stars-component';
import './style.css';
import AddToCardButton from '../AddToCardButton';
import { storeProduct } from '../../untils/Cart/index';

const ProductCard = ({ product, height }) => {
  const firstExample = {
    size: 30,
    value: product.rating,
    edit: false,
  };

  const handleProduct = (pd) => {
    storeProduct(pd.id, 1);
  };

  const discountPrice = Number(product.discount) > 1 &&  (Number(product.discount) / 100) *
  product.price ;
   
  return (
    <div className="m-4">
      <Link to={`/product/${product.slug}`}>
        <div className="w-full rounded-md cardMain">
          <img src={product.image[0].Img} alt="" className={`w-full`} />
          {product.stock == 0 && (
            <div className="bg-red-600 text-white rounded-r absolute text-center left-0 top-2  w-20 ">
              Stock Out
            </div>
          )}
          {product.tags.new == true && (
            <div
              className={`bg-black text-white rounded-r absolute text-center left-0 ${
                product.stock == 0 ? 'top-10' : 'top-2'
              } w-20 `}
            >
              New
            </div>
          )}
          {product.discount > 0 && (
            <div className="bg-green-600 text-white rounded-l absolute text-center right-0 top-0 w-20 ">
              {product.discount}%
            </div>
          )}
          <div className="hoverButton flex justify-center w-full">
            <div className="flex justify-between items-center">
              <AddToCardButton addToCard={false} quickView={true} />
              {product.stock >= 1 && (
                <AddToCardButton
                  addToCard={true}
                  quickView={false}
                  onClick={() => handleProduct(product)}
                />
              )}
            </div>
          </div>
        </div>
        <div className="mt-1">
          <div className="text-center flex justify-center">
            <ReactStars {...firstExample} />
          </div>
          <div>
            <h3 className="text-sm text-gray-700">
              <a href={product.href} className="text-lg font-normal">
                <span aria-hidden="true" className="" />
                {product.name}
              </a>
            </h3>
          </div>
          <span className="text-sm  text-gray-900">
            Price: ${' '}
            {discountPrice ? discountPrice : product.price}
          </span>{' '}
          <span className='text-red-700 line-through'>{discountPrice &&  `from  $${product.price}` }</span>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
