import axios from "axios";

const API_URL = 'http://localhost:8000/api/users/';

// Get All Personnel
const fetchAllPersonnel = async () => {
    const response = await axios.get(API_URL + 'allUsers', { withCredentials: true });
    console.log(response)
    return response.data;
};

const personnelService = {
    fetchAllPersonnel
};

export default personnelService;