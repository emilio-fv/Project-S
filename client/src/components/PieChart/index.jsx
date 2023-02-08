import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = (props) => {
  return (
    <Box sx={{ maxHeight: '175px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px' }}>
        <Pie data={props.data} />
        <Typography>{props.chartName}</Typography>
    </Box>
  )
}

export default PieChart;