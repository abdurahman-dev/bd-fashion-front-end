import React, { useState,useEffect } from 'react';
import Sidebar from './Sidebar';
import { BsXLg, BsJustifyLeft } from 'react-icons/bs';
import './style.css';

const DashboardLayout = ({children}) => {
  const [sidebar, setSidebar] = useState(true);
  useEffect(()=>{
    setSidebar(false)
  },[])
  return (
    <div className=" h-screen">
      <div className="h-full relative">
        {sidebar && (
          <div className={`h-full sidebar`}>
            <Sidebar onClick={() => setSidebar(false)} />
          </div>
        )}
        <div
          style={{ flex: 1 }}
          className={`h-full bg-indigo-700 ${sidebar && 'toggleSidebar'}`}
        >
          <div className="bg-green-600 flex justify-between items-center px-4 h-16">
            <div>
              <button onClick={() => setSidebar(!sidebar)}>
                {sidebar ? (
                  <BsXLg style={{ color: '#fff', fontSize: '1.5rem' }} />
                ) : (
                  <BsJustifyLeft style={{ color: '#fff', fontSize: '2rem' }} />
                )}
              </button>
            </div>
            <div>avater</div>
          </div>
          <div
            className="overflow-y-auto w-full p-2"
            style={{ height: '80%' }}
          >
           {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
