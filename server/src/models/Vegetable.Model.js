var mongoose = require('mongoose');

var VegetableSchema = new mongoose.Schema({
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    name: { type: String, required: true },
    light: {
        type: {
            from: Number,
            to: Number
        },
        required: true
    },
    motor: {
        type: [Number],
        required: true
    },
    temp: {
        type: {
            from: Number,
            to: Number
        },
        required: true
    },
    humidity: {
        type: {
            from: Number,
            to: Number
        },
        required: true
    }
})


module.exports = mongoose.model('Vegetable', VegetableSchema);