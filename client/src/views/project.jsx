import React from 'react';
import Sidebar from '../components/Sidebar';
import MainDisplay from '../components/MainDisplay';
import Box from '@mui/material/Box';
import TicketDisplay from '../components/TicketDisplay';
import ProjectDetails from '../components/ProjectDetails';
import SecondaryDisplay from '../components/SecondaryDisplay';

const Project = (props) => {
  const { projectId } = props;

  console.log(projectId);
  // TODO: Make API call to get specific project's data
  
  return (
    <Box sx={{ width: '100%',  height: '100vh', maxHeight: '100vh', display: 'flex' }}>
      <Sidebar />
      <Box sx={{ flex: 4, display: 'flex', flexDirection: 'column' }}>
        <MainDisplay displayTitle={"Sample Project"} buttonText={"Add Ticket"} display={<ProjectDetails />}/>
        <SecondaryDisplay displayTitle={""} display={<TicketDisplay />}/>
      </Box>
        
    </Box>
  )
}

export default Project ;