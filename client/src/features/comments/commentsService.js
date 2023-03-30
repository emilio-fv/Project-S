import axios from 'axios';

const API_URL = 'http://localhost:8000/api/comments/';

// Create Comment
const createComment = async (commentData) => {
    const response = await axios.post(API_URL + 'create', commentData, { withCredentials: true });
    console.log(response.data);
    return response.data.newComment;
};

// Get Many Comments
const getManyComments = async (ids) => {
    const response = await axios.get(API_URL + 'many', { params: ids }, { withCredentials: true });
    return response.data;
};

// Exports
const commentsService = {
    createComment,
    getManyComments
};

export default commentsService;