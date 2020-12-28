const jwt = require("jsonwebtoken");
const { SECRET } = require('../config/config');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const decodedToken = jwt.verify(token, SECRET);
        req.user = { email: decodedToken.email, id: decodedToken._id };
        next();
    } catch (error) {
        res.status(401).json({ message: "Auth failed!" });
    }
};