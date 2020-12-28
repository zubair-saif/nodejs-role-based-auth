const mongoose = require('mongoose');
const joi = require('joi');

const schema = new mongoose.Schema({

    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
        min: 10
    },
    author: {
        type: String,
        required: true,
        min: 3
    },
    type: {
        type: String,
        required: true,
        min: 3
    },
    pages: {
        type: String,
        required: true
    },
    imagePath: {
        type: String, default: ""
    }

}, { versionKey: false, timestamps: true });


function validate(users) {
    const schema = joi.object({
        title: joi.string().required(),
        description: joi.string().required().min(10),
        author: joi.string().required().min(3),
        type: joi.string().required().min(3),
        pages: joi.string().required(),
        imagePath: joi.string(),
    });
    return schema.validate(users);
}

const Post = mongoose.model('post', schema);
module.exports.validate = validate;
module.exports.Post = Post;