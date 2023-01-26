import React from 'react';
import Sidebar from '../components/Sidebar';
import MainDisplay from '../components/MainDisplay';
import TicketOverviewDisplay from '../components/TicketOverviewDisplay';
import ProjectsTable from '../components/ProjectsTable';
import Box from '@mui/material/Box';

const Dashboard = (props) => {
	return(
    	<>
			<Box sx={{ width: '100%',  height: '100vh', maxHeight: '100vh', display: 'flex' }}>
        		<Sidebar />
				<Box sx={{ flex: 4, display: 'flex', flexDirection: 'column' }}>
					{/* displayTable={<ProjectsTable />}  */}
					<MainDisplay displayTitle={"Projects"} buttonText={"Add Project"} displayTable={< ProjectsTable />}/>
        			<TicketOverviewDisplay />
				</Box>
			</Box>
    	</>
  	)
}

export default Dashboard ;