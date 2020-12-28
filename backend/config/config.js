require("dotenv").config();

module.exports = {
    DB: process.env.MONGODB_URI,
    PORT: process.env.PORT,
    SECRET: process.env.JWT_SECRET
};