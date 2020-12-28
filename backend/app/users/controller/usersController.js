const User = require('../models/usersM');

module.exports.verifyUser = async (req, res) => {
    res.json({ message: "sdsds", data: req.user });
}