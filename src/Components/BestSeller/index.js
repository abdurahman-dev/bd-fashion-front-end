import React from 'react';
import ProductSlider from '../../Ul/GroupProductSlider';
import products from '../../untils/Data/products';

const BestSellers = () => {
  return (
    <div className=" py-20 bg-gray-100">
      <div className="container mx-auto">
        <ProductSlider
          products={products}
          groupTitle={'Best sells'}
          slidesToShow={4}
        />
      </div>
    </div>
  );
};

export default BestSellers;
