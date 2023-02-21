import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';

const AdminRoute = ({children, ...rest}) => {
  const { user } = useSelector((state) => state.auth);

  return (
    user.admin ? <Outlet /> : <Navigate to='/dashboard' />
  )
}

export default AdminRoute;