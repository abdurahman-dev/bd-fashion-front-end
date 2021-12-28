import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ProductSlider from '../../Ul/GroupProductSlider';

const FeaturedProducts = () => {
  const [pds, setPds] = useState([]);
  const pdState = useSelector((state) => state.productReducer);

  useEffect(() => {
    setPds(pdState.products);
  }, [pdState.products]);

  const handleClick = (title) => {
    if (title === 'All') {
      setPds(pdState.products);
    } else {
      const pt = pdState.products.filter(
        (item, i) => item.productCategory === title || item.productSubCategory===title
      );
      setPds(pt);
    }
  };

  return (
    <div className="py-10 bg-gray-100">
      <div className="container mx-auto">
        <div className="flex md:flex-row justify-between items-center text-justify sm:text-center py-8 flex-col">
          <div>
            <h2 className="text-4xl font-medium ">Featured Products</h2>
          </div>
          <div className="">
            <button
              onClick={() => handleClick('All')}
              className="mr-4 uppercase hover:underline"
            >
              All
            </button>
            <button
              onClick={() => handleClick('Clothes')}
              className="mr-4 uppercase hover:underline"
            >
              Clothes
            </button>
            <button
              onClick={() => handleClick('Shoes')}
              className="mr-4 uppercase hover:underline"
            >
              Shoes
            </button>
            <button
              onClick={() => handleClick('Beauty')}
              className="mr-4 uppercase hover:underline"
            >
              Beauty
            </button>
          </div>
        </div>
        <div className="">
          <ProductSlider products={pds} slidesToShow={4} />
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
