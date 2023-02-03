import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabPanel from '../TabPanel';
import CommentsLog from '../CommentsLog';
import HistoryLog from '../HistoryLog';
import { useState } from 'react';

function allyProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
      };
}
const TicketDisplay = (props) => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    return (
        <Box sx={{ maxHeight: '40%', flex: 2, display: 'flex' }}>
            <Box sx={{ flex: 2 }}>
                <p>TODO: Ticket type</p>
                <Typography variant='h6' component='h2'>Ticket #TODO: Summary</Typography>
                <Typography variant='h6' component='h2'>Description</Typography>
                <Typography>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia culpa vero quaerat beatae sint qui harum porro soluta quos repudiandae, obcaecati expedita, ullam tempora aliquam deleniti, eaque assumenda consequuntur reiciendis!</Typography>
                <Box sx={{ display: 'flex' }}>
                    <Box sx={{ flex: 1, border: '2px solid red' }}>
                        <Typography>Assigned Team Member</Typography>
                        <Typography>TODO: add team member</Typography>
                    </Box>
                    <Box sx={{ flex: 1, border: '2px solid red' }}>
                        <Typography>Status: TODO</Typography>
                        <Typography>Priority: TODO</Typography>
                        <Typography>Due In: TODO</Typography>
                    </Box>
                </Box>
            </Box>
            <Box sx={{ width: '100%', flex: 1 }}>
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