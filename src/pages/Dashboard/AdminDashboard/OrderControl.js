import React, { useEffect, useState } from 'react';
import DashboardLayout from '../DashboardLayout';
import Table from 'react-bootstrap/Table';
import axiosInstance from '../../../helper/axios';
import { BsFillTrashFill,BsFillEyeFill} from 'react-icons/bs';
import {
  requiredErrorHandle,
  requiredSuccessHandle,
} from '../../../helper/toastNotification';
import OrderViewModal from '../UserDashboard/OrderViewModal';
import { Modal } from 'react-bootstrap';
import ConformDelete from '../../../Ul/ConformDelete';

const OrderControl = () => {
  const [orders, setOrders] = useState([]);
  const [totalAmount, setTotalAmount] = useState(Number);
  const [totalOrders, setTotalOrders] = useState(Number);
  const [modalShow, setModalShow] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [productDltId, setProductDltId] = useState('');
  const [viewOrder, setViewOrders] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const res = await ordersFetch();
      const { totalOrders, orders, totalAmount } = res.data;
      setOrders(orders.reverse());
      setTotalAmount(totalAmount);
      setTotalOrders(totalOrders);
    };
    fetchData();
  }, []);

  const handleOrderUpdate = async (id, status) => {
    try {
      const result = await axiosInstance.put(`/admin/orders/update/${id}`, {
        status,
      });
      if (result.status === 200) {
        requiredSuccessHandle('Successfully Delivered');
        const res = await ordersFetch();
        const { totalOrders, orders, totalAmount } = res.data;
        setOrders(orders.reverse());
        setTotalAmount(totalAmount);
        setTotalOrders(totalOrders);
      }
    } catch (err) {
      requiredErrorHandle('This order already delivered');
    }
  };

  const conformDlt=()=>{
    console.log(productDltId);
    console.log('click');
   async function deleteOrder(){
    try{
      const res = await axiosInstance.get(`/admin/orders/delete/${productDltId}`);
    if(res.data.success){
      setOrders(orders.filter(item=>  item._id !== productDltId))
      setModalShow(false)
    }
    }catch(err){
      console.log(err);
    }
   }
   deleteOrder()
  }
  return (
    <DashboardLayout>
      <div className="flex gap-4">
        <div className="bg-blue-400 px-2 py-1 rounded-md text-white">
          <h3 className="text-2xl font-medium ">Total Order {orders.length>0 ?totalOrders : '0'}</h3>
        </div>
        <div className="bg-blue-400 px-2 py-1 rounded-md text-white">
          <h3 className="text-2xl font-medium ">
            Amount {'$'}
            {orders.length>0 ? totalAmount : '0'}
          </h3>
        </div>
      </div>
      {orders.length>0 ? <div className="mt-3 ">
        <div className="flex justify-center">
          <Table hover responsive="sm" size="xl" className="border text-center">
            <thead>
              <tr>
                <th>#Order</th>
                <th>Date</th>
                <th>Payment Date</th>
                <th>Total</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((item, i) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>
                    {' '}
                    {new Date(item.createdAt).toLocaleString().split(',')[0]}
                  </td>
                  <td>
                    {' '}
                    {new Date(item.paidAt).toLocaleString().split(',')[0]}
                  </td>
                  <td>
                    {'$'}
                    {item.totalPrice}
                  </td>
                  <td>
                    <select
                      defaultValue={item.orderStatus}
                      onChange={(e) => {
                        handleOrderUpdate(item._id, e.target.value);
                      }}
                      className={`rounded-lg text-white ${
                        item.orderStatus === 'Delivered'
                          ? 'bg-green-500 border-red-500'
                          : 'bg-red-500 border-green-500'
                      }`}
                    >
                      <option
                        className="bg-gray-50 border-0 outline-none text-gray-800"
                        value="Processing"
                      >
                        Processing
                      </option>
                      <option
                        className="bg-gray-50 border-0 outline-none text-gray-800"
                        value="Delivered"
                      >
                        Delivered
                      </option>
                    </select>
                  </td>
                  <td>
                    {' '}
                    <button
                      onClick={() => {
                        setViewOrders(item);
                        setModalShow(true);
                        setIsDelete(false)
                      }}
                      className=" py-1 mr-2 px-2 text-gray-50 rounded-md"
                    >
                     <BsFillEyeFill className="text-blue-500 text-3xl"/>
                    </button>
                    <button onClick={()=>{
                      setIsDelete(true)
                      setModalShow(true);
                      setProductDltId(item._id)
                    }} >
                    <BsFillTrashFill className="text-red-700 text-3xl" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div> : <div className='mt-3'>
        <h2 className='text-2xl font-semibold  capitalize'>There are no Orders</h2>
      </div> }
      
      {isDelete ? <OrderDeleteModal  show={modalShow}
        onHide={() => setModalShow(false)} conformDlt={conformDlt}/> : <OrderViewModal
        show={modalShow}
        order={viewOrder}
        onHide={() => setModalShow(false)}
        admin
      />}
      
    </DashboardLayout>
  );
};

export default OrderControl;

const OrderDeleteModal=({show,onHide,conformDlt})=>{
  return(<Modal  show={show}
    onHide={onHide} aria-labelledby="contained-modal-title-vcenter"
    centered>
      <ConformDelete
            onCancel={onHide}
            conformDlt={conformDlt}
          />
  </Modal>)
}

const ordersFetch = () => {
  const res = axiosInstance.get('/admin/orders');
  return res;
};
