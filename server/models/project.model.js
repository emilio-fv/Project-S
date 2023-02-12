// Imports Mongoose
const mongoose = require('mongoose');

// TODO: Project Schema
const projectSchema = new mongoose.Schema({
    // TODO: name
    name: {
        type: String,
        required: [true, "Project name is required."]
    },
    // TODO: description
    description: {
        type: String,
        required: [true, "Description is required."]
    },
    // TODO: projectManager
    projectManager: {
        type: String,
        required: [true, "Project manager is required."]
    }
    // TODO: team
        // Array of user ids
    // TODO: tickets
        // Array of tickets
}, { timestamps: true });

// Create Project Model
const Project = mongoose.model("Project", projectSchema);

// Exports
module.exports = { Project: Project }