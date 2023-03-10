import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';
import { store } from '../../store';
import { fetchAllPersonnel } from '../../features/personnel/personnelSlice';

const PrivateRoute = ({children, ...rest}) => {
  const { user } = useSelector((state) => state.auth);
  
  useEffect(() => {
    if (user) {
      store.dispatch(fetchAllPersonnel());
    }
  })

  return (
    user ? <Outlet /> : <Navigate to='/login' />
  )
}

export default PrivateRoute;