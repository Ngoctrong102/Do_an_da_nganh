var mqtt = require('mqtt')
var client = mqtt.connect('ws://localhost:9000/');
var Gardent = require('../models/Gardent.Model');
var Vegetable = require('../models/Vegetable.Model');
client.on("connect", (packet) => {
    console.log("Connected broker");
})


client.subscribe('light')
client.subscribe('motor')
client.subscribe('temp')
client.subscribe('humidity')



client.on('message', async(topic, payload) => {
    payload = JSON.parse(payload);
    switch (topic) {
        case "temp":
            {
                var gardent = await Gardent.findOne({ code: payload.code });
                gardent.temp = payload.temp;
                var currentVege = await Vegetable.findOne({ _id: gardent.current });
                if (payload.temp < currentVege.temp.from) {
                    gardent.light = true;
                    client.publish('light', JSON.stringify({ code: payload.code, on: true }))
                }
                gardent.save();
                break;
            }

        case "humidity":
            {
                var gardent = await Gardent.findOne({ code: payload.code });
                gardent.humidity = payload.humidity;
                var currentVege = await Vegetable.findOne({ _id: gardent.current });
                if (payload.humidity < currentVege.humidity.from) {
                    gardent.motor = true;
                    client.publish('motor', JSON.stringify({ code: payload.code, on: true }))
                } else if (payload.humidity > currentVege.humidity.to) {
                    gardent.motor = false;
                    client.publish('motor', JSON.stringify({ code: payload.code, on: false }))
                }
                gardent.save();
                break;
            }
        default:
            break;
    }
})

module.exports = client;