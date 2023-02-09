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
import sampleProjects from '../../data/projectData';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers';

function createName(id, name) {
  return { id, name }
}
// Sample Team Members Data
const sampleNames = [
    createName(1, 'Oliver Hansen'),
    createName(2, 'Kelly Snyder'),
    createName(3, 'Van Henry'),
    createName(4, 'April Tucker'),
    createName(5, 'Ralph Hubbard'),
    createName(6, 'Omar Alexander'),
    createName(7, 'Carlos Abbott')
];

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
  const [ticketData, setTicketData] = useState({
    type: '',
    projectId: '',
    summary: '',
    description: '',
    priority: '',
    dueDate: null,
    assignedUserId: ''
  })

  const handleChange = (event) => {
    setTicketData({
      ...ticketData,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (event) => {
    console.log(ticketData);
    props.handleClose();
    setTicketData({
      type: '',
      projectId: '',
      summary: '',
      description: '',
      priority: '',
      dueDate: null,
      assignedUserId: ''
    })
  }

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
                    name="type"
                    labelId="select-ticket-type"
                    id="select-ticket"
                    value={ticketData.type}
                    label="Ticket Type"
                    onChange={event => handleChange(event)}
                  >
                    {ticketTypes.map((item,key) => (
                      <MenuItem key={key} value={item.value}>{item.text}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
                {/* Project ✅*/}
                <FormControl fullWidth>
                  <InputLabel id='select-project'>Project</InputLabel>
                  <Select
                    name="projectId"
                    labelId="select-project"
                    id="project-select"
                    value={ticketData.projectId}
                    label="Project"
                    onChange={event => handleChange(event)}
                  >
                    {sampleProjects.map((item, key) => (
                      <MenuItem key={key} value={item.id}>{item.name}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
                {/* Summary ✅*/}
                <TextField name="summary" label="Summary" variant="outlined" onChange={event => handleChange(event)} fullWidth/>
                {/* Description ✅*/}
                <TextField name="description" label="Description" variant="outlined" multiline onChange={event => handleChange(event)} fullWidth/>
                {/* Priority Level ✅*/}
                <FormControl fullWidth>
                  <InputLabel id='select-priority-level'>Priority</InputLabel>
                  <Select
                    name="priority"
                    labelId="select-priority-level"
                    id="priority-level"
                    value={ticketData.priority}
                    label="Priority"
                    onChange={event => handleChange(event)} 
                  >
                    {priorityLevels.map((item, key) => (
                      <MenuItem key={key} value={item.value}>{item.text}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
                {/* Due Date ✅*/}
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker 
                    label="Due Date"
                    name="dueDate"
                    value={ticketData.dueDate}
                    onChange={(newValue) => handleChange({ target: { name: "dueDate", value: newValue} })}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
                {/* Assigned Team Member */}
                <FormControl fullWidth>
                  <InputLabel id='select-team-member'>Assigned Team Member</InputLabel>
                  <Select
                    name="assignedUserId"
                    labelId='select-team-member'
                    id='assigned-team-member'
                    value={ticketData.assignedUserId}
                    label="Assigned Team Member"
                    onChange={event => handleChange(event)}
                  >
                    {sampleNames.map((item, key) => (
                      <MenuItem key={key} value={item.id}>{item.name}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <StyledButton clickAction={event => handleSubmit(event)} text={"Add Ticket"}/>
              </Box>
          </Box>
      </Modal>
  )
}

export default NewTicketForm;