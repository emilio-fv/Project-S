import React from 'react';
import Sidebar from '../components/Sidebar';
import MainDisplay from '../components/MainDisplay';
import SecondaryDisplay from '../components/SecondaryDisplay';
import Box from '@mui/material/Box';

const Dashboard = (props) => {
	return(
    	<>
			<Box sx={{ width: '100%', height: '100vh', display: 'flex', border: '2px solid red' }}>
        		<Sidebar />
				<Box sx={{ flex: 4, display: 'flex', flexDirection: 'column' }}>
					<MainDisplay />
        			<SecondaryDisplay />
				</Box>
			</Box>
    	</>
  	)
}

export default Dashboard ;