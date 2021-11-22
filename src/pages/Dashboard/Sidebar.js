import React from 'react';
import { Link } from 'react-router-dom';
import { BsXLg } from 'react-icons/bs';
import { useSelector } from 'react-redux';

const Sidebar = ({onClick,sidebar}) => {
  const authLogin = useSelector(state => state.authLoginReducer)
  let admin = false
  if(authLogin.user?.role==='admin'){
    admin = true
  }
  return (
    <div className={`${sidebar ? 'sidebarActive' : 'sidebarDeactivate'} sidebar`}>
      <div className={`${sidebar ? 'sidebarItemActive' : 'sidebarITemDeactivate'} sidebarITem`}>
      <div className="flex flex-col py-4  text-center justify-between h-full">
      <div>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {admin
            ? adminMenu.map((item, i) => (
                <Link key={i} onClick={onClick} to={item.href}>
                  <li className="hover:bg-gray-500 hover:text-white text-md py-4">{item.title}</li>
                </Link>
              ))
            : userMenu.map((item, i) => (
                <Link key={i} onClick={onClick} to={item.href}>
                  <li className="hover:bg-gray-500 hover:text-white text-md py-4">{item.title}</li>
                </Link>
              ))}
        </ul>
      </div>
      <div>
        <Link to={'/'}>
          <p className="bg-gray-500 text-white text-xl font-medium mb-8 py-4"> Log Out</p>
        </Link>
      </div>
    </div>
    </div>
    <div onClick={onClick} className={`w-full h-full top-0 bg-opacity-50 left-0 bg-gray-600 `} >
      <div onClick={onClick} className={`pt-4 pl-4 ${sidebar ? 'sidebarCloseButtonActive': 'sidebarCloseButtonDetective'} cursor-pointer`}>
      <BsXLg style={{ color: '#fff', fontSize: '1.5rem' }} />
      </div>
      </div>
    </div>
  );
};

export default Sidebar;

const adminMenu = [
  {
    title: 'Dashboard',
    href: '/adminDashboard',
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
    title: 'Category',
    href: '/categoryControl',
  },
  {
    title: 'Go Site',
    href: '/',
  },

];

const userMenu = [
  {
    title: 'Product Status',
    href: '/userProductStatus',
  },
  {
    title: 'Order History',
    href: '/userProductOrderList',
  },
  {
    title: 'Profile',
    href: '/userProfile',
  },
  {
    title: 'Continue Shopping',
    href: '/',
  },
];

