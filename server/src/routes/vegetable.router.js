const VegetableController = require('../controllers/Vegetable.Controller');

var router = require('express').Router();

router.get('/', VegetableController.getAll)

router.post('/', VegetableController.add)

module.exports = router;