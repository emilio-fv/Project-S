// Import Express, Comment Controller Methods
const express = require('express');
const { authenticate } = require('../config/jwt.config');
const {
    handleCreateComment,
    handleGetManyComments
} = require('../controllers/comment.controller');

// Create Router
const router = express.Router();

// Comment API Routes
router.post('/create', handleCreateComment);
router.get('/many', handleGetManyComments);

// Exports
module.exports = { commentRouter: router };