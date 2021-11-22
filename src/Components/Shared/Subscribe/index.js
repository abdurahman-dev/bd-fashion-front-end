import React, { useState } from 'react';

const Subscribe = () => {
  const [emptyEmail, setEmptyEmail] = useState(false);
  const [validEmail, setValidEmail] = useState(true);
  const [email, setEmail] = useState('');

  const handleEmail = (e) => {
    if (e === '') {
      return setEmptyEmail(true);
    }
    const re =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    setValidEmail(re.test(e));
    if(validEmail){
        setEmail(e)
    }
  };
  const handleClick = () => {
    setEmptyEmail(false);
    setValidEmail(true);
  };
  const emailHandle=()=>{
 
      if(email) {
        console.log('Successfully Subscribe')
      }
  }
  return (
    <div className="py-12 bg-red-50">
      <div className="container flex justify-center text-center items-center h-full mx-auto">
        <div>
          <h5 className='text-black text-3xl font-medium'>SUBSCRIBE TO OUR NEWSLETTER</h5>
          <p className='text-black text-medium font-normal py-2'>Get the latest updates on new products and upcoming sales</p>
          <div className="flex rounded-xl bg-white mt-3 border-2 border-gray-900">
            <input
              type="text"
              onClick={handleClick}
              onBlur={(e) => handleEmail(e.target.value)}
              className="bg-white text-black  focus:ring-blue-600 w-full pl-7 pr-5 sm:text-sm outline-none h-10 rounded-b-xl rounded-l-xl"
              placeholder="Enter Your Email"
            />
            <button
            className='bg-blue-400 px-4 border-2 rounded-xl text-white uppercase 
            text-lg font-medium'
              onClick={emailHandle }
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
