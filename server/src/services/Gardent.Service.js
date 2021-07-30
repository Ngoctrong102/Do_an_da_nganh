var Gardent = require('../models/Gardent.Model');
const Vegetable = require("../models/Vegetable.Model");

var Mqtt = require('../MQTT/index');

class GardentService {
    async newGardent(owner, code) {
        var gardent = new Gardent({ owner, code });
        gardent.save();
        return gardent;
    }
    async getInfo(owner, code) {
        var gardent = await Gardent.findOne({ owner, code });
        return gardent || null;
    }
    async changeVege(userID, code, vegeID) {
        var gardent = await Gardent.findOne({ owner: userID, code });
        console.log(userID, code)
        gardent.current = vegeID;

        var vege = await Vegetable.findOne({ _id: vegeID });

        var now = new Date();
        var hour = now.getHours();
        gardent.light = (hour - vege.light.from) * (vege.light.to - hour) * (vege.light.to - vege.light.from) >= 0;
        gardent.motor = vege.motor.includes(hour);

        Mqtt.publish('light', JSON.stringify({ code, on: gardent.light }))
        Mqtt.publish('motor', JSON.stringify({ code, on: gardent.motor }))

        gardent.save();
        console.log({ gardent })
        return true;
    }
    async toggleLight(code, light) {
        var result = await Gardent.updateOne({ code }, { light });
        Mqtt.publish('light', JSON.stringify({ code, on: light }))
        return result;
    }
    async toggleMotor(code, motor) {
        var result = await Gardent.updateOne({ code }, { motor });
        Mqtt.publish('motor', JSON.stringify({ code, on: motor }))
        return result;
    }
    async update(code, data) {
        var result = await Gardent.updateOne({ code }, data)
        return result;
    }
}

module.exports = new GardentService();