import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getInitialData } from '../../../Redux/Actions/Admin/initialData.action';
import DashboardLayout from '../DashboardLayout';

const HomeAdmin = () => {
    const dispatch = useDispatch();
    return (
        <DashboardLayout>
        admin home
    </DashboardLayout>
    );
};

export default HomeAdmin;