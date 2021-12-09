import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import { BsJustifyLeft } from 'react-icons/bs';
import './style.css';
import { useDispatch, useSelector } from 'react-redux';
import { getInitialData } from '../../Redux/Actions/Admin/initialData.action';

const DashboardLayout = ({ children }) => {
  const [loggedUserInfo, setLoggedUserInfo] = useState('');
  const [sidebar, setSidebar] = useState(false);
  const dispatch= useDispatch()
  const authLogin = useSelector((state) => state.authLoginReducer);

  useEffect(()=>{
    if(authLogin.user.role==='admin'){
      dispatch(getInitialData())
    }
  },[authLogin.user, authLogin.user.role, dispatch])
  useEffect(() => {
    setSidebar(false);
    if (authLogin.isAuthenticated) {
      setLoggedUserInfo(authLogin.user.avatar?.url);
    }
  }, [authLogin.isAuthenticated, authLogin.user.avatar?.url]);
  
  return (
    <div className=" h-screen ">
      <div className="h-full">
        <div
          style={{ flex: 1 }}
          className={`h-full ${sidebar && 'toggleSidebar'}`}
        >
          <div className="bg-gray-500 flex justify-between items-center px-12 h-16">
            <div>
              <button onClick={() => setSidebar(!sidebar)}>
                <BsJustifyLeft style={{ color: '#fff', fontSize: '2rem' }} />
              </button>
            </div>
            <div>
              <img
               src={loggedUserInfo}
                className="rounded-full w-10 h-10" alt="user img"
              />
            </div>
          </div>
          <div
            className="overflow-y-auto w-full p-12 "
            style={{ height: '91%' }}
          >
            {children}
          </div>
        </div>
      </div>
      {<Sidebar sidebar={sidebar} onClick={() => setSidebar(false)} />}
    </div>
  );
};

export default DashboardLayout;
