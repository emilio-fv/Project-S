import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import MainDisplay from '../components/MainDisplay';
import Box from '@mui/material/Box';
import TicketDisplay from '../components/TicketDisplay';
import ProjectDetails from '../components/ProjectDetails';
import SecondaryDisplay from '../components/SecondaryDisplay';
import NewTicketForm from '../components/NewTicketForm';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createTicket } from '../features/tickets/ticketsSlice';
import { fetchOneProject } from '../features/projects/projectsSlice';

const Project = (props) => {
  const { projectId } = useParams()

  // Modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  // Store
  const dispatch = useDispatch();
  const project = useSelector((state) => state.projects.projects.find(project => project._id === projectId));
  const currentUser = useSelector((state) => state.auth.user);
  const { selected: selectedTicket, status: ticketStatus, error } = useSelector((state) => state.tickets);

  // Ticket Form Data
  const [ticketFormData, setTicketFormData] = useState({
    ticketType: '',
    project: null,
    summary: '',
    description: '',
    priority: '',
    dueDate: null,
    assignedUser: null
  })
  const [errorMessages, setErrorMessages] = useState({});

  // Form Error Messages, Reset Form Data
  useEffect(() => {
    if (ticketStatus === 'failed') {
      console.log(error);
      setErrorMessages(error);
    }

    if (ticketStatus === 'succeeded') {
      dispatch(fetchOneProject(project._id))
      setTicketFormData({
        ticketType: '',
        project: '',
        summary: '',
        description: '',
        priority: '',
        dueDate: null,
        assignedUser: ''
      })
      handleClose();
    }
  }, [ticketStatus, error])

  // New Ticket Form Changes
  const handleChange = (event) => {
    // Set Ticket Data
    setTicketFormData({
      ...ticketFormData,
      [event.target.name]: event.target.value
    })
  }

  // Date Picker
  const handleDatePicker = (dueDate) => {
    const formattedDate = new Date(dueDate.$d);
    setTicketFormData({
      ...ticketFormData,
      dueDate: formattedDate
    })
  }

  // New Ticket Form Submit
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(ticketFormData);
    dispatch(createTicket(ticketFormData));
  }

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
        <SecondaryDisplay 
          displayTitle={""} 
          display={<TicketDisplay selectedTicket={selectedTicket} projectId={projectId} />}
        />
      </Box>
      <NewTicketForm 
        open={open} 
        handleClose={handleClose}
        ticketFormData={ticketFormData}
        handleChange={handleChange}
        handleDatePicker={handleDatePicker}
        handleSubmit={handleSubmit}
        errorMessages={errorMessages}
      />
    </Box>
  )
}

export default Project ;
