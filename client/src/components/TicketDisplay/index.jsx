import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabPanel from '../TabPanel';
import CommentsLog from '../CommentsLog';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import StyledButton from '../StyledButton';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers';
import { updateTicket } from '../../features/tickets/ticketsSlice';

const ticketTypes = [
    { text: 'Feature', value: 'Feature'},
    { text: 'Bug', value: 'Bug'},
    { text: 'Task', value: 'Task'},
    { text: 'Improvement', value: 'Improvement'},
    { text: 'Test', value: 'Test'},
  ]

const statusTypes = [
    { text: 'Incomplete', value: 'Incomplete'},
    { text: 'In Progress', value: 'In Progress'},
    { text: 'Completed', value: 'Completed'}
]
const priorityLevels = [
  { text: 'Low', value: 'Low'},
  { text: 'Medium', value: 'Medium'},
  { text: 'High', value: 'High'}
]

function allyProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`
      }
};

const TicketDisplay = (props) => {
    const { selectedTicket } = props;
    const dispatch = useDispatch();
    const currentUser = useSelector((state) => state.auth.user);
    const [edit, setEdit] = useState(false);
    const { status: ticketStatus, error } = useSelector((state) => state.tickets);
    const [updatedTicket, setUpdatedTicket] = useState({});
    const { comments } = useSelector((state) => state.comments);

    // Handle Edit Icon Click
    const handleEditClick = (event) => {
        setUpdatedTicket({
            _id: selectedTicket._id,
            ticketType: selectedTicket.ticketType,
            summary: selectedTicket.summary,
            description: selectedTicket.description,
            priority: selectedTicket.priority,
            status: selectedTicket.status,
            dueDate: selectedTicket.dueDate
        })
        setEdit(true);
    };

    // Handle Edit Ticket Changes
    const handleTicketChanges = (event) => {
        setUpdatedTicket({
            ...updatedTicket,
            [event.target.name]: event.target.value
        })
    };

    // Handle Date Picker
    const handleDatePicker = (dueDate) => {
        const formattedDate = new Date(dueDate.$d);
        setUpdatedTicket({
            ...updatedTicket,
            dueDate: formattedDate
        })
    }

    // Handle Save Ticket
    const handleSaveTicket = (event) => {
        event.preventDefault();
        dispatch(updateTicket(updatedTicket));
        setEdit(false);
    };

    // Comment & History Tabs
    const [value, setValue] = useState(0);
    const handleTabChanges = (event, newValue) => {
        setValue(newValue);
    };

    if (selectedTicket == null) {
        return null;
    } else {
        return (
            <Box sx={{ maxHeight: '40%', flex: 2, display: 'flex' }}>
                { edit 
                    ? <Box sx={{ flex: 2 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', paddingRight: 5}}>
                            {/* Ticket Type */}
                            <FormControl size="small">
                                <InputLabel id="select-ticket-type">Ticket Type</InputLabel>
                                <Select
                                    name="ticketType"
                                    labelId="select-ticket-type"
                                    id="select-ticket"
                                    value={updatedTicket.ticketType}
                                    label="Ticket Type"
                                    onChange={event => handleTicketChanges(event)}
                                >
                                    {ticketTypes.map((item,key) => (
                                    <MenuItem key={key} value={item.value}>{item.text}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Box>
                        {/* Ticket Summary */}
                        <TextField 
                        size='small'
                            name="summary" 
                            label="Summary"
                            variant="outlined"
                            defaultValue={updatedTicket.summary}
                            value={updatedTicket.summary}
                            onChange={event => handleTicketChanges(event)}
                        />
                        <Typography variant='h6' component='h2'>Description</Typography>
                        {/* Ticket Description */}
                        <TextField 
                            hiddenLabel
                            name="description" 
                            variant="outlined" 
                            defaultValue={updatedTicket.description}
                            value={updatedTicket.description}
                            size='small'
                            fullWidth
                            multiline 
                            onChange={event => handleTicketChanges(event)} 
                        />
                        <Box sx={{ display: 'flex' }}>
                            <Box sx={{ flex: 1 }}>
                                <Typography>Assigned Team Member</Typography>
                                <Typography>{selectedTicket.assignedUser.firstName} {selectedTicket.assignedUser.lastName}</Typography>
                            </Box>
                            <Box sx={{ flex: 1 }}>
                                {/* Ticket Status */}
                                <Box sx={{ display: 'flex', alignItems: 'center'}}>
                                    <Typography>Status: </Typography> 
                                    <FormControl>
                                        <Select
                                            size='small'
                                            name="status"
                                            id="status"
                                            displayEmpty
                                            value={updatedTicket.status}
                                            label="Status"
                                            onChange={event => handleTicketChanges(event)}
                                        >
                                            {statusTypes.map((item, key) => (
                                            <MenuItem key={key} value={item.value}>{item.text}</MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </Box>
                                {/* Priority Level */}
                                <Box sx={{ display: 'flex', alignItems: 'center'}}>
                                    <Typography>Priority: </Typography> 
                                    <FormControl>
                                        <Select
                                            size='small'
                                            name="priority"
                                            labelId="select-priority-level"
                                            id="priority-level"
                                            displayEmpty
                                            value={updatedTicket.priority}
                                            label="Priority"
                                            onChange={event => handleTicketChanges(event)}
                                        >
                                            {priorityLevels.map((item, key) => (
                                            <MenuItem key={key} value={item.value}>{item.text}</MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </Box>
                                {/* Due Date */}
                                <Box sx={{ display: 'flex', alignItems: 'center'}}>
                                    <Typography>Due Date: </Typography> 
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DatePicker 
                                            disablePast
                                            name="dueDate"
                                            value={updatedTicket.dueDate}
                                            onChange={(newValue) => handleDatePicker(newValue)}
                                            renderInput={(params) => <TextField size='small' {...params}/>}
                                        />
                                    </LocalizationProvider>
                                </Box>
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'flex-end'}}>
                            <StyledButton size="small" clickAction={event => handleSaveTicket(event)} text="Save"/> 
                        </Box>
                    </Box>
                    :   <Box sx={{ flex: 2 }}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingRight: 5}}>
                                <Typography variant='p'>{selectedTicket.ticketType}</Typography>
                                {selectedTicket.assignedUser._id === currentUser._id || selectedTicket.assignedUser === currentUser._id
                                    ? <IconButton onClick={(event) => handleEditClick()}>
                                        <EditIcon fontSize="small"/>
                                    </IconButton>
                                    : null
                                }
                            </Box>
                            <Typography variant='h6' component='h2'>{selectedTicket.summary}</Typography>
                            <Typography variant='h6' component='h2'>Description</Typography>
                            <Typography>{selectedTicket.description}</Typography>
                            <Box sx={{ display: 'flex' }}>
                                <Box sx={{ flex: 1 }}>
                                    <Typography>Assigned Team Member</Typography>
                                    <Typography>{selectedTicket.assignedUser.firstName} {selectedTicket.assignedUser.lastName}</Typography>
                                </Box>
                                <Box sx={{ flex: 1 }}>
                                    <Typography>Status: {selectedTicket.status}</Typography>
                                    <Typography>Priority: {selectedTicket.priority}</Typography>
                                    <Typography>Due: {new Date(selectedTicket.dueDate).toLocaleDateString('en-us', { year:"numeric", month:"short", day:"numeric"})}</Typography>
                                </Box>
                            </Box>
                        </Box>
                }
                <Box sx={{ width: '350px', height: '100%', flex: 1 }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={value} onChange={handleTabChanges} aria-label="Comments & History Tabs">
                            <Tab label="Comments" {...allyProps(0)} />
                            {/* <Tab label="History" {...allyProps(1)} /> */}
                        </Tabs>
                    </Box>
                    <TabPanel value={value} index={0}>
                        <CommentsLog comments={comments}/>
                    </TabPanel>
                    {/* <TabPanel value={value} index={1}>
                        <HistoryLog />
                    </TabPanel> */}
                </Box>
            </Box>
        )
    }
}

export default TicketDisplay;