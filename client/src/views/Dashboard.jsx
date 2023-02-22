import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import MainDisplay from '../components/MainDisplay';
import SecondaryDisplay from '../components/SecondaryDisplay';
import TicketsOverview from '../components/TicketsOverview';
import ProjectsTable from '../components/ProjectsTable';
import Box from '@mui/material/Box';
import StyledModal from '../components/NewProjectForm';

const Dashboard = (props) => {
  const [projectFormData, setProjectFormData] = useState({
    name: '',
    description: '',
    projectManager: null,
    team: null,
  })

    const [personName, setPersonName] = useState([]);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleChange = (event) => {
      const { target: { value }, } = event;

      if (event.target.name === 'team') {
        setPersonName(typeof value === 'string' ? value.split(',') : value);
      } else {
        setProjectFormData({
          ...projectFormData,
          [event.target.name]: value
        })
      }
    }

    const handleSubmit = (event) => {
      console.log("TODO handle submit new project form");
      console.log(personName);
      console.log(projectFormData);
      handleClose();
    }

    return (
        <Box sx={{ width: '100%',  height: '100vh', maxHeight: '100vh', display: 'flex' }}>
            <Sidebar />
            <Box sx={{ flex: 4, display: 'flex', flexDirection: 'column' }}>
                <MainDisplay displayTitle={"Projects"} buttonText={"Add Project"} clickAction={handleOpen} display={<ProjectsTable />} />
                <SecondaryDisplay displayTitle={"Tickets"} display={<TicketsOverview />} />
            </Box>
            <StyledModal open={open} handleClose={handleClose} personName={personName} handleChange={handleChange} handleSubmit={handleSubmit} />
        </Box>
    )
}

export default Dashboard ;
