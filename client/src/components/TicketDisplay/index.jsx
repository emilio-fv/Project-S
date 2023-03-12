import React, { useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabPanel from '../TabPanel';
import CommentsLog from '../CommentsLog';
import HistoryLog from '../HistoryLog';
import { useState } from 'react';
import { useSelector } from 'react-redux';

function allyProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`
      }
};

const TicketDisplay = (props) => {
    const { selectedTicket, projectId } = props;
    const project = useSelector((state) => state.projects.projects.find(project => project._id === projectId ));
    const ticket = project?.tickets.find((ticket) => ticket._id === selectedTicket);

    useEffect(() => {
        console.log(projectId);
    }, [projectId]);

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    if (selectedTicket === null) {
        return null;
    }

    return (
        <Box sx={{ maxHeight: '40%', flex: 2, display: 'flex' }}>
            <Box sx={{ flex: 2 }}>
                <p>{ticket.ticketType}</p>
                <Typography variant='h6' component='h2'>{ticket.summary}</Typography>
                <Typography variant='h6' component='h2'>Description</Typography>
                <Typography>{ticket.description}</Typography>
                <Box sx={{ display: 'flex' }}>
                    <Box sx={{ flex: 1 }}>
                        <Typography>Assigned Team Member</Typography>
                        <Typography>{ticket.assignedUser.firstName} {ticket.assignedUser.lastName}</Typography>
                    </Box>
                    <Box sx={{ flex: 1 }}>
                        <Typography>Status: {ticket.status}</Typography>
                        <Typography>Priority: {ticket.priority}</Typography>
                        <Typography>Due: {ticket.dueDate}</Typography>
                    </Box>
                </Box>
            </Box>
            <Box sx={{ width: '350px', height: '100%', flex: 1 }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="Comments & History Tabs">
                        <Tab label="Comments" {...allyProps(0)} />
                        <Tab label="History" {...allyProps(1)} />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    <CommentsLog />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <HistoryLog />
                </TabPanel>
            </Box>
        </Box>
    )
}

export default TicketDisplay;