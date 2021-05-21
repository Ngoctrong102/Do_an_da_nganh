var mqtt = require('mqtt')
var client = mqtt.connect('ws://192.168.0.102:9000/')

client.on('connect', function() {
    console.log('connected');
    client.subscribe('light', function(err) {
            if (err) {
                console.log(err);
            }
        })
        // setInterval(() => {
        //     client.publish('light', JSON.stringify({ code: 'hello', on: true }))
        // }, 3000)
})
var code = "hello";
client.on('message', function(topic, message) {
    // message is Buffer
    var data = JSON.parse(message);
    // console.log(data)
    if (code == data.code) {
        switch (topic) {
            case 'light':
                {
                    console.log(topic + ' : ' + message.toString())
                    break;
                }
        }
    }

})