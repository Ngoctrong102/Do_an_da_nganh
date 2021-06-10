var mqtt = require('mqtt')
var client = mqtt.connect('ws://localhost:9000/')

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
        client.publish('temp', JSON.stringify({ code: 'hello', temp: parseInt(Math.random() * 10 - 5 + 25) }))
    }, 5000)
    setInterval(() => {
        client.publish('humidity', JSON.stringify({ code: 'hello', humidity: parseInt(Math.random() * 10 - 5 + 25) }))
    }, 5000)
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