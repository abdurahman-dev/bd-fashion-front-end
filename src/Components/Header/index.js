import React from 'react';
import Slider from 'react-slick';
import mainBanners from '../../untils/Data/banners';

const Header = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: false,
  };

  return (
    <div>
      <Slider {...settings}>
        {mainBanners.map((item, i) => (
          <div>
            <div
          className="flex space-x-4  items-center content-start mx-auto"
          style={{
            backgroundImage: `url(${item.img})`,
            backgroundPosition: 'center top',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'scroll',
            height: '550px',
          }}
        >
          <div className="flex-1"></div>
          <div
            className={`order-${item.textSide == 'left' && 'first'} order-${
              item.textSide == 'right' && 'last'
            } flex-1 `}
          >
            <div
              className={`${item.textSide == 'left' && 'pl-20'} py-5  ${
                item.textSide == 'center' && 'text-center'
              }`}
            >
              <h5 className="text-xl font-sans font-bold">
                {item.subtitle}
              </h5>
              <h2 className="text-5xl font-sans font-semibold">
                {item.title}
              </h2>
              <p>{item.description}</p>
              <button
                to="/"
                style={{
                  backgroundColor: 'gray',
                  padding: '7px 35px',
                  borderRadius: '5px',
                }}
              >
                {item.buttonTitle}
              </button>
            </div>
          </div>
          <div className="flex-1"></div>
        </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Header;
