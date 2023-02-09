import React from 'react';
import Box from '@mui/material/Box';
import Sidebar from '../components/Sidebar';
import MainDisplay from '../components/MainDisplay';
import AdminTable from '../components/AdminTable';

const Admin = (props) => {
  return (
    <Box sx={{ width: '100%',  height: '100vh', maxHeight: '100vh', display: 'flex' }}>
      <Sidebar />
      <Box sx={{ flex: 4, display: 'flex', flexDirection: 'column' }}>
        <MainDisplay displayTitle={"Admin"} display={ <AdminTable /> }/>
      </Box>
    </Box>
  )
}

export default Admin;