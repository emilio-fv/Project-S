import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const TicketDisplay = (props) => {
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
            <Box sx={{ flex: 1, border: '2px solid red' }}>
                <p>TODO: comments/history box</p>
            </Box>
        </Box>
    )
}

export default TicketDisplay;