const VegetableService = require("../services/Vegetable.Service");
var Mqtt = require('../MQTT/index');
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
    },
    changeVege: async(req, res) => {
        var vege = await VegetableService.changeVege(req.user._id, req.body.id);
        var now = new Date();
        if ((now.getHours() - vege.light.from) * (vege.light.to - now.getHours()) * (vege.light.to - vege.light.from) > 0)
            Mqtt.publish('light', JSON.stringify({ code: req.user.codeMicrobit, on: true }))
        else Mqtt.publish('light', JSON.stringify({ code: req.user.codeMicrobit, on: false }))
        res.json({ success: true });
    }
}