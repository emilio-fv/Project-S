// Import Project Model
const { Project } = require('../models/project.model');
const { User } = require('../models/user.model');

// Create Project
const createProject = async (data) => {
    console.log("service: createProject");
    const newProject = await Project.create(data);
    let ids = [
        newProject.projectManager.userId
    ]
    newProject.team.forEach((value) => ids.push(value));
    const updatedUsers = await User.updateMany({ _id: { $in: ids }}, { $push: { projects: newProject._id }})
    return { 
        newProject: newProject, 
        updatedUsers: updatedUsers 
    };
}

// Get Many Projects
const getManyProjects = async (ids) => {
    console.log("service: getManyProjects");
    const selectedProjects = await Project.find({ '_id': { $in: ids } });
    return selectedProjects;
}

// Get All Projects
const getAllProjects = async () => {
    console.log("service: getAllProjects");
    const allProjects = await Project.find();
    return allProjects
}

// Update Project By Id
const updateProjectById = async (id, data) => {
    console.log("service: updateProjectById");
    const updatedProject = await Project.findByIdAndUpdate({ _id: id }, data, { new: true });
    console.log(updatedProject);
    return updatedProject;
}

// Delete Project By Id
const deleteProjectById = async (id) => {
    console.log("service: deleteProject");
    const deletedUser = await Project.findByIdAndDelete({ _id: id });
    return deletedUser;
}

// Exports
module.exports = {
    createProject: createProject,
    getManyProjects: getManyProjects,
    getAllProjects: getAllProjects,
    updateProjectById: updateProjectById,
    deleteProjectById: deleteProjectById
}