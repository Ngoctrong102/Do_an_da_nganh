const schedule = require('node-schedule');
const Gardent = require('../models/Gardent.Model')
const Mqtt = require('../MQTT');
const job = schedule.scheduleJob('* * * *', async function() {
    var gardents = await Gardent.find().populate('current');
    gardents.forEach(gardent => {
        if (gardent.vege) {
            var vege = gardent.current;
            var now = new Date();
            var hour = now.getHours();
            gardent.light = (hour - vege.light.from) * (vege.light.to - hour) * (vege.light.to - vege.light.from) > 0;
            gardent.motor = vege.motor.includes(hour);

            Mqtt.publish('light', JSON.stringify({ code: gardent.code, on: gardent.light }))
            Mqtt.publish('motor', JSON.stringify({ code: gardent.code, on: gardent.motor }))

            gardent.save();
        }
    });
});

module.exports = job;