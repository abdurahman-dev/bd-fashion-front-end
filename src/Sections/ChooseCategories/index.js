import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {useSelector } from 'react-redux'

const cat = [
  {
    title: 'Clothes',
    icon: 'https://loopinfosol.in/themeforest/ekka-html-v2/ekka-html/assets/images/icons/cat_1_1.png',
    img: 'https://loopinfosol.in/themeforest/ekka-html-v2/ekka-html/assets/images/cat-banner/1.jpg',
    className: 'active',
  },
  {
    title: 'Watches',
    icon: 'https://loopinfosol.in/themeforest/ekka-html-v2/ekka-html/assets/images/icons/cat_2_1.png',
    img: 'https://loopinfosol.in/themeforest/ekka-html-v2/ekka-html/assets/images/cat-banner/2.jpg',
  },
  {
    title: 'Bags',
    icon: 'https://loopinfosol.in/themeforest/ekka-html-v2/ekka-html/assets/images/icons/cat_3_1.png',
    img: 'https://loopinfosol.in/themeforest/ekka-html-v2/ekka-html/assets/images/cat-banner/3.jpg',
  },
  {
    title: 'Shoes',
    icon: 'https://loopinfosol.in/themeforest/ekka-html-v2/ekka-html/assets/images/icons/cat_4_1.png',
    img: 'https://loopinfosol.in/themeforest/ekka-html-v2/ekka-html/assets/images/cat-banner/4.jpg',
  },
];

export default function ChooseCategories() {
  const [selectedItem, setSelectedItem] = useState(cat[0]);
  const [isHover, setIsHover] = useState(false);
  const [pds,setPds]=useState([])

  const {products}=useSelector(state=>state.productReducer)
 
  useEffect(()=>{
    setPds(products)
  },[products])

  const handleItem = (item) => {
    setSelectedItem(item);
    item.className = 'active';
    const pd = cat.filter((i) => i !== item);
    pd.map((item) => (item.className = ''));
  };

  return (
    <div className="py-12 ">
      <div className="container mx-auto">
        <div className="text-center mb-6">
          <div className="text-center mb-2 capitalize">
            <h2 className="text-4xl font-semibold mb-2">Our Top Categories</h2>
            <p>Browse the collection of top Categories</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 md:gap-4 ">
          <div className="grid grid-cols-2 md:grid-cols-1 gap-3 mb-2 md:mb-0">
            {cat.map((item, i) => {
              return (
                <button
                  key={i}
                  onClick={() => {
                    handleItem(item);
                  }}
                  className={` w-full  h-20 ${
                    item.className === 'active' && 'bg-blue-500'
                  }  bg-gray-400 hover:bg-blue-500  md:px-6 cursor-pointer rounded-sm mb-0 md:mb-2`}
                >
                  <div className="flex">
                    <div>
                      <img src={item.icon} alt="" />
                    </div>
                    <div className=" ml-3 md:ml-8 text-left text-white">
                      <h4 className="p-0 m-0 text-lg font-medium">{item.title}</h4>
                      <p>{totalProducts(item.title,pds)} products</p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
          <div
            className="col-span-3 self-center  w-full h-full relative transition duration-500 ease-in-out"
            onMouseEnter={() => {
              setIsHover(true);
            }}
            onMouseLeave={() => setIsHover(false)}
          >
            <div className="h-full transition duration-500 ease-in-out">
              <img src={selectedItem.img} alt="" className="h-full w-full" />
              {isHover && (
                <div className="absolute inset-0 bg-gray-800 bg-opacity-70 flex h-full w-full justify-center align-items-center">
                  <Link to="/shop/products" className="bg-blue-500 px-10 py-2 text-white">
                    View All
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


const totalProducts=(catName,pds)=>{
  const pd=pds.filter((item) => item.productCategory === catName)
 return pd.length 
}