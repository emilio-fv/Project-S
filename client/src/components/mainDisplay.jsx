import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const MainDisplay = (props) => {
    return (
        <>            
            <Box sx={{ flex: 3, border: '2px solid red'}}>
                <Typography textAlign={'center'}>Main Display</Typography>
            </Box>
        </>
    )
}

export default MainDisplay;