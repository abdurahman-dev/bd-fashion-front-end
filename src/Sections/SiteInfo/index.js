import React from 'react';
import Slider from 'react-slick';

function SiteInfoTwo() {
  const settings = {
    accessibility: true,
    adaptiveHeight: true,
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: images.length,
    autoplay: true,
    speed: 15000,
    autoplaySpeed: 9000,
    cssEase: 'linear',
    arrows: false,
    pauseOnHover: false,
    className: 'md:h-48 cursor-pointer',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: images.length,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: images.length,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: images.length,
        },
      },
    ],
  };
  return (
    <div className="py-12">
      <div className="container mx-auto">
      <div className="text-center mb-4 capitalize">
          <h2 className="text-4xl font-semibold mb-2">Instagram Feed</h2>
          <p>share your story with us</p>
        </div>
        <div className="h-30">
          <Slider {...settings}>
            {images.map((item, i) => (
              <div key={i}>
                <img src={item.url} alt="" className="h-full mx-auto px-2" />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default SiteInfoTwo;

const images = [
  {
    url: 'https://loopinfosol.in/themeforest/ekka-html-v2/ekka-html/assets/images/instragram-image/1.jpg',
  },
  {
    url: 'https://loopinfosol.in/themeforest/ekka-html-v2/ekka-html/assets/images/instragram-image/2.jpg',
  },
  {
    url: 'https://loopinfosol.in/themeforest/ekka-html-v2/ekka-html/assets/images/instragram-image/3.jpg',
  },
  {
    url: 'https://loopinfosol.in/themeforest/ekka-html-v2/ekka-html/assets/images/instragram-image/4.jpg',
  },
  {
    url: 'https://loopinfosol.in/themeforest/ekka-html-v2/ekka-html/assets/images/instragram-image/5.jpg',
  },
  {
    url: 'https://loopinfosol.in/themeforest/ekka-html-v2/ekka-html/assets/images/instragram-image/6.jpg',
  },
  {
    url: 'https://loopinfosol.in/themeforest/ekka-html-v2/ekka-html/assets/images/instragram-image/7.jpg',
  },
  {
    url: 'https://loopinfosol.in/themeforest/ekka-html-v2/ekka-html/assets/images/instragram-image/4.jpg',
  },
  {
    url: 'https://loopinfosol.in/themeforest/ekka-html-v2/ekka-html/assets/images/instragram-image/2.jpg',
  },
  {
    url: 'https://loopinfosol.in/themeforest/ekka-html-v2/ekka-html/assets/images/instragram-image/5.jpg',
  },
];
