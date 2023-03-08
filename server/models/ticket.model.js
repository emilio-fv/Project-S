// Import Mongoose
const mongoose = require('mongoose');

//  Ticket Schema
const ticketSchema = new mongoose.Schema({
    ticketType: {
        type: String,
        required: [true, "Ticket type is required."]
    },
    projectId: {
        type: String,
        required: [true, "Project must be selected"]
    },
    summary: {
        type: String,
        required: [true, "Summary is required."]
    },
    description: {
        type: String,
        required: [true, "Description is required."]
    },
    priority: {
        type: String,
        required: [true, "Priority is required."]
    },
    status: {
        type: String,
        default: "Incomplete"
    },
    dueDate: {
        type: Date,
        required: [true, "Due date is required."],
        validate: {
            validator: function (v) {
                return (v && v.getDate() > Date.now())
            },
            message: "Due date must a future date."
        }
    },
    assigned: {
        type: [String],
        required: [true, "At least 1 team member required."]
    },
    // TODO: Comments
    // TODO: History
}, { timestamps: true })

// Create Ticket Model
const Ticket = mongoose.model("Ticket", ticketSchema);

// Exports
module.exports = { Ticket: Ticket };