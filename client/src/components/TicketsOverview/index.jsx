import React from 'react';
import Box from '@mui/material/Box';
import PieChart from '../PieChart';
import { createSelector } from 'reselect';
import { useSelector } from 'react-redux';

function createChart(labels, label, data, backgroundColors, borderColors) {
  return {
    labels: labels,
    datasets: [
      {
        label: label,
        data: data,
        backgroundColor: backgroundColors,
        borderColor: borderColors,
        borderWidth: 1
      }
    ]
  }
}

// Selectors By Ticket Type
const selectFeatureTickets = createSelector(
  (state) => state.tickets.tickets,
  (tickets) => tickets.filter((ticket) => ticket.ticketType === 'Feature').length
);

const selectBugTickets = createSelector(
  (state) => state.tickets.tickets,
  (tickets) => tickets.filter((ticket) => ticket.ticketType === 'Bug').length
);

const selectTaskTickets = createSelector(
  (state) => state.tickets.tickets,
  (tickets) => tickets.filter((ticket) => ticket.ticketType === 'Task').length
);

const selectImprovementTickets = createSelector(
  (state) => state.tickets.tickets,
  (tickets) => tickets.filter((ticket) => ticket.ticketType === 'Improvement').length
);

const selectTestTickets = createSelector(
  (state) => state.tickets.tickets,
  (tickets) => tickets.filter((ticket) => ticket.ticketType === 'Test').length
);

// Selectors By Ticket Priority
const selectLowPriorityTickets = createSelector(
  (state) => state.tickets.tickets,
  (tickets) => tickets.filter((ticket) => ticket.priority === 'Low').length
);

const selectMediumPriorityTickets = createSelector(
  (state) => state.tickets.tickets,
  (tickets) => tickets.filter((ticket) => ticket.priority === 'Medium').length
);

const selectHighPriorityTickets = createSelector(
  (state) => state.tickets.tickets,
  (tickets) => tickets.filter((ticket) => ticket.priority === 'High').length
);

// Selectors By Ticket Status
const selectIncompleteTickets = createSelector(
  (state) => state.tickets.tickets,
  (tickets) => tickets.filter((ticket) => ticket.status === 'Incomplete').length
)
const selectInProgressTickets = createSelector(
  (state) => state.tickets.tickets,
  (tickets) => tickets.filter((ticket) => ticket.status === 'In Progress').length
)
const selectCompletedTickets = createSelector(
  (state) => state.tickets.tickets,
  (tickets) => tickets.filter((ticket) => ticket.status === 'Completed').length
)

const TicketsOverview = (props) => {
  const featureTickets = useSelector(selectFeatureTickets);
  const bugTickets = useSelector(selectBugTickets);
  const taskTickets = useSelector(selectTaskTickets);
  const improvementTickets = useSelector(selectImprovementTickets);
  const testTickets = useSelector(selectTestTickets);
  const lowPriorityTickets = useSelector(selectLowPriorityTickets);
  const mediumPriorityTickets = useSelector(selectMediumPriorityTickets);
  const highPriorityTickets = useSelector(selectHighPriorityTickets);
  const incompleteTickets = useSelector(selectIncompleteTickets);
  const inProgressTickets = useSelector(selectInProgressTickets);
  const completedTickets = useSelector(selectCompletedTickets);

  const typeChart = createChart(
    ['Feature', 'Bug', 'Task', 'Improvement', 'Test'], 
    "# of Tickets",
    [featureTickets, bugTickets, taskTickets, improvementTickets, testTickets],
    ['green', 'yellow', 'purple', 'orange', 'blue'],
    ['green', 'yellow', 'purple', 'orange', 'blue']
    );

    const priorityChart = createChart(
    ['High', 'Medium', 'Low'],
    "# of Tickets",
    [highPriorityTickets, mediumPriorityTickets, lowPriorityTickets],
    ['red', 'yellow', 'green'],
    ['red', 'yellow', 'green']
  );

  const statusChart = createChart(
    ['Incomplete', 'In Progress', 'Completed'],
    "# of Tickets",
    [incompleteTickets, inProgressTickets, completedTickets],
    ['red', 'yellow', 'green'],
    ['red', 'yellow', 'green']
  ); 

  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
        <PieChart chartName={"By Type"} data={typeChart}/>
        <PieChart chartName={"By Priority"} data={priorityChart}/>
        <PieChart chartName={"By Status"} data={statusChart}/>
    </Box>
  )
}

export default TicketsOverview;