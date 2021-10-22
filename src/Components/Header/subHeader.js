import React from 'react';
import { Link } from 'react-router-dom';
import MainButton from '../../Ul/Button';
import { category } from '../../untils/Data/category';

const SubHeader = () => {
  const subHeaderBanners = category.filter((item) => item.subCategory === true);
  return (
    <div className="py-20">
      <div className="container mx-auto grid gap-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 ">
      <div className="self-center row-span-2">
        <h2 className="text-6xl font-semibold">Get your Fashion style</h2>
        <p className="pt-5 text-lg">
          You’ll always be in fashion with our collection of clothing
        </p>
        
         <MainButton title={'All Collections'} href={'/collections'} />
      </div>
      {subHeaderBanners.map((item, i) => (
        <Link to={`/category/${item.id}`}>
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
