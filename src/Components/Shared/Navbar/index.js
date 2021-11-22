import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CartItems from '../../../Ul/CartItems';
import { BsFillBagCheckFill } from 'react-icons/bs';
import './navbar.css';
import { useSelector } from 'react-redux';
import { Image } from 'cloudinary-react';
const Navbar = () => {
  const [cart, setCart] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [loggedUser, setLoggedUser] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [LoggedUserInfo, setLoggedUserInfo] = useState({});
  const authLogin = useSelector(state => state.authLoginReducer)
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    });

    const pd = localStorage.getItem('cartItem') || '{}';
    const pt = Object.keys(JSON.parse(pd));
    setCartItems(pt);
  }, []);

  useEffect(() => {
    if(authLogin.isAuthenticated){
      setLoggedUserInfo(authLogin.user.avatar?.url)
      setLoggedUser(true)
    }
  }, [authLogin,setLoggedUser])

  const handleCart = () => {
    setCart(!cart);
  };

// useEffect(()=>{
//   const token=document.cookie
//   console.log(token);
//   if(token){
//     setLoggedUser(true)
//   }
// },[setLoggedUser])


  let admin = false
  if(authLogin.user?.role==='admin'){
    admin = true
  }

  return (
    <div className={`py-2 h-20  menubar ${sticky ? 'bgSticky' : 'bgNotSticky'}`}>
      <div className="container mx-auto  h-full">
        <div className="flex justify-between items-center h-full">
          <div>
            <Link to="/">
              <h1 className="text-2xl md:text-3xl font-medium text-black">BD Fashion</h1>
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
              )
              }
            </ul>
          </div>
        </div>
      </div>
      {<CartItems setCart={setCart} cart={cart} />}
    </div>
  );
};

export default Navbar;
