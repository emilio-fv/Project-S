// Import Project, User Model
const { Project } = require('../models/project.model');
const { User } = require('../models/user.model');

// Create Project
const createProject = async (data) => {
    console.log("service: createProject");
    // Create instance of new project & populate PM & team fields
    let newProject = await Project.create(data);
    newProject = await (await newProject.populate('projectManager', ['firstName', 'lastName'])).populate('team', ['firstName', 'lastName']);

    // Extract user ids to update user project []
    let ids = newProject.team.map((value) => value);
    ids = [
        ...ids,
        newProject.projectManager
    ];

    // Update users
    const updatedUsers = await User.updateMany({ _id: { $in: ids }}, { $push: { projects: newProject._id }})
    return { 
        newProject: newProject, 
        updatedUsers: updatedUsers 
    };
}

// Get Many Projects
const getManyProjects = async (ids) => {
    console.log("service: getManyProjects");
    const selectedProjects = await Project
        .find({ '_id': { $in: ids } })
        .populate('projectManager', ['firstName', 'lastName'])
        .populate('team', ['firstName', 'lastName'])
        .populate({ path: 'tickets', populate: { path: 'assignedUser', select: ['firstName', 'lastName']}})
    return selectedProjects;
}

// Get All Projects
const getAllProjects = async () => {
    console.log("service: getAllProjects");
    const allProjects = await Project.find()
        .populate('projectManager', ['firstName', 'lastName'])
        .populate('team', ['firstName', 'lastName'])
        .populate({ path: 'tickets', populate: { path: 'assignedUser', select: ['firstName', 'lastName']}})
    return allProjects
}

// Update Project By Id
const updateProjectById = async (id, data) => {
    console.log("service: updateProjectById");
    const updatedProject = await Project.findByIdAndUpdate({ _id: id }, data, { new: true });
    return updatedProject;
}

// Delete Project By Id
const deleteProjectById = async (id) => {
    console.log("service: deleteProject");
    const deletedProject = await Project.findByIdAndDelete({ _id: id });
    // Extract user ids to update
    let ids = deletedProject.team.map((value) => value);
    ids = [
        ...ids,
        deletedProject.projectManager
    ]

    // Update users projects
    const updatedUsers = await User.updateMany({ _id: { $in: ids }}, { $pull: { projects: deletedProject._id } });
    return {
        deletedProject: deletedProject,
        updatedUsers: updatedUsers
    };
}

// Exports
module.exports = {
    createProject: createProject,
    getManyProjects: getManyProjects,
    getAllProjects: getAllProjects,
    updateProjectById: updateProjectById,
    deleteProjectById: deleteProjectById
}