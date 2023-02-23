// Imports Mongoose
const mongoose = require('mongoose');

// Project Schema
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
            _id: false
        },
        required: [true, "Project manager is required."]
    },
    team: {
        type: [String],
        validate: {
            validator: function(val) {
                return val.length != 0;
            },
            message: "Must select at least 1 team member."
        }
    },
    tickets: {
        type: [String]
    }
}, { timestamps: true });

// Create Project Model
const Project = mongoose.model("Project", projectSchema);

// Exports
module.exports = { Project: Project }