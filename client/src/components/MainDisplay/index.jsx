import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import StyledButton from '../Button';

const MainDisplay = (props) => {
    return (
        <Box sx={{ maxHeight: '60%', flex: 3, padding: '25px' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                <Typography variant='h5' component="h2">{ props.displayTitle }</Typography>
                <StyledButton clickAction={ props.clickAction } text={ props.buttonText } />
            </Box>
            {
                props.display
            }
        </Box>
    )
}

export default MainDisplay;