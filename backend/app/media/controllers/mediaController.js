
const { Media } = require('../models/mediaM');

module.exports.uploadProgramsIcon = async (req, res) => {

    const programIcon = await Media.create({
        destination: req.file.path,
        type: req.body.type
    })
    const result = await programIcon.save();
    res.send(result);

}