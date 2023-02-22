// Imports Mongoose
const mongoose = require('mongoose');

// TODO: Project Schema
const projectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Project name is required."]
    },
    description: {
        type: String,
        required: [true, "Description is required."]
    },
    projectManager: {
        type: {
            userId: String, 
            firstName: String,
            lastName: String,
            _id: false
        },
        required: [true, "Project manager is required."]
    },
    team: {
        type: [{
            userId: String,
            firstName: String,
            lastName: String,
            _id: false
        }],
        required: [true, "At least 1 team member required."]
    },
    tickets: {
        type: [String]
    }
}, { timestamps: true });

// Create Project Model
const Project = mongoose.model("Project", projectSchema);

// Exports
module.exports = { Project: Project }