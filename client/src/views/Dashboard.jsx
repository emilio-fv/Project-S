import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import MainDisplay from '../components/MainDisplay';
import SecondaryDisplay from '../components/SecondaryDisplay';
import TicketsOverview from '../components/TicketsOverview';
import ProjectsTable from '../components/ProjectsTable';
import Box from '@mui/material/Box';
import StyledModal from '../components/NewProjectForm';
import { useDispatch, useSelector } from 'react-redux';
import { createProject } from '../features/projects/projectsSlice';
import { resetSelected, getManyTickets } from '../features/tickets/ticketsSlice';

const Dashboard = (props) => {
  // Modal 
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  // Store 
  const dispatch = useDispatch();
  const personnel = useSelector((state) => state.personnel.personnel);
  const currentUser = useSelector((state) => state.auth.user);
  const { status: projectsStatus, error } = useSelector((state) => state.projects);

  // Project Form Data
  const [projectFormData, setProjectFormData] = useState({
    name: '',
    description: '',
    projectManager: currentUser._id
  })
  const [team, setTeam] = useState([]);
  const [errorMessages, setErrorMessages] = useState({});

  // Fetch tickets, Reset Selected Ticket
  useEffect(() => {
    dispatch(getManyTickets({ ids: currentUser.tickets}));
    dispatch(resetSelected());
  }, [])

  // Form Error Messages, Reset Form Data
  useEffect(() => {
    if (projectsStatus === 'failed') {
      setErrorMessages(error);
    }

    if (projectsStatus === 'succeeded') {
      setProjectFormData({
        name: '',
        description: '',
        projectManager: currentUser._id
      });
      setTeam([]);
      handleClose();
    }
  }, [projectsStatus, currentUser, error])


  // New Project Form Changes
  const handleChange = (event) => {
    const { target: { name } } = event;
    const { target: { value } } = event;

    if (name === 'team') {
      setTeam(typeof value === 'string' ? value.split(',') : value);
    } else {
        setProjectFormData({
          ...projectFormData,
          [name]: value
        })
    }
  }

  // New Project Form Submit
  const handleSubmit = (event) => {
    event.preventDefault();

    // Create Project
    dispatch(createProject({
      ...projectFormData,
      team: team
    }));
  }

  return (
    <Box sx={{ width: '100%',  height: '100vh', maxHeight: '100vh', display: 'flex' }}>
      <Sidebar /> 
      <Box sx={{ flex: 4, display: 'flex', flexDirection: 'column' }}>
        <MainDisplay displayTitle={"Projects"} buttonText={"Add Project"} clickAction={handleOpen} display={<ProjectsTable />} />
        <SecondaryDisplay displayTitle={"Tickets"} display={<TicketsOverview />} />
      </Box>
      <StyledModal 
        open={open} 
        handleClose={handleClose} 
        formData={projectFormData} 
        personName={team}
        handleChange={handleChange} 
        handleSubmit={handleSubmit} 
        personnel={personnel.filter(person => person._id !== currentUser._id)} 
        errorMessages={errorMessages} 
      />
    </Box>
  )
}

export default Dashboard ;
