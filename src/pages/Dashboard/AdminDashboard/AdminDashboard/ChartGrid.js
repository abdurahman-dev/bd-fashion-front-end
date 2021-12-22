import React from 'react';
import New4Products from '../../../../Components/New4Products';
import BarChart from './BarChart';
import LineChart from './LineChart';
import NewUsers from './NewUsers';
import PieChart from './PieChart';

const ChartGrid = ({totalUsers}) => {
    return (
        <div className='mt-4 grid grid-cols-12 gap-3'>
          <div className="col-span-12 md:col-span-6 h-full  text-white"> 
          <LineChart />
          </div>
          <div className="col-span-12 md:col-span-6 h-full text-white">
            <BarChart/>
          </div>
          <div className="col-span-12 md:col-span-6 h-full  text-white">
            
            <PieChart/>
          </div>
          <div className="col-span-12 sm:col-span-6 md:col-span-3 h-full w-full">
          <NewUsers totalUsers={totalUsers}/>
          </div>
          <div className="col-span-12 sm:col-span-6 md:col-span-3 h-full w-full">
            <New4Products/>
          </div>
      </div>
    );
};

export default ChartGrid;