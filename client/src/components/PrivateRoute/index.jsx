import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';
import { fetchAllPersonnel } from '../../features/personnel/personnelSlice';
import { loggedInUserCheck } from '../../features/auth/authSlice';

const PrivateRoute = ({children, ...rest}) => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    // Logged In User Check
    if (!user) {
      dispatch(loggedInUserCheck());
    }

    // Fetch Personnel If Logged In
    if (user) {
      dispatch(fetchAllPersonnel());
    }
  }, [user, dispatch])

  return (
    user ? <Outlet /> : <Navigate to='/login' />
  )
}

export default PrivateRoute;