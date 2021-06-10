const GardentService = require('../services/Gardent.Service');

module.exports = {
    getInfo: async(req, res) => {
        var gardent = await GardentService.getInfo(req.user._id, req.user.codeMicrobit);
        if (gardent) {
            var gar = {
                light: gardent.light,
                motor: gardent.motor,
                temp: gardent.temp,
                humidity: gardent.humidity,
                current: gardent.current
            }
            res.json(gar)
        } else {
            res.json(null)
        }
    },
    changeVege: async(req, res) => {
        var result = await GardentService.changeVege(req.user._id, req.user.codeMicrobit, req.body.id);

        res.json({ success: true });
    },
    toggleLight: async(req, res) => {
        var result = await GardentService.toggleLight(req.user.codeMicrobit, req.body.on)
        res.json({ success: true })
    },
    toggleMotor: async(req, res) => {
        var result = await GardentService.toggleMotor(req.user.codeMicrobit, req.body.on)
        res.json({ success: true })
    }
}