import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ReactStars from 'react-rating-stars-component';
import './style.css';
import AddToCardButton from '../AddToCardButton';
import { storeProduct } from '../../untils/Cart/index';

const ProductCard = ({ product, height }) => {
  const [cart, setCart] = useState([]);

  const firstExample = {
    size: 30,
    value: product.rating,
    edit: false,
  };

  const handleProduct = (pd) => {
    const pdInfo = {};
    pdInfo[pd.id] = {
      name: pd.name,
    };
    // storeProduct(pdInfo,pd.id);
  };

  return (
    <div className="m-4">
      <Link to={`/product/${product.slug}`}>
        <div className="w-full rounded-md cardMain">
          <img src={product.image[0].Img} alt="" className={`w-full`} />
          <div className="hoverButton flex justify-center w-full">
            <div className="flex justify-between items-center">
              <AddToCardButton addToCard={false} quickView={true} />
              {product.stock >= 1 ? (
                <AddToCardButton
                  addToCard={true}
                  quickView={false}
                  onClick={() => handleProduct(product)}
                />
              ) : (
                <p className="text-red-700 bg-white py-1 px-2">Stock Out</p>
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
          <p className="text-sm  text-gray-900">Price: $ {product.price}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
