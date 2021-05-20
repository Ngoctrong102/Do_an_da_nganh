const VegetableService = require("../services/Vegetable.Service");
module.exports = {
    add: async(req, res) => {
        console.log("thông tin nè", req.user)
        var respone = await VegetableService.add({...req.body.vegetable, owner: req.user._id });

        res.json(respone);
    },
    getAll: async(req, res) => {
        var vegetables = await VegetableService.getAll(req.user._id);
        res.json(vegetables);
    },
    delete: async(req, res) => {
        var respone = await VegetableService.delete(req.params._id, req.user._id);
        res.json(respone);
    },
    update: async(req, res) => {
        var respone = await VegetableService.update(req.params._id, req.body.vege);
        res.json(respone);
    }
}