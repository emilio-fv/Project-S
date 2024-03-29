// Import Express, Cors, Cookie-Parser, Routers (User, Project)
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const { userRouter } = require('./routes/user.routes');
const { projectRouter } = require('./routes/project.routes');
const { ticketRouter } = require('./routes/ticket.routes');
const { commentRouter } = require('./routes/comment.routes');

// Set Port #
const port = 8000;

// Import dotenv & Configure Environment Variables
require('dotenv').config();

// Import Mongoose Script
require('./config/mongoose.config');

// Create App
const app = express();

// Middleware
app.use(cookieParser());
app.use(cors({ 
    credentials: true, 
    origin: 'http://localhost:3000' 
}));
app.use(express.json());
app.use(express.urlencoded({ 
    extended: true 
}));
app.use('/api/users', userRouter);
app.use('/api/projects', projectRouter);
app.use('/api/tickets', ticketRouter);
app.use('/api/comments', commentRouter);

// Initialize Server
app.listen(port, () => {
    console.log(`You are listening on port ${port} for requests to respond to.`)
})