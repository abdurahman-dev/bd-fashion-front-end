import React from 'react';
import { FaHeadphones, FaShoppingBag, FaMoneyCheckAlt } from 'react-icons/fa';
import { GiCommercialAirplane } from 'react-icons/gi';

const InfoOne = () => {
    return (
        <div className="py-24 ">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
            {info.map((item, i) => {
              return (
                <div
                  key={i}
                  className=" p-4 text-center transition duration-300 ease-in-out  border rounded hover:shadow-lg"
                >
                  <item.icon className="mx-auto text-5xl mb-2" />
                  <h4 className="text-2xl font-semibold">{item.title}</h4>
                  <p className="px-4">{item.des}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
};

export default InfoOne;
const info = [
    {
      icon: GiCommercialAirplane,
      title: 'Free Shipping',
      des: 'Free shipping on all US order or order above $200',
    },
    {
      icon: FaHeadphones,
      title: '24X7 Support',
      des: 'Contact us 24 hours a day, 7 days a week',
    },
    {
      icon: FaShoppingBag,
      title: '30 Days Return',
      des: 'Simply return it within 30 days for an exchange',
    },
    {
      icon: FaMoneyCheckAlt,
      title: 'Payment Secure',
      des: 'Contact us 24 hours a day, 7 days a week',
    },
  ];