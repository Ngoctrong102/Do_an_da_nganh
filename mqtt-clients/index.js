var mqtt = require('mqtt')
var client = mqtt.connect('ws://192.168.0.103:9000/')

client.on('connect', function() {
    client.subscribe('presence', function(err) {
        if (!err) {
            client.publish('presence', 'Hello mqtt')
        }
    })
})

client.subscribe('light1')
client.publish('light1', JSON.stringify(jfodofd))

// setInterval(() => {
//     client.publish('presence', 'test')
// }, 1000)
client.on('message', function(topic, message) {
    // message is Buffer
    console.log(topic + ' : ' + message.toString())
        // client.end()
})