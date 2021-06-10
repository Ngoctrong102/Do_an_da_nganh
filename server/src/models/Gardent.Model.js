var mongoose = require('mongoose');

var GardentSchema = new mongoose.Schema({
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    code: { type: String, required: true },
    current: { type: mongoose.Schema.Types.ObjectId, ref: 'Vegetable' },
    light: Boolean,
    motor: Boolean,
    temp: { type: Number, default: 0 },
    humidity: { type: Number, default: 0 }
})


module.exports = mongoose.model('Gardent', GardentSchema);