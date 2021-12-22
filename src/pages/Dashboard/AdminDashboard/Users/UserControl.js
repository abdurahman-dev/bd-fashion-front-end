import React, { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
import ModalHeader from 'react-bootstrap/esm/ModalHeader';
import { useDispatch, useSelector } from 'react-redux';
import axiosInstance from '../../../../helper/axios';
import { requiredErrorHandle, requiredSuccessHandle } from '../../../../helper/toastNotification';
import { authDelete } from '../../../../Redux/Actions/auth.action';
import ConformDelete from '../../../../Ul/ConformDelete';
import MyTable from '../../../../Ul/TableList/Table';
import DashboardLayout from '../../DashboardLayout';

const UserControl = () => {
  const [totalUser, setTotalUser] = useState([]);
  const [viewUser, setViewUser] = useState({});
  const [deleteUserInfo, setDeleteUserInfo] = useState('');
  const [isVisible, setVisible] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const { users } = useSelector((state) => state.adminInitialData);

  const dispatch = useDispatch();
  useEffect(() => {
    if (users) {
      setTotalUser(users);
    }
  }, [users]);
  const handleDelete = (id) => {
    setVisible(true);
    setIsDelete(true)
    setDeleteUserInfo(id);
  };
  const conformDlt = () => {
    dispatch(authDelete(deleteUserInfo));
    setVisible(false);
    requiredSuccessHandle('User Deleted Successfully');
  };
  const itemView = (user) => {
    setVisible(true);
    setIsDelete(false);
    setViewUser(user);
  };
// eslint-disable-next-line react-hooks/exhaustive-deps
const handleUseInfoChange=(info,id)=>{
  const updateUser=async()=>{
    try{
      const res= await axiosInstance.put(`/admin/user/${id}`,info)
      if(res.status===200){
         if(res.data.success){
            requiredSuccessHandle('Updated User Successfully')
            setVisible(false);
            setTotalUser(res.data.users);
         }
      }
    }catch(err){
      console.log(err);
      requiredErrorHandle('Error! Try again after some times')
    }
  }
  updateUser()
}
// console.log(totalUser);
  return (
    <DashboardLayout>
      <div className="mb-4">
        <p className="text-5xl font-bold">Users</p>
      </div>
      <div>
        <MyTable
          data={totalUser}
          itemView={itemView}
          handleDelete={handleDelete}
        />
      </div>
      <Modal show={isVisible} onHide={() => setVisible(false)} centered>
        {isDelete ? (
          <ConformDelete
            onCancel={() => setVisible(false)}
            conformDlt={conformDlt}
          />
        ) : (
          <UpdateUser viewUser={viewUser} handleUseInfoChange={handleUseInfoChange}/>
        )}
      </Modal>
    </DashboardLayout>
  );
};

export default UserControl;

const UpdateUser = ({ viewUser,handleUseInfoChange }) => {
  const [name, setName] = useState(viewUser.name);
  const [email, setEmail] = useState(viewUser.email);
  const [role, setRole] = useState(viewUser.role);
  const handleSave = () => {
    if(3>name.length){
     return requiredErrorHandle('Name must be upper then 3 cha.')
    }
      handleUseInfoChange({name,email,role},viewUser._id)
  };
  return (
    <div className="p-3">
      <div>
        <ModalHeader closeButton>
          <h3 className="text-3xl font-semibold">User Info</h3>
        </ModalHeader>
        <div className="grid gap-2 grid-cols-3 mt-3">
          <input
            type="text"
            className="col-span-3 md:col-span-2 outline-none border-blue-600 h-10 rounded-lg border px-4  focus:ring-1 focus:shadow-lg focus:ring-blue-600"
            placeholder="Name"
            defaultValue={name}
            onChange={(e)=>{setName(e.target.value)}}
          />
        </div>
        <div>
          <input
            type="text"
            className="block outline-none border-blue-600 w-full h-10 rounded-lg border px-4 my-4 focus:ring-1 focus:shadow-lg focus:ring-blue-600"
            placeholder="Email"
            defaultValue={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='grid gap-3 grid-cols-3 '>
          <img src={viewUser.avatar?.url} alt='user avatar' className='w-24 h-24 rounded-md col-span-1' />
         <select defaultValue={role} onChange={(e)=>{
           setRole(e.target.value)
         }} className='rounded-md col-span-1 self-center h-11'>
           <option value="user">User</option>
           <option value="admin">Admin</option>
         </select>
        </div>
        <div className='mt-2 '>
          <button className='bg-blue-500 py-2 text-center rounded-md text-white w-full' onClick={handleSave}>Save Change</button>
        </div>
      </div>
    </div>
  );
};
