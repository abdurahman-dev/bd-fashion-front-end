import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
// import axios from '../../../helper/axios';

import DashboardLayout from '../DashboardLayout';
import Table from 'react-bootstrap/Table';
import OrderViewModal from './OrderViewModal';
import { axiosApi } from '../../../helper/urlConfig';
const axios = require('axios');

const UserDashboard = () => {
  const [orders, setOrders] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [viewOrder, setViewOrders] = useState({});
  useEffect(() => {
    async function fetchData() {
      const token = localStorage.getItem('token');
      const order = await axios.get('/orders/me', {
        baseURL: axiosApi,
        headers: {
          'X-Custom-Header': 'foobar',
          Authorization: token || '',
        },
        withCredentials: true,
      });
      setOrders(order.data.order.reverse());
    }
    fetchData();
  }, []);
  return (
    <DashboardLayout>
      <div className="mb-3 ">
      {orders.length > 0 && <h2 className="text-3xl font-semibold capitalize">Your Recent {orders.length>3 ? '3' : orders.length} {orders.length>1? 'Orders':'Order'}</h2>}
       
        {orders.length > 0 && (
          <div className="flex flex-col md:flex-row justify-between gap-3 mt-2 ">
            {orders
              .slice(0,3)
              .map((item, i) => (
                <div key={i} className="bg-blue-300 w-full p-3 rounded-md ">
                  <div className="flex justify-between  items-center ">
                    <h4 className="text-2xl font-semibold">
                      {item.orderItems.length}{' '}
                      {item.orderItems.length > 1 ? 'Items' : 'Item'}
                    </h4>
                    <div className={`text-gray-50 px-2 py-1 font-medium rounded ${item.orderStatus==='Delivered' ? 'bg-green-500 border-red-500' : 'bg-red-500 border-green-500'}`}>
                      {item.orderStatus}
                    </div>
                  </div>
                  <h4 className="text-2xl font-semibold">
                    Total Price : {'$'}
                    {item.totalPrice}
                  </h4>
                  <h4 className="text-md font-semibold">
                    Payment At:{' '}
                    {new Date(item.paidAt).toLocaleString().split(',')[0]}
                  </h4>
                  <p className="text-md font-semibold">
                    phone : {item.shippingInfo.PhoneNumber}
                  </p>
                </div>
              ))}
          </div>
        )}
      </div>
      {orders.length > 0 ? <div className=" ">
        <h3 className="text-2xl font-medium ">Your Order  history</h3>
        <div className="mt-3 ">
          <div className="flex justify-center">
            <Table
              hover
              responsive="sm"
              size="xl"
              className="border text-center"
            >
              <thead>
                <tr>
                  <th>#Order</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Total</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((item, i) => (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>
                      {' '}
                      {new Date(item.paidAt).toLocaleString().split(',')[0]}
                    </td>
                    <td> {item.orderStatus}</td>
                    <td> {item.totalPrice}</td>
                    <td>
                      {' '}
                      <button
                        onClick={() => {
                          setViewOrders(item);
                          setModalShow(true);
                        }}
                        className="bg-blue-400 py-1 px-2 text-gray-50 rounded-md"
                      >
                        view
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </div> : <h2>
        There are no order 
      </h2> }
      
      <OrderViewModal
        show={modalShow}
        order={viewOrder}
        onHide={() => setModalShow(false)}
      />
    </DashboardLayout>
  );
};

export default UserDashboard;


