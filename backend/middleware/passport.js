const jwt = require("jsonwebtoken");
const { SECRET } = require('../config/config');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        req.user = jwt.verify(token, SECRET);
        next();
    } catch (error) {
        res.status(401).json({ message: "Auth failed!" });
    }
};