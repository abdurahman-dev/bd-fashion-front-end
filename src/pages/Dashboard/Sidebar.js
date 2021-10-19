import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({onClick}) => {
  const admin = true;
  return (
    <div className="flex flex-col py-4  text-center justify-between h-full">
      <div>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {admin
            ? adminMenu.map((item, i) => (
                <Link onClick={onClick} to={item.href}>
                  <li className="hover:bg-blue-500 py-4">{item.title}</li>
                </Link>
              ))
            : userMenu.map((item, i) => (
                <Link  onClick={onClick} to={item.href}>
                  <li className="hover:bg-blue-500 py-4">{item.title}</li>
                </Link>
              ))}
        </ul>
      </div>
      <div>
        <Link to={'/'}>
          <p className="hover:bg-blue-500 mb-8 py-4"> Log Out</p>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;

const adminMenu = [
  {
    title: 'Dashboard',
    href: '/',
  },
  {
    title: 'Products',
    href: '/manageProducts',
  },
  {
    title: 'Orders',
    href: '/manageOrders',
  },
  {
    title: 'Users',
    href: '/manageUsers',
  },
  {
    title: 'Home Banners',
    href: '/manageBanners',
  },
  {
    title: 'Go Site',
    href: '/',
  },
];

const userMenu = [
  {
    title: 'Product Status',
    href: '',
  },
  {
    title: 'Order History',
    href: '',
  },
  {
    title: 'Profile',
    href: '',
  },
  {
    title: 'Continue Shopping',
    href: '',
  },
];
