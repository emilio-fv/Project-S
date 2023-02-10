// Import Express, JWT Authenticate Function, User Controller Methods
const express = require('express');
const { authenticate } = require('../config/jwt.config');
const {
    handleDeleteUserById,
    handleGetAllUsers,
    handleLoggedInUserCheck,
    handleLoginUser,
    handleLogoutUser,
    handleRegisterUser
} = require('../controllers/user.controller');

// Create Router
const router = express.Router();

// User API Routes
router.get('/allUsers', authenticate, handleGetAllUsers);
router.post('/register', handleRegisterUser);
router.post('/login', handleLoginUser);
router.get('/logout', handleLogoutUser);
router.get('/loggedInCheck', handleLoggedInUserCheck);
router.delete('/:id/delete', authenticate, handleDeleteUserById);

// Exports
module.exports = { userRouter: router };