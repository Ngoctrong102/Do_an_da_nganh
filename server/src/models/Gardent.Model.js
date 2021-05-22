var mongoose = require('mongoose');

var GardentSchema = new mongoose.Schema({
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    code: { type: String, required: true },
    current: { type: mongoose.Schema.Types.ObjectId, ref: 'Vegetable' },
    light: {
        type: {
            on: Boolean,
            from: Number,
            to: Number
        },
        required: true
    },
    motor: {
        type: {
            on: Boolean,
            time: [Number]
        },
        required: true
    },
    temp: {
        type: Number,
        required: true
    },
    humidity: {
        type: Number,
        required: true
    }
})


module.exports = mongoose.model('Gardent', GardentSchema);