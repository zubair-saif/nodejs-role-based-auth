const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
const { validate, User } = require('../models/usersM');
const { SECRET } = require('../../../config/config');


module.exports.login = async (req, res) => {

    try {
        const result = validate(req.body);
        if (result.error) {
            res.status(400).json({ message: result.error.details[0].message });
            return;
        }
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            res.status(400).json({ message: 'Invalid email or password!' });
            return;
        }
        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if (!validPassword) {
            res.status(400).json({ message: 'Invalid email or password!' });
            return;
        }

        const token = jwt.sign({
            _id: user._id,
            email: user.email,
            isAdmin: user.isAdmin
        }, SECRET, {
            expiresIn: 80 * 60 * 24 // 1 oneday, 
        })

        res.json({ token: token, id: user._id, isadmin: user.isadmin });
    } catch (e) {
        res.json({ message: 'something went wrong..' + e })
    }

}

function Validate(user) {
    const schema = {
        email: Joi.required(),
        password: Joi.required()
    };
    return Joi.validate(user, schema);


} 