import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BsFillBagCheckFill } from 'react-icons/bs';
import './navbar.css';
import { useSelector, useStore } from 'react-redux';
import { Image } from 'cloudinary-react';
import CartItem from '../../CartItem';
const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [loggedUser, setLoggedUser] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [LoggedUserInfo, setLoggedUserInfo] = useState({});
  const authLogin = useSelector((state) => state.authLoginReducer);
  const authReg = useSelector((state) => state.authRegisterReducer);
  const { cardItem } = useSelector((state) => state.CardReducer);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const store = useStore();
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    });
  }, []);

  useEffect(() => {
    const localCart = localStorage.getItem('cart');
    if (localCart) {
      setCartItems(Object.keys(cardItem));
    } else {
      setCartItems([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [store.getState().CardReducer, cardItem]);

  useEffect(() => {
    if (authLogin.isAuthenticated || authReg.isAuthenticated) {
      setLoggedUserInfo(
        authLogin.user?.avatar?.url || authReg.user?.avatar?.url
      );
      setLoggedUser(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authLogin, setLoggedUser, store.getState().authRegisterReducer]);
  const handleCart = () => {
    setShow(true);
  };
  let admin = false;
  if (authLogin.user?.role === 'admin') {
    admin = true;
  }

  return (
    <div className={`py-2  menubar ${sticky ? 'bgSticky' : 'bgNotSticky'}`}>
      <div className="container mx-auto  h-full">
        <div className="flex justify-between items-center h-full">
          <div>
            <Link to="/">
              <h1 className="text-2xl md:text-3xl font-medium text-black">
                BD Fashion
              </h1>
            </Link>
          </div>

          <div>
            <ul className="flex">
              <button onClick={handleCart} className="">
                <li className="mr-2 md:mr-5 flex">
                  <BsFillBagCheckFill className="text-2xl" />
                  {cartItems.length}
                </li>
              </button>
              {loggedUser === false ? (
                <Link to="/login">
                  {' '}
                  <li className="font-medium md:font-bold text-xl">JOIN</li>
                </Link>
              ) : admin ? (
                <Link to="/adminDashboard">
                  {' '}
                  <Image
                    cloudName="dpqv2divs"
                    publicId={LoggedUserInfo}
                    className="rounded-full w-10 h-10"
                  />
                </Link>
              ) : (
                <Link to="/userProductStatus">
                  {' '}
                  <Image
                    cloudName="dpqv2divs"
                    publicId={LoggedUserInfo}
                    className="rounded-full w-10 h-10"
                  />
                </Link>
              )}
            </ul>
          </div>
        </div>
      </div>
      <CartItem show={show} handleClose={handleClose} placement={'end'} />
    </div>
  );
};

export default Navbar;
