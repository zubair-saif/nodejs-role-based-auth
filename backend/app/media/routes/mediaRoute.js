const express = require('express');
const router = express.Router();
const mediaController = require('../controllers/mediaController')
const multer = require('multer');

let storage = multer.diskStorage({
    destination: 'public/program/',
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
})
let upload = multer({ storage: storage }).single('programIcon')

router.post('/programs',
    upload,
    mediaController.uploadProgramsIcon);


module.exports = router;