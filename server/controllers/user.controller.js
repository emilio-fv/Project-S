// Import Model Methods, JWT, Bcrypt
const {
    createUser,
    getAllUsers,
    getUserByEmail,
    getUserById,
    updateUserById,
    deleteUserById
} = require('../services/user.services');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// Register User
const handleRegisterUser = async (req, res) => {
    console.log("controller: handleRegisterUser req.body: ", req.body);
    try {
        // Check If Email Registered
        const userWithSameEmail = await getUserByEmail(req.body.email);
        // If Email Not Registered
        if (userWithSameEmail === null) {
            // Create New User
            const newUser = await createUser(req.body);
            // Generate Access Token
            const userToken = jwt.sign({
                id: newUser._id
            }, process.env.SECRET_KEY);
            // Return Response With Cookie
            return res.cookie("userToken", userToken, process.env.SECRET_KEY, {
                httpOnly: true
            }).json({
                _id: newUser._id,
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                admin: newUser.admin,
                projects: newUser.projects,
                tickets: newUser.tickets
            });
        } else {
            // If Email Already Registered
            return res.status(400).json({ errors: { email: { message: "Email is already registered."}}});
        }
    } catch (error) {
        return res.status(400).json(error);
    }
};

// Login User
const handleLoginUser = async (req, res) => {
    console.log("controller: handleLoginUser req.body: ", req.body);
    try {
        // Check Email
        const userWithSameEmail = await getUserByEmail(req.body.email);
        // If No User With Same Email
        if (userWithSameEmail === null) {
            return res.status(400).json({ error: "Invalid login." });
        }
        // Check Password
        const correctPassword = await bcrypt.compare(req.body.password, userWithSameEmail.password);
        // If Incorrect Password
        if (!correctPassword) {
            return res.status(400).json({ error: "Invalid login."});
        }
        // Generate Access Token
        const userToken = jwt.sign({
            id: userWithSameEmail._id
        }, process.env.SECRET_KEY);
        // Return Response With Cookie
        return res.cookie("userToken", userToken, process.env.SECRET_KEY, {
            httpOnly: true
        }).json({
            _id: userWithSameEmail._id,
            firstName: userWithSameEmail.firstName,
            lastName: userWithSameEmail.lastName,
            admin: userWithSameEmail.admin,
            projects: userWithSameEmail.projects,
            tickets: userWithSameEmail.tickets
        });
    } catch (error) {
        return res.status(400).json(error);
    }
};

// Logout User
const handleLogoutUser = async (req, res) => {
    console.log("controller: handleLogoutUser");
    // Clear Cookie
    res.clearCookie("userToken");
    // Return Status
    res.sendStatus(200);
};

// Check If User Logged In
const handleLoggedInUserCheck = async (req, res) => {
    console.log("controller: handleLoggedInUserCheck");
    try {
        // Decode Access Token
        const decodedJwt = jwt.decode(req.cookies.userToken, { complete: true });

        // If User Not Logged In
        if (decodedJwt === null) {
            return res.json(null);
        }

        // Get User By Id
        const foundUser = await getUserById(decodedJwt.payload.id);

        // If User Logged In
        return res.json({
            _id: foundUser._id,
            firstName: foundUser.firstName,
            lastName: foundUser.lastName,
            admin: foundUser.admin,
            projects: foundUser.projects,
            tickets: foundUser.tickets
        });
    } catch (error) {
        return res.status(400).json(error);
    }
};

// Get All Users
const handleGetAllUsers = async (req, res) => {
    console.log("controller: handleGetAllUsers");
    try {
        // Get All Users
        const response = await getAllUsers();
        let allUsers = [];
        for (let row of response) {
            allUsers.push({
                _id: row._id,
                firstName: row.firstName,
                lastName: row.lastName,
                phone: row.phone,
                email: row.email,
                admin: row.admin,
                projects: row.projects,
                tickets: row.tickets
            })
        }
        // Return Response With Users Data
        return res.json(allUsers);
    } catch (error) {
        return res.status(400).json(error);
    }
};

// Get User By Id
const handleGetUserById = async (req, res) => {
    console.log("controller: handleGetUserById req.body:", req.body);
    try {
        const oneUser = await getUserById(req.body.id);
        return res.json(oneUser);
    } catch (error) {
        return res.status(400).json(error);
    }
};

// Update User By Id
const handleUpdateUserById = async (req, res) => {
    console.log(`controller: handleUpdateUserById req.params: ${req.params.id} req.body: ${req.body}`);
    try {
        const updatedUser = await updateUserById(req.params.id, req.body);
        return res.json({
            _id: updatedUser._id,
            firstName: updatedUser.firstName,
            lastName: updatedUser.lastName,
            phone: updatedUser.phone,
            email: updatedUser.email,
            admin: updatedUser.admin,
            projects: updatedUser.projects,
            tickets: updatedUser.tickets
        });
    } catch (error) {
        return res.status(400).json(error);
    }
};

// Delete User
const handleDeleteUserById = async (req, res) => {
    console.log("controller: handledDeleteUserById req.params: ", req.params.id);
    try {
        // Delete User
        const deletedUser = await deleteUserById(req.params.id);
        // Return Response
        return res.json(deleteUserById);
    } catch (error) {
        return res.status(400).json(error);
    }
};

// Exports
module.exports = {
    handleDeleteUserById: handleDeleteUserById,
    handleGetAllUsers: handleGetAllUsers,
    handleLoggedInUserCheck: handleLoggedInUserCheck,
    handleLoginUser: handleLoginUser,
    handleLogoutUser: handleLogoutUser,
    handleRegisterUser: handleRegisterUser,
    handleUpdateUserById: handleUpdateUserById,
    handleGetUserById: handleGetUserById
};