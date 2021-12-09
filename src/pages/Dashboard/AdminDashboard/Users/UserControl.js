import React, { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { requiredSuccessHandle } from '../../../../helper/toastNotification';
import { authDelete } from '../../../../Redux/Actions/auth.action';
import ConformDelete from '../../../../Ul/ConformDelete';
import MyTable from '../../../../Ul/TableList/Table';
import DashboardLayout from '../../DashboardLayout';

const UserControl = () => {
  const [totalUser, setTotalUser] = useState([]);
  const [deleteUserInfo, setDeleteUserInfo] = useState('');
  const [isVisible, setVisible] = useState(false);
  const { users } = useSelector((state) => state.adminInitialData);

  const dispatch=useDispatch()

  useEffect(() => {
    if (users) {
      setTotalUser(users);
    }
  }, [users]);

  const handleDelete = (id) => {
    setVisible(true);
    setDeleteUserInfo(id)
  };
  const conformDlt=()=>{
    dispatch(authDelete(deleteUserInfo))
    setVisible(false);
    requiredSuccessHandle('User Deleted Successfully')
  }

  return (
    <DashboardLayout>
      <div className="mb-4">
        <p className="text-5xl font-bold">Users</p>
      </div>
      <div>
        <MyTable data={totalUser} handleDelete={handleDelete} />
      </div>
      <Modal show={isVisible} onHide={() => setVisible(false)} centered>
        <ConformDelete onCancel={() => setVisible(false)} conformDlt={conformDlt}/>
      </Modal>
    </DashboardLayout>
  );
};

export default UserControl;


