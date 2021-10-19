import React, { useState } from 'react';
import img from '../../images/people-carrying-shopping-bags-collection_52683-15820.jpg';
import Navbar from '../Shared/Navbar';

const LogIn = () => {
  const[reg,setReg]=useState(false)

const handleReg=()=>{
  console.log('reg');
}
const handleLog=()=>{
  console.log('log');
}
  return (
    <div>
      <Navbar/>
      <div className="py-4 md:py-28 bg-blue-200 h-screen">
      <div className="container mx-auto ">
        <div className=" h-full justify-center items-center flex  ">
          <div
            className="flex justify-between bg-gray-100 rounded-md w-full md:w-4/5 shadow-xl"
            
          >
            <div className=" h-full w-full hidden md:block">
              <img src={img} alt="" className="object-cover h-full w-full rounded" />
            </div>
            <div className="mx-auto pl-4 flex items-center w-full">
              <div
                className=""
                style={{ minHeight: '90%', minWidth: '85%' }}
              >
                <div>
                  <h4 className="text-3xl text-blue-600  uppercase font-medium">
                    Welcome to BD Fashion{' '}
                  </h4>
                  <p className="text-2xl mt-3 font-normal">Ship Smart Today</p>
                </div>
                <div className="mt-4">
                  {
                    reg && <div className="grid gap-2 grid-cols-2">
                    <input
                      type="text"
                      className="col-span-2 md:col-span-1 outline-none border-blue-600 h-10 rounded-lg border px-4  focus:ring-1 focus:shadow-lg focus:ring-blue-600"
                      placeholder="First Name"
                    />
                    <input
                      type="text"
                      className="col-span-2 md:col-span-1 outline-none border-blue-600 h-10 rounded-lg border px-4  focus:ring-1 focus:shadow-lg focus:ring-blue-600"
                      placeholder="Last Name"
                    />
                  </div>
                  }
                  <input
                    type="text"
                    className="block outline-none border-blue-600 w-full h-10 rounded-lg border px-4 my-4 focus:ring-1 focus:shadow-lg focus:ring-blue-600"
                    placeholder="Email"
                  />
                  <input
                    type="text"
                    className="block outline-none border-blue-600 w-full  h-10 rounded-lg border px-4 my-4 focus:ring-1 focus:shadow-lg focus:ring-blue-600"
                    placeholder="PassWord"
                  />
                  <button onClick={()=>setReg(!reg)} className='pb-4 text-blue-600'>{reg ? 'Login': 'New Customer?'}</button>
                  <button className='block w-full text-white bg-blue-600 px-12 py-2 rounded-md' onClick={reg ? handleReg : handleLog}>{reg ? 'Registration': 'Login'}</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default LogIn;

