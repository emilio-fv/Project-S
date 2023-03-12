import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import StyledButton from '../Button';
import FormHelperText from '@mui/material/FormHelperText';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers';
import { useSelector } from 'react-redux';

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

const ticketTypes = [
  { text: 'Feature', value: 'Feature'},
  { text: 'Bug', value: 'Bug'},
  { text: 'Task', value: 'Task'},
  { text: 'Improvement', value: 'Improvement'},
  { text: 'Test', value: 'Test'},
]

const priorityLevels = [
  { text: 'Low', value: 'Low'},
  { text: 'Medium', value: 'Medium'},
  { text: 'High', value: 'High'}
]

const NewTicketForm = (props) => {
  const projects = useSelector((state) => state.projects.projects);
  const personnel = useSelector((state) => state.personnel.personnel);
  const {ticketFormData, handleChange, handleDatePicker, handleSubmit, errorMessages} = props;

  return (
      <Modal
          open={props.open}
          onClose={props.handleClose}
          aria-labelledby="add ticket form"
      >
          <Box sx={modalStyle}>
              <Typography id="modal-modal-title" variant="h6" component="h2" textAlign="center" sx={{ marginBottom: '10px' }}>
                Add Ticket
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: '10px' }}>
                {/* Ticket Type ✅*/}
                <FormControl fullWidth> 
                  <InputLabel id="select-ticket-type">Ticket Type</InputLabel>
                  <Select
                    name="ticketType"
                    labelId="select-ticket-type"
                    id="select-ticket"
                    value={ticketFormData.ticketType}
                    label="Ticket Type"
                    onChange={event => handleChange(event)}
                    error={errorMessages.ticketType?.message ? true : false}
                  >
                    {ticketTypes.map((item,key) => (
                      <MenuItem key={key} value={item.value}>{item.text}</MenuItem>
                    ))}
                  </Select>
                  {errorMessages.ticketType?.message 
                    ? <FormHelperText error>{ errorMessages.ticketType?.message }</FormHelperText>
                    : null
                  }
                </FormControl>
                {/* Project ✅*/}
                <FormControl fullWidth>
                  <InputLabel id='select-project'>Project</InputLabel>
                  <Select
                    name="project"
                    labelId="select-project"
                    id="project-select"
                    value={ticketFormData.project}
                    label="Project"
                    onChange={event => handleChange(event)}
                    error={errorMessages.project?.message ? true : false}
                  >
                    {projects.map((item, key) => (
                      <MenuItem key={key} value={item._id}>{item.name}</MenuItem>
                    ))}
                  </Select>
                  {errorMessages.project?.message 
                    ? <FormHelperText error>{ errorMessages.project?.message }</FormHelperText>
                    : null
                  }
                </FormControl>
                {/* Summary ✅*/}
                <TextField 
                  name="summary" 
                  label="Summary" 
                  variant="outlined" 
                  onChange={event => handleChange(event)} 
                  fullWidth 
                  error={errorMessages.summary?.message ? true : false }
                  helperText={errorMessages.summary?.message ? errorMessages.summary?.message : null }
                />
                {/* Description ✅*/}
                <TextField 
                  name="description" 
                  label="Description" 
                  variant="outlined" 
                  multiline 
                  onChange={event => handleChange(event)} 
                  fullWidth
                  error={errorMessages.description?.message ? true : false }
                  helperText={errorMessages.description?.message ? errorMessages.description?.message : null }
                />
                {/* Priority Level ✅*/}
                <FormControl fullWidth>
                  <InputLabel id='select-priority-level'>Priority</InputLabel>
                  <Select
                    name="priority"
                    labelId="select-priority-level"
                    id="priority-level"
                    value={ticketFormData.priority}
                    label="Priority"
                    onChange={event => handleChange(event)}
                    error={errorMessages.priority?.message ? true : false}
                  >
                    {priorityLevels.map((item, key) => (
                      <MenuItem key={key} value={item.value}>{item.text}</MenuItem>
                    ))}
                  </Select>
                  {errorMessages.priority?.message 
                    ? <FormHelperText error>{ errorMessages.priority?.message }</FormHelperText>
                    : null
                  }
                </FormControl>
                {/* Due Date ✅*/}
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker 
                    label="Due Date"
                    name="dueDate"
                    value={ticketFormData.dueDate}
                    onChange={(newValue) => handleDatePicker(newValue)}
                    renderInput={(params) => <TextField {...params} error={errorMessages.dueDate?.message ? true : false} helperText={errorMessages.dueDate?.message ? errorMessages.dueDate?.message : null }/>}
                  />
                </LocalizationProvider>
                {/* Assigned Team Member ✅*/}
                <FormControl fullWidth>
                  <InputLabel id='select-team-member'>Assigned Team Member</InputLabel>
                  <Select
                    name="assignedUser"
                    labelId='select-team-member'
                    id='assigned-team-member'
                    value={ticketFormData.assignedUser}
                    label="Assigned Team Member"
                    onChange={event => handleChange(event)}
                    error={errorMessages.assignedUser?.message ? true : false}
                  >
                    {personnel.map((item, key) => (
                      <MenuItem key={key} value={item._id}>{item.firstName} {item.lastName}</MenuItem>
                    ))}
                  </Select>
                  {errorMessages.assignedUser?.message 
                    ? <FormHelperText error>{ errorMessages.assignedUser?.message }</FormHelperText>
                    : null
                  }
                </FormControl>
                <StyledButton clickAction={event => handleSubmit(event)} text={"Add Ticket"}/>
              </Box>
          </Box>
      </Modal>
  )
}

export default NewTicketForm;