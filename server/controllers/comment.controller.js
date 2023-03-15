// Import Comment Services
const {
    createComment,
    getManyComments
} = require('../services/comment.services');

// Create Comment
const handleCreateComment = async (req, res) => {
    console.log("controller: handleCreateComment req.body: ", req.body);
    try {
        const response = await createComment(req.body);
        return res.json(response);
    } catch (error) {
        return res.status(400).json(error);
    }
};

// Get Many Comments
const handleGetManyComments = async (req, res) => {
    console.log("controller: handleGetManyComments req.query: ", req.query);
    try {
        const response = await getManyComments(req.query.ids);
        return res.json(response);
    } catch (error) {
        return res.status(400).json(error);
    }
};

// Exports
module.exports = {
    handleCreateComment: handleCreateComment,
    handleGetManyComments: handleGetManyComments
};