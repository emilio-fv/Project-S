import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Sidebar from '../components/Sidebar';
import MainDisplay from '../components/MainDisplay';
import SecondaryDisplay from '../components/SecondaryDisplay';
import TicketDisplay from '../components/TicketDisplay';
import TicketsTable from '../components/TicketsTable';
import NewTicketForm from '../components/NewTicketForm';

const Tickets = (props) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box sx={{ width: '100%',  height: '100vh', maxHeight: '100vh', display: 'flex' }}>
      <Sidebar />
      <Box sx={{ flex: 4, display: 'flex', flexDirection: 'column' }}>
        <MainDisplay displayTitle={"Tickets"} buttonText={"New Ticket"} clickAction={handleOpen} display={<TicketsTable />}/>
        <SecondaryDisplay display={<TicketDisplay />}/>
      </Box>
      <NewTicketForm open={open} handleClose={handleClose} />
    </Box>
  )
}

export default Tickets;
