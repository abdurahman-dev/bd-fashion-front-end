import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    });
  }, []);
  return (
    <div className={`py-2 h-20  navbar ${sticky ? 'bgSticky' : 'bgNotSticky'}`}>
      <div className="container mx-auto  h-full">
        <div className="flex justify-between items-center h-full">
          <div>
            <Link to="/">
              <h1 className="text-3xl font-medium">BD Fashion</h1>
            </Link>
          </div>
          {/* <div>
          <input type="text" placeholder='search' className='border-2 border-red-600' />
          </div> */}
          <div>
            <ul className="flex">
              <Link to="/dashboard">
                {' '}
                <li className="mr-8">Cart</li>
              </Link>
              <Link to="/login">
                {' '}
                <li className="">Log in</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

const menuItem = [
  {
    title: '',
    href: '',
    cName: '',
  },
  {
    title: '',
    href: '',
    cName: '',
  },
];
