import React, { useState } from 'react';
import ProductSlider from '../../Ul/GroupProductSlider';
import products from '../../untils/Data/products';

const FeaturedProducts = () => {
  const [pd, setPd] = useState(products);
  const [slideShow, setSlideShow] = useState(5);

  const handleClick = (id) => {
    if (id == 'all') {
      setPd(products);
      if (products.length <= 3) {
        setSlideShow(2);
      } else if (products.length === 4 || products.length === 5) {
        setSlideShow(4);
      } else {
        setSlideShow(5);
      }
    } else {
      const pt = products.filter((item, i) => item.category === id);
      setPd(pt);
      if (pt.length <= 3) {
        setSlideShow(2);
      } else if (pt.length === 4 || pt.length === 5) {
        setSlideShow(4);
      } else {
        setSlideShow(5);
      }
    }
  };

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto">
        <div className="flex justify-between items-center py-8">
          <div><h2 className='text-3xl font-medium'>
          Featured Products
              </h2></div>
          <div className="">
            <button
              onClick={() => handleClick('all')}
              className="mr-4 uppercase hover:underline"
            >
              All
            </button>
            <button
              onClick={() => handleClick('001')}
              className="mr-4 uppercase hover:underline"
            >
              Clothing
            </button>
            <button
              onClick={() => handleClick('002')}
              className="mr-4 uppercase hover:underline"
            >
              Shoes
            </button>
            <button
              onClick={() => handleClick('003')}
              className="mr-4 uppercase hover:underline"
            >
              Footwear
            </button>
          </div>
        </div>
        <div className="">
          <ProductSlider products={pd} slidesToShow={slideShow} />
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;

// const productFilter = (catId) => {
//   return ;
// };
