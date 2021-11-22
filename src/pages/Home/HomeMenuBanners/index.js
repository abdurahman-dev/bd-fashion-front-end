import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../../images/menu-banner-1_570x161_crop_center.jpg';
import img2 from '../../../images/menu-banner-2_570x161_crop_center.jpg';

const MenuBanners = () => {
  return (
    <div className="">
      <div className="container mx-auto bg-gray-200 py-12 h-auto">
      <h2 className="text-center text-3xl font-medium">Best Collection</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full pt-12">
        {bannerInfo.map((item, i) => (
          <Link to={item.href} key={i} className='text-black'>
            <div
              style={{
                backgroundImage: `url(${item.bg})`,
                backgroundPosition: 'top center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
              }}
              className="h-64 w-full px-12 rounded"
            >
              <div className="flex items-center h-full">
                <div>
                  <h2 className="text-3xl font-medium">{item.title}</h2>
                  <p className="text-normal">{item.des}</p>
                  <Link to={item.href}>
                    <button>button</button>
                  </Link>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
    </div>
  );
};

export default MenuBanners;

const bannerInfo = [
  {
    title: 'Mans',
    des: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, aliquid tempora aperiam itaque error voluptatum provident cum iusto ratione odit illo quos nulla',
    href: '/Collections',
    bg: img1,
  },
  {
    title: 'Womans',
    des: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, aliquid tempora aperiam itaque error voluptatum provident cum iusto ratione odit illo quos nulla',
    href: '/Collections',
    bg: img2,
  },
];
