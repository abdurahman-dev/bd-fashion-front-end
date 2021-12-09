import React from 'react';

const NoProduct = () => {
    return (
        
        <div className="text-center bg-yellow-50 flex justify-center h-80">
          <div>
            <h2 className="text-3xl font-medium">No Products</h2>
            <lottie-player
              src="https://assets5.lottiefiles.com/packages/lf20_dr7bgtqy.json"
              speed="1"
              className=""
              loop
              autoplay
            ></lottie-player>
          </div>
        </div>
    );
};

export default NoProduct;