var mqtt = require('mqtt')
var client = mqtt.connect('ws://localhost:9000/')


var CODE = "dadn"

client.on('connect', function() {
    console.log('connected');
    client.subscribe('light', function(err) {
        if (err) {
            console.log(err);
        }
    })
    client.subscribe('motor', function(err) {
        if (err) {
            console.log(err);
        }
    })
    client.subscribe('temp', function(err) {
        if (err) {
            console.log(err);
        }
    })
    client.subscribe('humidity', function(err) {
        if (err) {
            console.log(err);
        }
    })
    setInterval(() => {
        client.publish('temp', JSON.stringify({ code: CODE, temp: parseInt(Math.random() * 20 - 10 + 25) }))
    }, 10000)
    setInterval(() => {
        client.publish('humidity', JSON.stringify({ code: CODE, humidity: parseInt(Math.random() * 20 - 10 + 25) }))
    }, 10000)
})
var code = CODE;
client.on('message', function(topic, message) {
    // message is Buffer
    var data = JSON.parse(message);
    // console.log(data)
    if (code == data.code) {
        switch (topic) {
            case 'light':
                {
                    console.log(topic + ' : ' + message.toString());
                    break;
                }
            case 'motor':
                {
                    console.log(topic + ' : ' + message.toString());
                    break;
                }
            case 'temp':
                {
                    console.log(topic + ' : ' + message.toString());
                    break;
                }
            case 'humidity':
                {
                    console.log(topic + ' : ' + message.toString());
                    break;
                }
        }
    }

})