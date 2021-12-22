import React from 'react';
import { Link } from 'react-router-dom';

function SunglassesBanner() {
  return (
    <div className="py-12 sunglassSec bg-last-banner-img h-auto md:h-fortyRem bg-cover bg-center bg-no-repeat">
      <div className="container mx-auto h-full">
        <div className="grid  h-full grid-cols-2 gap-4  md:justify-items-end ">
          <div className=''></div>
          <div className="text-center md:self-center place-self-start">
            <h2 className="uppercase text-md md:text-8xl text-blue-500 font-bold md:mb-2">
              Sunglasses
            </h2>
            <p className="md:text-5xl font-medium text-blue-500 md:mb-4">
              Super Offer
            </p>
            <img
              src={
                'https://loopinfosol.in/themeforest/ekka-html-v2/ekka-html/assets/images/offer-image/1.png'
              }
              alt="sunglass"
              className="mx-auto md:mb-4 w-28 md:w-full"
            />
            <h4 className='text-sm md:text-4xl capitalize md:mb-2'>acetate frame sunglasses</h4>
            <p className='md:text-4xl font-extrabold mb-2 md:mb-4'>$ 50.00 Only</p>
            <Link to='/product/61b81d6b0931592d28835286' className='px-2 py-1 md:px-4 md:py-2 bg-blue-500 md:text-2xl text-white rounded'>Shop Now</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SunglassesBanner;
