import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import sampleHistory from '../../data/historyData';

const HistoryLog = (props) => {
  return (
    <Box sx={{ height: '150px', display: 'flex', flexDirection: 'column', overflow: 'scroll' }}>
      { sampleHistory.map((item, key) => (
          <Box>
            <Typography sx={{ fontSize: '.9rem' }}>{ item.text }</Typography>
            <Typography sx={{ fontSize: '.8rem' }} align='right'>{ item.date.toDateString() }</Typography>
          </Box>
      ))}
    </Box>
  )
}

export default HistoryLog;