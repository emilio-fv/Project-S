import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Sidebar from '../components/Sidebar';
import MainDisplay from '../components/MainDisplay';
import SecondaryDisplay from '../components/SecondaryDisplay';
import TicketsOverview from '../components/TicketsOverview';
import ProjectsTable from '../components/ProjectsTable';
import Box from '@mui/material/Box';
import StyledModal from '../components/NewProjectForm';

const Dashboard = (props) => {
    const [loggedInUser, setLoggedInUser] = useState({});
    const navigate = useNavigate();
    const [personName, setPersonName] = useState([]);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleChange = (event) => {
        const {
          target: { value },
        } = event;
        setPersonName(
          typeof value === 'string' ? value.split(',') : value,
        );
      };

    const handleSubmit = (event) => {
        console.log("TODO handle submit new project form");
        handleClose();
    }

    useEffect(() => {
      axios.get(`http://localhost:8000/api/users/loggedInCheck`, { withCredentials: true })
          .then( res => {
              console.log(res);
              setLoggedInUser(res.data);
          })
          .catch( error => {
              console.log(error);
              navigate('/');
          })
  }, []);

    return (
        <Box sx={{ width: '100%',  height: '100vh', maxHeight: '100vh', display: 'flex' }}>
            <Sidebar loggedInUser={loggedInUser} />
            <Box sx={{ flex: 4, display: 'flex', flexDirection: 'column' }}>
                <MainDisplay displayTitle={"Projects"} buttonText={"Add Project"} clickAction={handleOpen} display={<ProjectsTable />} />
                <SecondaryDisplay displayTitle={"Tickets"} display={<TicketsOverview />} />
            </Box>
            <StyledModal open={open} handleClose={handleClose} personName={personName} handleChange={handleChange} handleSubmit={handleSubmit} />
        </Box>
    )
}

export default Dashboard ;
