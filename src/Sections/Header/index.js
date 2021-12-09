import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import mainBanners from '../../untils/Data/banners';

const Header = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  };

  return (
    <div>
      <Slider {...settings}>
        {mainBanners.map((item, i) => (
          <div>
            <div
              className="flex space-x-4  items-center content-start mx-auto h-80 md:h-ninetyVh bg-cover  md:bg-cover bg-no-repeat bg-center bg-scroll"
              style={{
                backgroundImage: `url(${item.img})`,
              }}
            >
              <div className="flex-1 bg-blue-600"></div>
              <div
                className={`order-${
                  item.textSide === 'left' && 'first'
                } order-${item.textSide === 'right' && 'last'} flex-1 `}
              >
                <div
                  className={`${
                    item.textSide === 'left' && 'md:pl-20'
                  } md:py-5  ${item.textSide === 'center' && 'text-center'} `}
                >
                  <h5 className="md:text-xl font-sans font-bold">
                    {item.subtitle}
                  </h5>
                  <h2 className="text-xl md:text-5xl font-sans font-semibold">
                    {item.title}
                  </h2>
                  <p className="mb-2 ">{item.description}</p>
                  <Link to={item.href}>
                    <button class="transition duration-500 text-gray-50 ease-in-out bg-blue-500 border-2 border-blue-500 text-sm px-3 md:px-9 py-1  hover:bg-gray-200  hover:border-gray-500 hover:text-gray-900 uppercase transform hover:translate-x-1">
                      {item.buttonTitle}
                    </button>
                  </Link>
                </div>
              </div>
              <div className="flex-1 hidden md:block"></div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Header;
