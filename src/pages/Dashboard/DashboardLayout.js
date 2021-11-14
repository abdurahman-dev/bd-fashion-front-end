import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import { BsJustifyLeft } from 'react-icons/bs';
import './style.css';

const DashboardLayout = ({ children }) => {
  const [sidebar, setSidebar] = useState(false);
  useEffect(() => {
    setSidebar(false)
  }, []);
  return (
    <div className=" h-screen">
      <div className="h-full">
        <div
          style={{ flex: 1 }}
          className={`h-full bg-white ${sidebar && 'toggleSidebar'}`}
        >
          <div className="bg-gray-500 flex justify-between items-center px-12 h-16">
          <div>
              <button onClick={() => setSidebar(!sidebar)}>
              <BsJustifyLeft style={{ color: '#fff', fontSize: '2rem' }} />
              </button>
            </div>
            <div>avatars</div>
          </div>
          <div className="overflow-y-auto w-full p-12" style={{ height: '80%' }}>
            {children}
          </div>
        </div>
      </div>
      {  
        <Sidebar sidebar={sidebar} onClick={() => setSidebar(false)}/>
      }
    </div>
  );
};

export default DashboardLayout;
