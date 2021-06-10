var mqtt = require('mqtt')
var client = mqtt.connect('ws://localhost:9000/');
var Gardent = require('../models/Gardent.Model');
client.on("connect", (packet) => {
    console.log("Connected broker");
})


client.subscribe('light')
client.subscribe('motor')
client.subscribe('temp')
client.subscribe('humidity')



client.on('message', async(topic, payload) => {
    payload = JSON.parse(payload);
    // console.log(payload)
    switch (topic) {
        case "temp":
            {
                await Gardent.updateOne({ code: payload.code }, { $set: { temp: payload.temp } });
                // console.log(res)
                break;
            }

        case "humidity":
            {
                await Gardent.updateOne({ code: payload.code }, { $set: { humidity: payload.humidity } });
                // console.log(res)
                break;
            }
        default:
            break;
    }
})

module.exports = client;