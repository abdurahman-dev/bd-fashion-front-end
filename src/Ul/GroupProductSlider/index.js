import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

import ProductCard from '../ProductCard';

const ProductSlider = ({ groupTitle, products, slidesToShow}) => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    arrows: true,
    slidesToShow: slidesToShow,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: slidesToShow - 1,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="h-auto">
      {groupTitle && (
        <div className="h-14 flex items-center  text-black px-1">
          <div>
            <h4 className="font-bold text-4xl">{groupTitle}</h4>
          </div>
        </div>
      )}
      <div className="" style={{ width: '94%', margin: '0 auto' }}>
        <Slider {...settings}>
          {products.map((product, i) => (
            <ProductCard product={product} key={i}/>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ProductSlider;


