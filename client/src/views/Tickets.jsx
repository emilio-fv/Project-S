import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Sidebar from '../components/Sidebar';
import MainDisplay from '../components/MainDisplay';
import SecondaryDisplay from '../components/SecondaryDisplay';
import TicketDisplay from '../components/TicketDisplay';
import TicketsTable from '../components/TicketsTable';
import { useDispatch, useSelector } from 'react-redux';
import { resetSelected } from '../features/tickets/ticketsSlice';

const Tickets = (props) => {
  const { selected: selectedTicketId } = useSelector((state) => state.tickets);
  const dispatch = useDispatch();
  const selectedTicket = useSelector((state) => state.tickets.tickets.find((ticket) => ticket._id === selectedTicketId))

  // Reset selected ticket
  useEffect(() => {
    dispatch(resetSelected());
  }, [])

  return (
    <Box sx={{ width: '100%',  height: '100vh', maxHeight: '100vh', display: 'flex' }}>
      <Sidebar />
      <Box sx={{ flex: 4, display: 'flex', flexDirection: 'column' }}>
        <MainDisplay displayTitle={"Tickets"}  display={<TicketsTable />}/>
        <SecondaryDisplay 
          displayTitle={""} 
          display={<TicketDisplay selectedTicket={selectedTicket} />}
        />
      </Box>
    </Box>
  )
}

export default Tickets;
