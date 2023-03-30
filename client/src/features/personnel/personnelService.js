import axios from "axios";

const API_URL = 'http://localhost:8000/api/users/';

// Get All Personnel
const fetchAllPersonnel = async () => {
    const response = await axios.get(API_URL + 'allUsers', { withCredentials: true });
    return response.data;
};

// Update Personnel
const updatePersonnel = async (userData) => {
    const response = await axios.patch(API_URL + userData._id + '/update', userData, { withCredentials: true });
    console.log(response.data);
    return response.data;
};

const personnelService = {
    fetchAllPersonnel,
    updatePersonnel
};

export default personnelService;