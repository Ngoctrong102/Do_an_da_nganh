const VegetableService = require("../services/Vegetable.Service");

module.exports = {
    add: async(req, res) => {
        var respone = await VegetableService.add(req.body.vegetable);
        res.json(respone);
    },
    getAll: async(req, res) => {
        var vegetables = await VegetableService.getAll();
        res.json(vegetables);
    }
}