import React from 'react';
import ProductSlider from '../../Ul/GroupProductSlider';
import products from '../../untils/Data/products';

const RelatedProducts = ({ catId }) => {
  const pd = products.filter((item) => item.category === catId);
  return (
    <div className="py-1">
      <div className="container mx-auto">
        <div className="text-black text-4xl font-bold">Related Products</div>
        <ProductSlider products={ products} slidesToShow={4} />
      </div>
    </div>
  );
};

export default RelatedProducts;
