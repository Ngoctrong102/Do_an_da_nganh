const ControllerController = require('../controllers/Controller.controller');

var router = require('express').Router();

router.post('/light', ControllerController.toggleLight);
router.post('/motor', ControllerController.toggleMotor);

module.exports = router;