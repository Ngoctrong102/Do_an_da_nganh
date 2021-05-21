const ControllerController = require('../controllers/Controller.controller');

var router = require('express').Router();

router.post('/light', ControllerController.toggleLight);

module.exports = router;