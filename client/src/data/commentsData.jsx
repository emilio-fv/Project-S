function createComment(id, text, userId, createdAt) {
    return { id, text, userId, createdAt }
};

const sampleComments = [
    createComment(1, "Lorem ipsum dolor", 1, new Date("2015-03-25T12:00:00-06:00")),
    createComment(1, "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ", 1, new Date("2015-03-25T12:00:00-06:00")),
    createComment(1, "Lorem ipsum dolor sit amet, consectetur adipiscing elit", 1, new Date("2015-03-25T12:00:00-06:00")),
    createComment(1, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 1, new Date("2015-03-25T12:00:00-06:00")),
    createComment(1, "Ut enim ad minim veniam", 1, new Date("2015-03-25T12:00:00-06:00")),
    createComment(1, "Lorem ipsum dolor", 1, new Date("2015-03-25T12:00:00-06:00")),
    createComment(1, "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ", 1, new Date("2015-03-25T12:00:00-06:00")),
    createComment(1, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 1, new Date("2015-03-25T12:00:00-06:00")),
    createComment(1, "Excepteur sint occaecat cupidatat non", 1, new Date("2015-03-25T12:00:00-06:00")),
    createComment(1, "Lorem ipsum dolor sit amet, consectetur adipiscing elit", 1, new Date("2015-03-25T12:00:00-06:00")),
    createComment(1, "Ut enim ad minim veniam", 1, new Date("2015-03-25T12:00:00-06:00")),
    createComment(1, "Lorem ipsum dolor", 1, new Date("2015-03-25T12:00:00-06:00")),
    createComment(1, "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ", 1, new Date("2015-03-25T12:00:00-06:00")),
    createComment(1, "Lorem ipsum dolor sit amet, consectetur adipiscing elit", 1, new Date("2015-03-25T12:00:00-06:00")),
]

export default sampleComments;