var mongoose = require('mongoose');

var GardentSchema = new mongoose.Schema({
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    code: { type: String, required: true },
    light: {
        type: {
            on: Boolean,
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
        type: Number,
        required: true
    },
    humidity: {
        type: Number,
        required: true
    }
})


module.exports = mongoose.model('Gardent', GardentSchema);