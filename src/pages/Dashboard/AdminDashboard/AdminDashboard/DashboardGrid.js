import React from 'react';

import { BsCurrencyDollar,BsBagCheckFill ,BsFillPeopleFill,BsShopWindow} from "react-icons/bs";


const DashboardGrid = ({totalUsers,totalOrders,totalProducts}) => {
  let totalAmount=0
  totalOrders.forEach(item=> {
    totalAmount +=item.totalPrice
});
    return(
        <div className="grid grid-cols-12  gap-3">
        <div className="col-span-12 md:col-span-3 min-h-24 flex justify-between items-center p-4 w-full bg-purple-400 rounded-md ">
          <div>
            <h2 className="text-3xl md:text-xl lg:text-3xl font-semibold">
             Total Amount
            </h2>
            <p className='text-white text-2xl font-medium'> 💲 {totalAmount} </p>
          </div>
          <div>
              <BsCurrencyDollar className='w-full h-full text-4xl p-3 font-extrabold text-purple-500 bg-gray-50 rounded-full'/>
          </div>
        </div>
        <div className="col-span-12 md:col-span-3 min-h-24 flex justify-between items-center p-4 w-full bg-yellow-400 rounded-md">
          <div>
            <h2 className="text-3xl md:text-xl lg:text-3xl font-semibold">
              Total Orders
            </h2>
            <p className='text-white text-2xl font-medium'> 👜 {totalOrders.length}</p>
          </div>
          <div>
          <BsBagCheckFill className='w-full h-full text-4xl p-3 font-bold text-yellow-500 bg-gray-50 rounded-full'/>
          </div>
        </div>
        <div className="col-span-12 md:col-span-3 min-h-24 flex justify-between items-center p-4 w-full rounded-md bg-blue-500">
          <div>
            <h2 className="text-3xl md:text-xl lg:text-3xl font-semibold">
              Total User
            </h2>
            <p className='text-white text-2xl font-medium'>👪 {totalUsers.length}</p>
          </div>
          <div>
          <BsFillPeopleFill className='w-full h-full text-4xl p-3 font-bold text-blue-600 bg-gray-50 rounded-full'/>
          </div>
        </div>
        <div className="col-span-12 md:col-span-3 min-h-24 flex justify-between items-center p-4 w-full bg-green-500 rounded-md">
          <div>
            <h2 className="text-3xl md:text-xl lg:text-3xl font-semibold">
              Total Products
            </h2>
            <p className='text-white text-2xl font-medium'>🏪 {totalProducts.length}</p>
          </div>
          <div>
              <BsShopWindow className='w-full h-full text-3xl p-3 font-bold text-green-600 bg-gray-50 rounded-full'/>
          </div>
        </div>
      </div>
    )
};

export default DashboardGrid;