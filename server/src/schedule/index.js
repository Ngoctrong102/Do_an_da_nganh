const schedule = require('node-schedule');
const Gardent = require('../models/Gardent.Model')
const Vegetable = require('../models/Vegetable.Model')
const Mqtt = require('../MQTT');
const job = schedule.scheduleJob('*/10 * * * *', async function() {
    var gardents = await Gardent.find().populate('current');
    gardents.forEach(async gardent => {
        var vege = await Vegetable.findById(gardent.current);
        var now = new Date();
        var hour = now.getHours();
        gardent.light = (hour - vege.light.from) * (vege.light.to - hour) * (vege.light.to - vege.light.from) >= 0;
        console.log(gardent.light);
        gardent.motor = vege.motor.includes(hour);
        Mqtt.publish('light', JSON.stringify({ code: gardent.code, on: gardent.light }))
        Mqtt.publish('motor', JSON.stringify({ code: gardent.code, on: gardent.motor }))
        gardent.save();
    });
});

module.exports = job;