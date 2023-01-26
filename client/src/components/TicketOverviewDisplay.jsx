import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import PieChart from './PieChart';

// Sample Cart Data
const typeChartData ={
    labels: ['Feature', 'Bug', 'Task', 'Improvement', 'Test'],
    datasets: [
        {
            label: "# of Tickets",
            data: [3,2,1,3,2],
            backgroundColor: [
                'green',
                'yellow',
                'purple',
                'orange',
                'blue'
            ],
            borderColor: [
                'green',
                'yellow',
                'purple',
                'orange',
                'blue'
            ],
            borderWidth: 1
        }
    ]
}

const priorityChartData = {
    labels: ['High', 'Medium', 'Low'],
    datasets: [
        {
            label: '# of Tickets',
            data: [2,4,7],
            backgroundColor: [
                'red',
                'yellow',
                'green'
            ],
            borderColor: [
                'red',
                'yellow',
                'green'
            ],
            borderWidth: 1
        }
    ]
}

const statusChartData ={
    labels: ['Incomplete', 'In Progress', 'Completed'],
    datasets: [
        {
            label: "# of Tickets",
            data: [3,4,2],
            backgroundColor: [
                'red',
                'yellow',
                'green'
            ],
            borderColor: [
                'red',
                'yellow',
                'green'

            ],
            borderWidth: 1
        }
    ]
}

const TicketOverviewDisplay = (props) => {
    return (
        <>
            <Box sx={{ maxHeight: '40%', flex: 2, padding: '25px' }}>
                <Typography variant='h5' component="h2">Tickets</Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
                    <PieChart chartName={"By Type"} data={typeChartData}/>
                    <PieChart chartName={"By Priority"} data={priorityChartData}/>
                    <PieChart chartName={"By Status"} data={statusChartData}/>
                </Box>
            </Box>
        </>
    )
}

export default TicketOverviewDisplay;