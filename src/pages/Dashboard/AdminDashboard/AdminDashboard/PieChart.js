import React, { useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
    const [product,setProduct]=useState([])
    const {products}= useSelector(state=>state.adminInitialData)
    useEffect(()=>{
        setProduct(products)
    },[products])
    let stockOut=0
    let stock=0

    product.forEach(item => {
            if(0>=item.productStock) {
                stockOut+=1
            }else{
                stock+=1
            }
    });
  const data = {
    labels: ['Product Stock', 'Product Stock out'],
    datasets: [
      {
        label: 'votes',
        data: [stock, stockOut],
        backgroundColor: ['rgba(54, 162, 235, 0.2)','rgba(255, 0,0, 0.3)'],
        borderColor: ['rgba(54, 162, 235, 1)','rgba(255, 99, 132, 1)'],
        borderWidth: 2,
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart for Products',
      },
    },
  };
  return (
    <div className="">
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;
