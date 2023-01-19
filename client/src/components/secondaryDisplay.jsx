import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const SecondaryDisplay = (props) => {
    return (
        <>
            <Box sx={{ flex: 2, border: '2px solid red'}}>
                <Typography textAlign={'center'}>Secondary Display</Typography>
            </Box>
        </>
    )
}

export default SecondaryDisplay;