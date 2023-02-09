import React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import StyledButton from '../Button/index.jsx';
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

const NewProjectForm = (props) => {
    const theme = useTheme();

    return (
        <Modal
            open={props.open}
            onClose={props.handleClose}
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
                            value={props.personName}
                            onChange={props.handleChange}
                            input={<OutlinedInput label="Name" />}
                            MenuProps={MenuProps}
                            >
                            {sampleNames.map((name) => (
                                <MenuItem
                                key={name}
                                value={name}
                                style={getStyles(name, props.personName, theme)}
                                >
                                {name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <StyledButton clickAction={props.handleSubmit} text={"Add Project"}/>
                </Box>
            </Box>
        </Modal>
    )
}

export default NewProjectForm;