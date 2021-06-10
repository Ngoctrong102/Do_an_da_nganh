const GardentController = require('../controllers/Gardent.controller');

var router = require('express').Router();

router.get('/getInfo', GardentController.getInfo);

router.post('/changeVege', GardentController.changeVege);

router.post('/light', GardentController.toggleLight);
router.post('/motor', GardentController.toggleMotor);

module.exports = router;