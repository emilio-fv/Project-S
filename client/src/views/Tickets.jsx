import React from 'react';
import Box from '@mui/material/Box';
import Sidebar from '../components/Sidebar';
import MainDisplay from '../components/MainDisplay';
import SecondaryDisplay from '../components/SecondaryDisplay';
import TicketDisplay from '../components/TicketDisplay';
import TicketsTable from '../components/TicketsTable';

const Tickets = (props) => {
  return (
    <Box sx={{ width: '100%',  height: '100vh', maxHeight: '100vh', display: 'flex' }}>
      <Sidebar />
      <Box sx={{ flex: 4, display: 'flex', flexDirection: 'column' }}>
        <MainDisplay displayTitle={"Tickets"} buttonText={"New Ticket"} display={<TicketsTable />}/>
        <SecondaryDisplay display={<TicketDisplay />}/>
      </Box>
    </Box>
  )
}

export default Tickets;
