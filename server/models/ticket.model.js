// Import Mongoose,
const mongoose = require('mongoose');

// TODO: Ticket Schema
const ticketSchema = new mongoose.Schema({
    // TODO: ticketType
    ticketType: {
        type: String,
        required: [true, "Ticket type is required."]
    },
    // TODO: summary
    summary: {
        type: String,
        required: [true, "Summary is required."]
    },
    // TODO: description
    description: {
        type: String,
        required: [true, "Description is required."]
    },
    // TODO: priority
    priority: {
        type: String,
        required: [true, "Priority is required."]
    },
    // TODO: estimate
    estimate: {
        type: String,
        required: [true, "Estimate is required."]
    },
    // TODO: status
    status: {
        type: String,
        default: "Incomplete"
    },
    // TODO: dueDate
    dueDate: {
        type: String,
        required: [true, "Due date is required."]
    },
    // TODO: assigned
    assigned: {
        // Q: How to store array of strings (user ids)
        required: [true, "Assigned team members required."]
    },
    // TODO: Comments
    // TODO: History
}, { timestamps: true })

// Create Ticket Model
const Ticket = mongoose.model("Ticket", ticketSchema);

// Exports
module.exports = { Ticket: Ticket };