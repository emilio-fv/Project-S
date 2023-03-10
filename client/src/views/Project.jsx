import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import MainDisplay from '../components/MainDisplay';
import Box from '@mui/material/Box';
import TicketDisplay from '../components/TicketDisplay';
import ProjectDetails from '../components/ProjectDetails';
import SecondaryDisplay from '../components/SecondaryDisplay';
import NewTicketForm from '../components/NewTicketForm';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Project = (props) => {
  const { projectId } = useParams()
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const project = useSelector((state) => state.projects.projects.find(project => project._id === projectId));
  const currentUser = useSelector((state) => state.auth.user);
  const selectedTicket = useSelector((state) => state.tickets.selected);

  return (
    <Box sx={{ width: '100%',  height: '100vh', maxHeight: '100vh', display: 'flex' }}>
      <Sidebar />
      <Box sx={{ flex: 4, display: 'flex', flexDirection: 'column' }}>
        <MainDisplay
          displayTitle={project.name}
          project={project}
          icons={project.projectManager._id === currentUser._id ? 'projectManager' : false } 
          buttonText={"New Ticket"} 
          clickAction={handleOpen} 
          display={<ProjectDetails />}
        />
        <SecondaryDisplay displayTitle={""} display={<TicketDisplay selectedTicket={selectedTicket} projectId={projectId} />}/>
      </Box>
      <NewTicketForm open={open} handleClose={handleClose} />
    </Box>
  )
}

export default Project ;
