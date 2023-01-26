import React from 'react';
import Sidebar from '../components/Sidebar';
import MainDisplay from '../components/MainDisplay';
import Box from '@mui/material/Box';
import TicketsDisplay from '../components/TicketsDisplay';
import ProjectOverview from '../components/ProjectOverview';

const Project = (props) => {
    
  return(
    <>
        <Box sx={{ width: '100%',  height: '100vh', maxHeight: '100vh', display: 'flex' }}>
            <Sidebar />
            <Box sx={{ flex: 4, display: 'flex', flexDirection: 'column' }}>
                <MainDisplay displayTitle={"Sample Project"} buttonText={"Add Ticket"} displayTable={<ProjectOverview />}/>
                <TicketsDisplay />
            </Box>
            
        </Box>
    </>
  )
}
export default Project ;

