import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import StyledButton from './StyledButton';

const MainDisplay = (props) => {
    console.log(props.tableHeaders);

    return (
        <>            
            <Box sx={{ maxHeight: '60%', flex: 3, padding: '25px', border: '2px solid red' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                    <Typography variant='h5' component="h2">{ props.displayTitle }</Typography>
                    <StyledButton text={ props.buttonText } />
                </Box>
                {
                    props.displayTable
                }
            </Box>
        </>
    )
}

export default MainDisplay;