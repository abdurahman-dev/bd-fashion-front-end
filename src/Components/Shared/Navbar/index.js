import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CartItems from '../../../Ul/CartItems';
import { BsFillBagCheckFill } from 'react-icons/bs';
import './navbar.css';

const Navbar = () => {
  const [cart, setCart] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    });

    const pd = localStorage.getItem('cartItem') || '{}';
    const pt = Object.keys(JSON.parse(pd));
    setCartItems(pt);
  }, []);

  const handleCart = () => {
    setCart(!cart);
  };

  return (
    <div className={`py-2 h-20  navbar ${sticky ? 'bgSticky' : 'bgNotSticky'}`}>
      <div className="container mx-auto  h-full">
        <div className="flex justify-between items-center h-full">
          <div>
            <Link to="/">
              <h1 className="text-2xl md:text-3xl font-medium">BD Fashion</h1>
            </Link>
          </div>
          {/* <div>
          <input type="text" placeholder='search' className='border-2 border-red-600' />
          </div> */}
          <div>
            <ul className="flex">
              <button onClick={handleCart} className="">
                <li className="mr-4 md:mr-8 flex">
                  <BsFillBagCheckFill className="text-2xl" />
                  {cartItems.length}
                </li>
              </button>
              <Link to="/login">
                {' '}
                <li className="font-medium md:font-bold text-xl">JOIN</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
      {<CartItems setCart={setCart} cart={cart} />}
    </div>
  );
};

export default Navbar;
