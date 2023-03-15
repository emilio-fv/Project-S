// Import Model
const { Comment } = require('../models/comment.model');
const { Ticket } = require('../models/ticket.model');

// Create Comment
const createComment = async (data) => {
    console.log("service: createComment");
    const newComment = await Comment.create(data);

    const ticketId = newComment.ticketId;

    const updatedTicket = await Ticket.findByIdAndUpdate({ _id: ticketId }, { $push: { comments: newComment._id }});

    return {
        newComment: newComment,
        updatedTicket: updatedTicket
    }
};

// Get Many Comments
const getManyComments = async (ids) => {
    console.log("service: getManyComments");
    const selectedComments = await Comment.find({ '_id': { $in: ids }})
        .populate('author', ['firstName', 'lastName'])
    return selectedComments;
}

// Exports
module.exports = {
    createComment: createComment,
    getManyComments: getManyComments
}