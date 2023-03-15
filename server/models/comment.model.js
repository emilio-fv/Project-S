// Import Mongoose
const mongoose = require('mongoose');

// Comment Schema
const commentSchema = new mongoose.Schema({
    ticketId: {
        type: mongoose.Types.ObjectId
    },
    text: {
        type: String
    },
    author: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
}, { timestamps: true })

// Create Comment Model
const Comment = mongoose.model("Comment", commentSchema)

// Exports
module.exports = { Comment: Comment };