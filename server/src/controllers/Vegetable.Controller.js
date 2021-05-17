const VegetableService = require("../services/Vegetable.Service");

module.exports = {
    add: async(req, res) => {
        console.log("thông tin nè", req.user)
        var respone = await VegetableService.add({...req.body.vegetable, owner: req.user._id });
        res.json(respone);
    },
    getAll: async(req, res) => {
        var vegetables = await VegetableService.getAll();
        res.json(vegetables);
    }
}