import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const ProjectDetails = (props) => {
    return (
        <Box sx={{ height: '90%', width: '100%', display: 'flex' }}>
            <Box sx={{ flex: 1, border: '2px solid red' }}>
                <Box>
                    <Typography variant='h6' component='h2'>Description</Typography>
                    <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium incidunt quia corrupti veritatis porro obcaecati error possimus! Doloremque magnam iusto alias deleniti earum tempora, molestiae voluptatum aspernatur sed, provident consectetur!</Typography>
                </Box>
                <Box>
                    <Typography variant='h6' component='h2'>Team Members</Typography>
                    <p>TODO: Add team members</p>
                </Box>
            </Box>
            <Box sx={{ flex: 2, border: '2px solid red' }}>
                <Typography variant='h6' component='h2'>Tickets</Typography>
                <p>TODO: add tickets table</p>
            </Box>
        </Box>
    )
}

export default ProjectDetails;