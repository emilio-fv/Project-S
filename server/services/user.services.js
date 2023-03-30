// Import User Model
const { User } = require('../models/user.model');

// Create User
const createUser = async (data) => {
    console.log("service: createUser");
    const newUser = await User.create(data);
    return newUser;
};

// Get All Users
const getAllUsers = async () => {
    console.log("service: getAllUsers");
    const allUsers = await User.find();
    return allUsers;
};

// Get User By Id
const getUserById = async (id) => {
    console.log("service: getUserById")
    const oneUser = await User.findById(id);
    return oneUser;
};

// Get User By Email
const getUserByEmail = async (email) => {
    console.log("service: getUserByEmail");
    const oneUser = await User.findOne({ email: email });
    return oneUser;
};

// Update User By Id
const updateUserById = async (id, data) => {
    console.log("service: updateUserById");
    const updatedUser = await User.findByIdAndUpdate({ _id: id }, data, { new: true, runValidators: true });
    return updatedUser;
};

// Delete User By Id
const deleteUserById = async (id) => {
    console.log("service: deleteUserById");
    const deletedUser = await User.findByIdAndDelete({ _id: id });
    return deletedUser;
};

// Exports
module.exports = {
    createUser: createUser,
    getAllUsers: getAllUsers,
    getUserById: getUserById,
    getUserByEmail: getUserByEmail,
    updateUserById: updateUserById,
    deleteUserById: deleteUserById
};