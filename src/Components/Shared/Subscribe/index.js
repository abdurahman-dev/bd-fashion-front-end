import React, { useState } from 'react';

const Subscribe = () => {
  const [emptyEmail, setEmptyEmail] = useState(false);
  const [validEmail, setValidEmail] = useState(true);
  const [email, setEmail] = useState('');

  const handleEmail = (e) => {
    if (e == '') {
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
    <div className="py-12 bg-gray-200 ">
      <div className="container flex justify-center text-center items-center h-full mx-auto">
        <div>
          <h5 className='text-black text-2xl font-medium'>SUBSCRIBE TO OUR NEWSLETTER</h5>
          <p className='text-black text-medium font-normal py-2'>Get the latest updates on new products and upcoming sales</p>

          {emptyEmail && <p className="text-red-700"> Enter Your Email</p>}
          {validEmail === false && (
            <p className="text-red-700"> Enter Your Valid Email</p>
          )}
          <div className="flex">
            <input
              type="text"
              onClick={handleClick}
              onBlur={(e) => handleEmail(e.target.value)}
              className="bg-white text-black inline-block focus:ring-blue-600 w-full pl-7 pr-5 sm:text-sm  rounded-lg h-8"
              placeholder="Enter Your Email"
            />
            <button
              className={`inline-block  ml-3 ${
                validEmail ? 'block' : 'hidden'
              }`}
              onClick={emailHandle }
            >
        
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
