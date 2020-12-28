const mongoose = require('mongoose');
const joi = require('joi');

const schema = new mongoose.Schema({

    firstName: {
        type: String,
    },
    lastName: {
        type: String
    },
    email: {
        type: String,
        unique: true,
        trim: true,
        lowercase: true,
        required: true
    },
    password: {
        type: String,
        required: true,
    },
    bio: {
        type: String
    },
    isadmin: {
        type: Boolean,
        default: false,
    },

}, { versionKey: false, timestamps: true });


function validate(users) {
    const schema = joi.object({
        firstName: joi.string().optional(),
        lastName: joi.string().optional(),
        email: joi.string().email().required(),
        password: joi.string().required(),
        bio: joi.string().optional(),
        isadmin: joi.boolean(),
    });
    return schema.validate(users);
}

const User = mongoose.model('users', schema);
module.exports.validate = validate;
module.exports.User = User;