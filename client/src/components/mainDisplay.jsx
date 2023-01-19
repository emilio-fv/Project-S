import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import StyledButton from './StyledButton';

const MainDisplay = (props) => {
    console.log(props.tableHeaders);

    return (
        <>            
            <Box sx={{ flex: 3, padding: '50px', border: '2px solid red'}}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant='h4' component="h2">{ props.displayTitle }</Typography>
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