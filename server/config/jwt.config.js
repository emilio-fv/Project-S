// Import JWT
const jwt = require('jsonwebtoken');

// Authenticate Function
const authenticate = (req, res, next) => {
    jwt.verify(req.cookies.userToken, process.env.SECRET_KEY, (err, payload) => {
        if (err) {
            res.status(401).json({ verified: false });
        } else {
            next();
        }
    })
};

// Exports
module.exports = { authenticate: authenticate };