import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const TicketOverviewDisplay = (props) => {
    return (
        <>
            <Box sx={{ maxHeight: '40%', flex: 2, padding: '25px' }}>
                <Typography variant='h5' component="h2">Tickets</Typography>
            </Box>
        </>
    )
}

export default TicketOverviewDisplay;