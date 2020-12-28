const multer = require('multer');

module.exports.programs = function (req, res, next) {
    try {
        let storage = multer.diskStorage({
            destination: 'public/',
            filename: (req, file, cb) => {
                cb(null, Date.now() + '-' + file.originalname);
            }
        })
        let upload = multer({ storage: storage }).any('programs')
        console.log(upload);
        req.file = upload;
        next()
    } catch (error) {
        res.status(400).json({ message: error.message });
    }

}