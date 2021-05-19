var express = require('express');
var router = express.Router();
var UserController = require('../controllers/User.Controller');


// var upload = require('../helpers/upload');
// const checkAuth = require('../middleware/checkAuth');

// router.get('/searchFriends', checkAuth, UserController.searchFriends)

router.post('/fetchInfor', UserController.fetchInfor)

router.post('/login', UserController.login);

router.post('/signup', UserController.signUp);

router.post('/addQR', UserController.addQR);
// router.post('/profile/update', checkAuth, upload.single('avatar'), UserController.updateProfile);

module.exports = router;