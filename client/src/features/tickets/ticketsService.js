import axios from 'axios';

const API_URL = 'http://localhost:8000/api/tickets/';

// Create Ticket
const createTicket = async (ticketData) => {
    const response = await axios.post(API_URL + 'create', ticketData, { withCredentials: true });
    return response.data.newTicket;
};

// Get Many Tickets
const getManyTickets = async (ids) => {
    const response = await axios.get(API_URL + 'many', { params: ids }, { withCredentials: true });
    return response.data;
};

// Update Ticket
const updateTicket = async (id, ticketData) => {
    const response = await axios.post(API_URL + id + 'update', ticketData, { withCredentials: true });
    return response.data;
};

// Delete Ticket
const deleteTicket = async (id) => {
    const response = await axios.delete(API_URL + id, { withCredentials: true });
    return response.data.deletedTicket;
};

// Exports
const ticketsService = {
    createTicket,
    getManyTickets,
    updateTicket,
    deleteTicket
};

export default ticketsService;