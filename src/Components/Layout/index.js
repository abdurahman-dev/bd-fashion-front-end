import React from 'react';

const Layout = ({ pageTitle, children }) => {
  if(pageTitle){
    document.title=`${pageTitle } - BD Fashion ` 
  }else{
    document.title="BD Fashion"
  }
 
  return (
    <div>
      {children}
      <footer>footer</footer>
    </div>
  );
};

export default Layout;
