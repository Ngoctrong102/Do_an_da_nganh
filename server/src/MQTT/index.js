var mqtt = require('mqtt')
var client = mqtt.connect('ws://localhost:9000/');


client.subscribe('light')
client.subscribe('motor')
client.on('message', (topic, payload) => {
    console.log(topic + ':' + payload)
})

module.exports = client;