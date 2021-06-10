const UserService = require('../services/User.Service');

var Mqtt = require('../MQTT/index');
module.exports = {
    toggleLight(req, res) {
        Mqtt.publish('light', JSON.stringify({ code: req.user.codeMicrobit, on: req.body.on }))
        res.json({ success: true })
    },
    toggleMotor(req, res) {
        Mqtt.publish('motor', JSON.stringify({ code: req.user.codeMicrobit, on: req.body.on }))
        res.json({ success: true })
    }
}