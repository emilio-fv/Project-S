// Import Ticket Services
const {
    createTicket,
    getOneTicket,
    getManyTickets,
    getAllTickets,
    updateTicketById,
    deleteTicketById
} = require('../services/ticket.services');

// Create Ticket
const handleCreateTicket = async (req, res) => {
    console.log("controller: handleCreateTicket req.body: ", req.body);
    try {
        const response = await createTicket(req.body);
        return res.json(response);
    } catch (error) {
        return res.status(400).json(error);
    }
};

// Get One Ticket
const handleGetOneTicket = async (req, res) => {
    console.log("controller: handleGetOneTicket req.params: ", req.params.id);
    try {
        const response = await getOneTicket(req.params.id)
        return res.json(response);
    } catch (error) {
        return res.status(400).json(error);
    }
};

// Get Many Tickets
const handleGetManyTickets = async (req, res) => {
    console.log("controller: handleGetManyTickets req.query: ", req.query);
    try {
        const response = await getManyTickets(req.query.ids);
        return res.json(response);
    } catch (error) {
        return res.status(400).json(error);
    }
};

// Get All Tickets
const handleGetAllTickets = async (req, res) => {
    console.log("controller: handleGetAllTickets");
    try {
        const response = await getAllTickets();
        return res.json(response);
    } catch (error) {
        return res.status(400).json(error);
    }
};

// Update Ticket By Id
const handleUpdateTicketById = async (req, res) => {
    console.log(`controller: handleUpdateTicketById req.params: ${req.params.id} req.body: ${req.body}`);
    try {
        const response = await updateTicketById(req.params.id, req.body);
        return res.json(response);
    } catch (error) {
        return res.status(400).json(error);
    }
};

// Delete Ticket By Id
const handleDeleteTicketById = async (req, res) => {
    console.log("controller: handleDeleteTicketById req.params: ", req.params.id);
    try {
        const response = await deleteTicketById(req.params.id);
        return res.json(response);
    } catch (error) {
        return res.status(400).json(error);
    }
};

// Exports
module.exports = {
    handleCreateTicket: handleCreateTicket,
    handleGetOneTicket: handleGetOneTicket,
    handleGetManyTickets: handleGetManyTickets,
    handleGetAllTickets: handleGetAllTickets,
    handleUpdateTicketById: handleUpdateTicketById,
    handleDeleteTicketById: handleDeleteTicketById
};