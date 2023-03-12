// Import Model Methods
const {
    createProject,
    getOneProject,
    getManyProjects,
    getAllProjects,
    updateProjectById,
    deleteProjectById
} = require('../services/project.services');

// Create Project
const handleCreateProject = async (req, res) => {
    console.log("controller: handleCreateProject req.body: ", req.body);
    try {
        // Create New Project
        const response = await createProject(req.body);
        // Return Response
        return res.json(response);
    } catch (error) {
        return res.status(400).json(error);
    }
};

// Get One Project
const handleGetOneProject = async (req, res) => {
    console.log("controller: handleGetOneProject req.params: ", req.params);
    try {
        const response = await getOneProject(req.params.id);
        return res.json(response);
    } catch (error) {
        return res.status(400).json(error);
    }
}
// Get Many Projects 
const handleGetManyProjects = async (req, res) => {
    console.log("controller: handleGetManyProjects req.query: ", req.query);
    try {
        const selectedProjects = await getManyProjects(req.query.ids);
        return res.json(selectedProjects);
    } catch (error) {
        return res.status(400).json(error);
    }
}

// Get All Projects 
const handleGetAllProjects = async (req, res) => {
    console.log("controller: handleGetAllProjects");
    try {
        const allProjects = await getAllProjects();
        return res.json(allProjects);
    } catch (error) {
        return res.status(400).json(error);
    }
}

// Update Project 
const handleUpdateProjectById = async (req, res) => {
    console.log(`controller: handleUpdateProjectById req.params: ${req.params.id} req.body: ${req.body}`);
    try {
        const updatedProject = await updateProjectById(req.params.id, req.body);
        return res.json(updatedProject);
    } catch (error) {
        return res.status(400).json(error);
    }
}

// Delete Project
const handleDeleteProjectById = async (req, res) => {
    console.log("controller: handleDeleteProject req.params: ", req.params.id);
    try {
        const deletedProject = await deleteProjectById(req.params.id);
        return res.json(deletedProject);
    } catch (error) {
        return res.status(400).json(error);
    }
}

// Exports
module.exports = {
    handleCreateProject: handleCreateProject,
    handleGetOneProject: handleGetOneProject,
    handleGetManyProjects: handleGetManyProjects,
    handleGetAllProjects: handleGetAllProjects,
    handleUpdateProjectById: handleUpdateProjectById,
    handleDeleteProjectById, handleDeleteProjectById
}