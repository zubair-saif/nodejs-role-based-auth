const mongoose = require('mongoose');

const schema = new mongoose.Schema({

    destination: {
        type: Array,
        required: true
    },
    type: {
        type: String,
    }
}, {
    versionKey: false
});


const Media = mongoose.model('media', schema);

module.exports.Media = Media;