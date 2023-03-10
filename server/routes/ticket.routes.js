// Import Express, Ticket Controller Methods
const express = require('express');
const { authenticate } = require('../config/jwt.config');
const {
    handleCreateTicket,
    handleGetOneTicket,
    handleGetManyTickets,
    handleGetAllTickets,
    handleUpdateTicketById,
    handleDeleteTicketById
} = require('../controllers/ticket.controller');

// Create Router
const router = express.Router();

// Ticket API Routes.
router.post('/create', handleCreateTicket); // ✅
router.get('/:id/ticket', handleGetOneTicket); // ✅
router.get('/many', handleGetManyTickets); // ✅
router.get('/all', handleGetAllTickets); // ✅
router.post('/:id/update', handleUpdateTicketById); // ✅
router.delete('/:id', handleDeleteTicketById); // ✅

// Exports
module.exports = { ticketRouter: router };