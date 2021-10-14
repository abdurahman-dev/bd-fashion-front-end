import React, { useEffect, useState } from 'react';
import ProductSlider from '../../Ul/GroupProductSlider';
import bannerImg from '../../images/banner_sidebar_270x380_crop_center.jpg';

const NewProducts = ({ products }) => {
  // console.log(products);
  const [sliderCount, setSliderCount] = useState(null);
  useEffect(() => {
    if (products.length <= 2) {
      setSliderCount(2);
    } else if (products.length == 3) {
      setSliderCount(3);
    } else {
      setSliderCount(4);
    }
  }, [products]);
  return (
    <div className=' py-12'>
      <div className="container grid grid-cols-4 gap-4 mx-auto ">
        <div className="hidden md:block mr-5 self-center justify-self-start  ">
          <div className="">
            <img
              src={bannerImg}
              alt=""
              className="rounded"
              style={{ height: '440px' }}
            />
          </div>
        </div>
        <div className="col-span-4 md:col-span-3">
          <ProductSlider
            products={products}
            groupTitle={`What's New`}
            slidesToShow={sliderCount}
          />
        </div>
      </div>
    </div>
  );
};

export default NewProducts;
