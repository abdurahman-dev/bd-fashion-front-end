import React from 'react';
import FooterCol from './FooterCol';

const Footer = () => {
  return (
    <div className="bg-red-50">
      <div style={{borderTop:'2px solid gray',width:'100%',height:'10px'}}></div>
      <div className="container mx-auto py-12">
        <div className="grid gap-4 grid-cols-2 md:grid-cols-4">
          <div className="">
            <FooterCol item={footerInfo[0]} title={'Company'}/>
          </div>
          <div className="">
            <FooterCol item={footerInfo[1]} title={'Our Shop'}/>
          </div>
          <div className="">
            <FooterCol item={footerInfo[2]} title={'Service'}/>
          </div>
          <div className="">Will Do</div>
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
    { label: 'Careers', href: '/' },
  ],
  [
    { label: 'Link One B', href: '/' },
    { label: 'Link Two B', href: '/' },
    { label: 'Link Three B', href: '/' },
    { label: 'Link Four B', href: '/' },
  ],
  [
    { label: 'Help & FAQs', href: '/' },
    { label: 'Terms of Conditions', href: '/' },
    { label: 'Privacy Policy', href: '/' },
    { label: 'Online Returns Policy', href: '/' },
  ],
];
