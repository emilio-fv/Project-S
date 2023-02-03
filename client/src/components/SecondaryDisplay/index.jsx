import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const SecondaryDisplay = (props) => {
  return (
    <Box sx={{ maxHeight: '40%', flex: 2, paddingLeft: '25px' }}>
        <Typography variant='h5' component="h2">{props.displayTitle}</Typography>
        {
          props.display
        }
    </Box>

  )
}

export default SecondaryDisplay;