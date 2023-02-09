import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import MainDisplay from '../components/MainDisplay';
import Box from '@mui/material/Box';
import TicketDisplay from '../components/TicketDisplay';
import ProjectDetails from '../components/ProjectDetails';
import SecondaryDisplay from '../components/SecondaryDisplay';
import NewTicketForm from '../components/NewTicketForm';

const Project = (props) => {
  const [personName, setPersonName] = useState([]);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      typeof value === 'string' ? value.split(',') : value
    );
  }
  const handleSubmit = (event) => {
    console.log("TODO");
    handleClose();
  }

  return (
    <Box sx={{ width: '100%',  height: '100vh', maxHeight: '100vh', display: 'flex' }}>
      <Sidebar />
      <Box sx={{ flex: 4, display: 'flex', flexDirection: 'column' }}>
        <MainDisplay displayTitle={"Sample Project"} buttonText={"New Ticket"} clickAction={handleOpen} display={<ProjectDetails />}/>
        <SecondaryDisplay displayTitle={""} display={<TicketDisplay />}/>
      </Box>
      <NewTicketForm open={open} handleClose={handleClose} personName={personName} handleChange={handleChange} handleSubmit={handleSubmit} />
    </Box>
  )
}

export default Project ;