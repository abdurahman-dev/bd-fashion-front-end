import React from 'react';
import FooterCol from './FooterCol';

const Footer = () => {
  return (
    <div className="bg-red-50">
      <div className='border-t-2 border-gray-600 w-full h-3'></div>
      <div className="container mx-auto py-10">
        <div className="grid gap-4 grid-cols-2 md:grid-cols-4 ">
          <div className="">
            <FooterCol item={footerInfo[0]} title={'Company'}/>
          </div>
          <div className="">
            <FooterCol item={footerInfo[1]} title={'Our Shop'}/>
          </div>
          <div className="">
            <FooterCol item={footerInfo[2]} title={'Service'}/>
          </div>
          <div className="self-center hidden md:block">
              <h2 className='text-3xl font-bold'>BD FASHION</h2>
              <p className='text-gray-600'>Katgar, Patenga ,Chittagong, Bangladesh</p>
              <strong>Call :</strong> <span>017*********</span> <br />
              <strong>Email :</strong> <span>a.rahman4124@gmail.com</span>
          </div>
        </div>
        <div className="mt-4 block md:hidden">
              <h2 className='text-3xl font-bold'>BD FASHION</h2>
              <p className='text-gray-600'>Katgar, Patenga ,Chittagong, Bangladesh</p>
              <strong>Call :</strong> <span>017*********</span> <br />
              <strong>Email :</strong> <span>a.rahman4124@gmail.com</span>
          </div>
      </div>
    </div>
  );
};

export default Footer;

const footerInfo = [
  [
    { label: 'About us', href: '/' },
    { label: 'Contact us', href: '/' },
    { label: 'Blog', href: '/' },
    { label: 'Shopping Card', href: '/shoppingCard' },
    { label: 'Careers', href: '/' },
  ],
  [
    { label: 'Clothes', href: '/' },
    { label: 'Watches', href: '/' },
    { label: 'Electronics', href: '/' },
    { label: 'Shoes', href: '/' },
    { label: 'Bags', href: '/' },
  ],
  [
    { label: 'Help & FAQs', href: '/' },
    { label: 'Terms of Conditions', href: '/' },
    { label: 'Privacy Policy', href: '/' },
    { label: 'Online Returns Policy', href: '/' },
  ],
];
