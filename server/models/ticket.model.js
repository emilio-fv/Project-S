// Import Mongoose
const mongoose = require('mongoose');

//  Ticket Schema
const ticketSchema = new mongoose.Schema({
    ticketType: {
        type: String,
        required: [true, "Ticket type is required."]
    },
    project: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project',
        required: [true, "Project is required"]
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
                return (v && v.getDate() < Date.now())
            },
            message: "Due date must a future date."
        }
    },
    assignedUser: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: [true, "Must assign to a team member."]
    },
    comments: [{
        type: mongoose.Types.ObjectId,
        ref: 'Comment'
    }]
}, { timestamps: true })

// Create Ticket Model
const Ticket = mongoose.model("Ticket", ticketSchema);

// Exports
module.exports = { Ticket: Ticket };