const express = require('express');
const router = express.Router();
const postController = require('../controller/postController');
const auth = require('../../../middleware/passport');
const multer = require('multer');

const MIME_TYPE_MAP = {
    "image/png": "png",
    "image/jpeg": "jpg",
    "image/jpg": "jpg"
};

const storage = multer.diskStorage({
    destination: "backend/uploads",
    filename: (req, file, cb) => {
        const name = file.originalname
            .toLowerCase()
            .split(" ")
            .join("-");
        const ext = MIME_TYPE_MAP[file.mimetype];
        cb(null, Date.now() + "." + ext);
    }
});
const upload = multer({ storage: storage });

router.post('/create', auth, upload.single('image'), postController.create);
router.put('/update/:id', upload.single('image'), postController.update);
router.get('/:id', postController.getOne);
router.get('/', postController.getPost);
router.delete('/:id', auth, postController.delete);

module.exports = router;