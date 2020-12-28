const bcrypt = require('bcrypt');
const { User, validate } = require('../models/usersM');

module.exports.register = async (req, res) => {

    try {
        const result = validate(req.body);
        if (result.error) {
            res.status(400).json({ message: result.error.details[0].message });
            return;
        }

        const user = await User.findOne({ email: req.body.email });
        if (user) {
            res.status(400).json({ message: 'This email is already registered!' });
            return;
        }
        const salt = await bcrypt.genSalt(10);

        const register = await User.create({
            firstName: req.body.firstName,
            firstName: req.body.lastName,
            email: req.body.email,
            bio: req.body.bio,
            password: await bcrypt.hash(req.body.password, salt)
        });
        register.save();
        res.json({ message: 'Successfully registered!...' });

    } catch (e) {
        res.json({ message: 'something went wrong..' + e });
    }

}


