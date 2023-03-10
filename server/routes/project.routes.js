// Import Express, Project Controller Methods
const express = require('express');
const { authenticate } = require('../config/jwt.config');
const {
    handleCreateProject,
    handleGetManyProjects,
    handleGetAllProjects,
    handleUpdateProjectById,
    handleDeleteProjectById
} = require('../controllers/project.controller')

// Create Router
const router = express.Router();

// Project API Routes
router.post('/create', handleCreateProject); // ✅
router.get('/many', handleGetManyProjects); // ✅
router.get('/all', handleGetAllProjects); // ✅
router.post('/:id/update', handleUpdateProjectById); // ✅
router.delete('/:id', handleDeleteProjectById); // ✅ 

// Exports
module.exports = { projectRouter: router };
