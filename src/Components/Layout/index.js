import React from 'react';
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar';
import Subscribe from '../Shared/Subscribe';

const Layout = ({ pageTitle, children }) => {
  if(pageTitle){
    document.title=`${pageTitle } - BD Fashion ` 
  }else{
    document.title="BD Fashion"
  }
 
  return (
    <div>
      <Navbar/>
      <div  className='pt-20'> {children}</div>
     
      <Subscribe/>
      <Footer/>
    </div>
  );
};

export default Layout;
