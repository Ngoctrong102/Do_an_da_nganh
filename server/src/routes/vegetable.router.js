const VegetableController = require('../controllers/Vegetable.Controller');

var router = require('express').Router();

router.get('/', VegetableController.getAll)

router.post('/', VegetableController.add)

router.delete('/:_id', VegetableController.delete)

router.put('/:_id', VegetableController.update)

router.post('/change', VegetableController.changeCurrent)

module.exports = router;