const express = require('express');
const router = express.Router();
const usersController = require('../controller/usersController');
const loginController = require('../controller/loginController');
const registrationController = require('../controller/registerController');
const auth = require('../../../middleware/passport');

router.post('/login', loginController.login);

router.post('/register', registrationController.register);

router.get('/verifyUsers', auth, usersController.verifyUser);

module.exports = router;