import React,{ useEffect,useState }from 'react';
import DashboardLayout from '../../DashboardLayout';
import DashboardGrid from './DashboardGrid';
import { Link } from 'react-router-dom';
import ChartGrid from './ChartGrid';
import { useSelector } from 'react-redux';

const HomeAdmin = () => {
  const[totalUsers,setTotalUsers]=useState([])
    const[totalOrders,setTotalOrders]=useState([])
    const[totalProducts,setTotalProducts]=useState([])
  
    const {products,users,orders}=useSelector(state=>state.adminInitialData)
    useEffect(()=>{
        setTotalUsers(users)
        setTotalOrders(orders)
        setTotalProducts(products)
    },[orders, products, users])
   
  return (
    <DashboardLayout>
      <div className='mb-2'>
        <h2 className='text-3xl font-bold '>BD Fashion Dashboard</h2>
        <p className="text-lg text-gray-400"> <Link to={'/'}>Home</Link> {">"} Dashboard </p>
      </div>
      <DashboardGrid totalUsers={totalUsers} totalOrders={totalOrders} totalProducts={totalProducts}/>
      <ChartGrid totalUsers={totalUsers}/>
    </DashboardLayout>
  );
};

export default HomeAdmin;
