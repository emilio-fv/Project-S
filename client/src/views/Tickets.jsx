import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Sidebar from '../components/Sidebar';
import MainDisplay from '../components/MainDisplay';
import SecondaryDisplay from '../components/SecondaryDisplay';
import TicketDisplay from '../components/TicketDisplay';
import TicketsTable from '../components/TicketsTable';
import NewTicketForm from '../components/NewTicketForm';
import { useDispatch, useSelector } from 'react-redux';
import { resetSelected,  getManyTickets } from '../features/tickets/ticketsSlice';

const Tickets = (props) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const currentUser = useSelector((state) => state.auth.user);
  const { selected: selectedTicket} = useSelector((state) => state.tickets);
  const dispatch = useDispatch();

  // TODO: New Ticket Form
  useEffect(() => {
    dispatch(getManyTickets({ ids: currentUser.tickets}));
    dispatch(resetSelected());
  }, [])

  // TODO: Load tickets
  return (
    <Box sx={{ width: '100%',  height: '100vh', maxHeight: '100vh', display: 'flex' }}>
      <Sidebar />
      <Box sx={{ flex: 4, display: 'flex', flexDirection: 'column' }}>
        <MainDisplay displayTitle={"Tickets"} buttonText={"New Ticket"} clickAction={handleOpen} display={<TicketsTable />}/>
        <SecondaryDisplay 
          displayTitle={""} 
          display={<TicketDisplay selectedTicket={selectedTicket} projectId={null} />}
        />
      </Box>
      {/* <NewTicketForm open={open} handleClose={handleClose} /> */}
    </Box>
  )
}

export default Tickets;
