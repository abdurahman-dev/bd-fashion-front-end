import React from 'react';
import { Link } from 'react-router-dom';
import { category } from '../../untils/Data/category';

const SubHeader = () => {
  const subHeaderBanners = category.filter((item) => item.subCategory === true);
  return (
    <div className="py-20 ">
      <div className="container mx-auto grid gap-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 ">
        <div className="self-center row-span-2">
          <h2 className="text-6xl font-semibold">Get your Fashion style</h2>
          <p className="pt-5 text-lg mb-2">
            You’ll always be in fashion with our collection of clothing
          </p>

          <Link to="/collections">
            <button class="transition duration-500 ease-in-out bg-blue-500 border-2 text-gray-50 border-blue-500 px-9 py-1  hover:bg-gray-200 hover:border-gray-500 hover:text-gray-900 uppercase transform hover:translate-y-1 hover:scale-110 ">
              All Collection
            </button>
          </Link>
        </div>
        {subHeaderBanners.map((item, i) => (
          <Link to={`/shop/${'Clothes'}`}>
            <div className="cursor-pointer">
              <img
                src={item.image}
                alt=""
                className="object-fill rounded h-full w-full"
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SubHeader;
