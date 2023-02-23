import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import MainDisplay from '../components/MainDisplay';
import SecondaryDisplay from '../components/SecondaryDisplay';
import TicketsOverview from '../components/TicketsOverview';
import ProjectsTable from '../components/ProjectsTable';
import Box from '@mui/material/Box';
import StyledModal from '../components/NewProjectForm';
import { useDispatch, useSelector } from 'react-redux';
import { createProject, fetchManyProjects, reset } from '../features/projects/projectsSlice';

const Dashboard = (props) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const personnel = useSelector((state) => state.personnel.personnel);
  const currentUser = useSelector((state) => state.auth.user);
  const { status: projectStatus, error } = useSelector((state) => state.projects);
  const [errorMessages, setErrorMessages] = useState({});
  const [team, setTeam] = useState([]);
  
  // Project Form Data
  const [projectFormData, setProjectFormData] = useState({
    name: '',
    description: '',
    projectManager: { userId: currentUser._id}
  })

  useEffect(() => {
    const ids = {
      ids: currentUser.projects
    }

    if (projectStatus === 'idle') {
      dispatch(fetchManyProjects(ids))
    } 

    if (projectStatus === 'failed') {
      console.log(error)
      setErrorMessages(error);
    }

    if (projectStatus === 'succeeded') {
      setProjectFormData({
        name: '',
        description: '',
        projectManager: { userId: currentUser._id}
      });
      setTeam([]);
      handleClose();
    }
  }, [projectStatus])

  // Form Changes
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

  // Form Submit
  const handleSubmit = (event) => {
    event.preventDefault();

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
