import axios from 'axios';

const API_URL = 'http://localhost:8000/api/projects/';

// Create Project
const createProject = async (projectData) => {
    const response = await axios.post(API_URL + 'create', projectData, { withCredentials: true })
    return response.data;
}

// Get Many Projects
const fetchManyProjects = async (ids) => {
    const response = await axios.get(API_URL + 'many', { params: ids }, { withCredentials: true })
    return response.data;
}

// Get All Projects
const getAllProjects = async () => {
    const response = await axios.get(API_URL + 'all', { withCredentials: true })
    return response.data;
}

// Update Project
const updateProject = async (id, projectData) => {
    const response = await axios.post(API_URL + id + '/update', projectData, { withCredentials: true })
    return response.data;
}

// Delete Project
const deleteProject = async (id) => {
    const response = await axios.delete(API_URL + id, { withCredentials: true })
    return response;
}

const projectsService = {
    createProject,
    fetchManyProjects,
    getAllProjects,
    updateProject,
    deleteProject
}

export default projectsService;