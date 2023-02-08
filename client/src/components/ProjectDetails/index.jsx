import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TicketsTable from '../TicketsTable';

const ProjectDetails = (props) => {
    return (
        <Box sx={{ height: '90%', width: '100%', display: 'flex' }}>
            <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '10px', border: '2px solid red' }}>
                <Box sx={{ flex: 2 }}>
                    <Typography variant='h6' component='h2'>Description</Typography>
                    <Typography>TODO: Description</Typography>
                </Box>
                <Box sx={{ flex: 3 }}>
                    <Typography variant='h6' component='h2'>Team Members</Typography>
                    <Typography component='p'>TODO: Team Members</Typography>
                    {
                        // TODO: Iterate over array of team members
                    }
                </Box>
            </Box>
            <Box sx={{ flex: 2, border: '2px solid red' }}>
                <Typography variant='h6' component='h2'>Tickets</Typography>
                <TicketsTable />
            </Box>
        </Box>
    )
}

export default ProjectDetails;