// Import Ticket, Project Model
const { User } = require('../models/user.model');
const { Project } = require('../models/project.model');
const { Ticket } = require('../models/ticket.model');

// Create Ticket
const createTicket = async (data) => {
    console.log("service: createTicket");
    const newTicket = await Ticket.create(data);
    
    // Update project's tickets [] & assigned users' tickets []
    const projectId = newTicket.project;
    const userId = newTicket.assignedUser;

    const updatedProject = await Project.findByIdAndUpdate({ _id: projectId }, { $push: { tickets: newTicket._id }});

    const updatedUser = await User.findByIdAndUpdate({ _id: userId }, { $push: { tickets: newTicket._id }});

    return { 
        newTicket: newTicket,
        updatedProject: updatedProject,
        updatedUser: updatedUser
    };
}

// Get One Ticket
const getOneTicket = async (id) => {
    console.log("service: getOneTicket");
    const selectedTicket = await Ticket.findById(id)
        .populate('project', ['name'])
        .populate('assignedUser', ['firstName', 'lastName'])
    return selectedTicket;
}

// Get Many Tickets
const getManyTickets = async (ids) => {
    console.log("service: getManyTickets");
    const selectedTickets = await Ticket.find({ '_id': { $in: ids }})
        .populate('project', ['name'])
        .populate('assignedUser', ['firstName', 'lastName']);
    return selectedTickets;
}

// Get All Tickets
const getAllTickets = async () => {
    console.log("service: getAllTickets");
    const allTickets = await Ticket.find()
        .populate('project', ['name'])
        .populate('assignedUser', ['firstName', 'lastName']);
    return allTickets;
}

// Update Ticket By Id
const updateTicketById = async (id, data) => {
    console.log("service: updateTicketById");
    const updatedTicket = await Ticket.findByIdAndUpdate({ _id: id }, data, { new: true });
    console.log(updatedTicket);
    return updatedTicket;
}

// Delete Ticket By Id
const deleteTicketById = async (id) => {
    console.log("service: deleteTicket");
    const deletedTicket = await Ticket.findByIdAndDelete({ _id: id });
    // TODO: Update project's tickets [] & user's tickets []
    let projectId = deletedTicket.project;
    let userId = deletedTicket.assignedUser;
    const updatedProject = await Project.findByIdAndUpdate({ _id: projectId }, { $pull: { tickets: deletedTicket._id } });
    const updatedUser = await User.findByIdAndUpdate({ _id: userId }, { $pull: { tickets: deletedTicket._id }})

    return {
        updatedProject: updatedProject,
        updatedUser: updatedUser
    }
}

// Exports
module.exports = {
    createTicket: createTicket,
    getOneTicket: getOneTicket,
    getManyTickets: getManyTickets,
    getAllTickets: getAllTickets,
    updateTicketById: updateTicketById,
    deleteTicketById: deleteTicketById
}