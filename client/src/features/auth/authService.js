import axios from 'axios';

const API_URL = 'http://localhost:8000/api/users/';

// Register User
const register = async (userData) => {
    const response = await axios.post(API_URL + 'register', userData, { withCredentials: true })
    return response.data;
};

// Login User
const login = async (userData) => {
    const response = await axios.post(API_URL + 'login', userData, { withCredentials: true })
    return response.data;
};

// Logged In User CHeck
const loggedInUserCheck = async () => {
    const response = await axios.get(API_URL + 'loggedInCheck', { withCredentials: true })
    return response.data;
};

// Logout User
const logout = async () => {
    const response = await axios.get(API_URL + 'logout', { withCredentials: true })
    return response;
};

const authService = {
    register,
    login,
    logout,
    loggedInUserCheck
};

export default authService;