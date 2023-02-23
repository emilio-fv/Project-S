import axios from "axios";

const API_URL = '/api/users/';

// Get All Personnel
const fetchAllPersonnel = async () => {
    const response = await axios.get(API_URL + 'allUsers', { withCredentials: true });
    return response.data;
};

const personnelService = {
    fetchAllPersonnel
};

export default personnelService;