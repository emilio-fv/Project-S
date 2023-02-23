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
import FormHelperText from '@mui/material/FormHelperText';
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

// function getStyles(name, personName, theme) {
//     return {
//         fontWeight:
//         personName.indexOf(name) === -1
//             ? theme.typography.fontWeightRegular
//             : theme.typography.fontWeightMedium,
//     };
// }

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
    // const theme = useTheme();
    const { personnel } = props;
    const { errorMessages } = props;

    return (
        <Modal
            open={props.open}
            onClose={props.handleClose}
            aria-labelledby="add project form"
        >
            <Box sx={modalStyle}>
                <Typography id="modal-modal-title" variant="h5" component="h2" textAlign="center" sx={{ marginBottom: '20px' }}>
                    Add Project
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: '20px' }}>
                    <TextField 
                        fullWidth 
                        name='name' 
                        label={props.formData.name ? "" : "Project Name"} 
                        value={props.formData.name} 
                        variant="outlined" 
                        autoComplete='off'
                        error={ !errorMessages.name ? false : true }
                        helperText={ !errorMessages.name ? "" : errorMessages.name.message }
                        onChange={props.handleChange}/>
                    <TextField 
                        fullWidth 
                        name='description' 
                        label={props.formData.description? "" : "Description"} 
                        value={props.formData.description} 
                        variant="outlined" 
                        multiline
                        error={ !errorMessages.description ? false : true }
                        helperText={ !errorMessages.description ? "" : errorMessages.description.message }
                        rows={6} 
                        onChange={props.handleChange}
                    />
                    <FormControl fullWidth>
                        <InputLabel id="demo-multiple-name-label">Team Members</InputLabel>
                        <Select
                            name='team'
                            labelId="demo-multiple-name-label"
                            id="demo-multiple-name"
                            multiple
                            value={ !props.personName ? [] : props.personName }
                            onChange={props.handleChange}
                            input={<OutlinedInput 
                            label="Team Members" 
                            error={ props.personName?.length === 0 ? true : false}
                        />}
                            MenuProps={MenuProps}
                        >
                            {personnel.map((person) => (
                                <MenuItem
                                    key={person._id}
                                    value={person._id}
                                // style={getStyles(person, props.personName, theme)}
                                >
                                {person.firstName} {person.lastName}
                                </MenuItem>
                            ))}
                        </Select>
                        { props.formData.team?.length > 0 && errorMessages.team ? null : 
                            <FormHelperText error>{ errorMessages.team?.message }</FormHelperText>
                        }
                    </FormControl>
                    <StyledButton clickAction={props.handleSubmit} text={"Add Project"} size={"large"}/>
                </Box>
            </Box>
        </Modal>
    )
}

export default NewProjectForm;