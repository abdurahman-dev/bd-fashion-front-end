import React from 'react';

const ProductModal = ({ isVisible, setVisible, children }) => {
  const hide = () => {
    setVisible(false);
  };
  return (
    <div className="">
      {isVisible && (
        <div
          className="bg-gray-400 opacity-50 absolute top-0 left-0 h-full w-full mx-auto"
          onClick={hide}
        ></div>
      )}
      {isVisible && (
        <div className="w-full h-screen flex justify-center content-center">
          <div className="bg-white top-16 absolute h-5/6 overflow-auto w-4/5 md:w-3/5 rounded-lg">
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductModal;
