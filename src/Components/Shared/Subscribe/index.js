import React, { useState } from 'react';
import { requiredSuccessHandle } from '../../../helper/toastNotification';

const Subscribe = () => {
  // const [emptyEmail, setEmptyEmail] = useState(false);
  const [validEmail, setValidEmail] = useState(true);
  const [email, setEmail] = useState('');

  const handleEmail = (e) => {
    if (e === '') {
      // return setEmptyEmail(true);
    }
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    setValidEmail(re.test(e));
    if (validEmail) {
      setEmail(e);
    }
  };
  const handleClick = () => {
    // setEmptyEmail(false);
    setValidEmail(true);
  };
  const emailHandle = () => {
    if (email) {
      requiredSuccessHandle('Successfully Subscribe')
    }
    setEmail('')
  };
  return (
    <div className="py-12 bg-red-50">
     
      <div className="container flex justify-center text-center items-center h-full mx-auto">
        <div>
          <h5 className="text-black text-3xl font-medium">
            SUBSCRIBE TO OUR NEWSLETTER
          </h5>
          <p className="text-black text-medium font-normal py-2">
            Get the latest updates on new products and upcoming sales
          </p>
          <div className="flex rounded-xl bg-white mt-3 border-2 border-gray-900">
            <input
              type="text"
              onClick={handleClick}
              onBlur={(e) => handleEmail(e.target.value)}
              className="w-full outline-none focus:outline-none border-0 focus:ring-0 m-1"
              placeholder="Enter Your Email"
            />
            <button
              className="bg-blue-400 px-4 border-2 rounded-xl text-white uppercase 
            text-lg font-medium"
              onClick={emailHandle}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
