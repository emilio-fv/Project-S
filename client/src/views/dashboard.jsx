import React from 'react';
import Sidebar from '../components/Sidebar';
import MainDisplay from '../components/MainDisplay';
import TicketOverviewDisplay from '../components/TicketOverviewDisplay';
import ProjectsTable from '../components/ProjectsTable';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import StyledButton from '../components/StyledButton';
import { useState } from 'react';
import { useTheme } from '@mui/material/styles';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

// Sample Team Members Data
const sampleNames = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
  ];

function getStyles(name, personName, theme) {
    return {
        fontWeight:
        personName.indexOf(name) === -1
            ? theme.typography.fontWeightRegular
            : theme.typography.fontWeightMedium,
    };
}

const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const Dashboard = (props) => {
    const theme = useTheme();
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

    return(
        <>
            <Box sx={{ width: '100%',  height: '100vh', maxHeight: '100vh', display: 'flex' }}>
                <Sidebar />
                <Box sx={{ flex: 4, display: 'flex', flexDirection: 'column' }}>
                    <MainDisplay displayTitle={"Projects"} buttonText={"Add Project"} clickAction={handleOpen} displayTable={<ProjectsTable />}/>
                    <TicketOverviewDisplay />
                </Box>
            </Box>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="add project form"
            >
                <Box sx={modalStyle}>
                    <Typography id="modal-modal-title" variant="h6" component="h2" textAlign="center" sx={{ marginBottom: '10px' }}>
                        Add Project
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: '10px' }}>
                        <TextField id="" label="Project Name" variant="outlined" />
                        <TextField id="" label="Description" variant="outlined" multiline/>
                        <FormControl sx={{ m: 1, width: 300 }}>
                            <InputLabel id="demo-multiple-name-label">Name</InputLabel>
                            <Select
                                labelId="demo-multiple-name-label"
                                id="demo-multiple-name"
                                multiple
                                value={personName}
                                onChange={handleChange}
                                input={<OutlinedInput label="Name" />}
                                MenuProps={MenuProps}
                                >
                                {sampleNames.map((name) => (
                                    <MenuItem
                                    key={name}
                                    value={name}
                                    style={getStyles(name, personName, theme)}
                                    >
                                    {name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <StyledButton clickAction={handleSubmit} text={"Add Project"}/>
                    </Box>
                </Box>
            </Modal>
        </>
    )
}

export default Dashboard ;