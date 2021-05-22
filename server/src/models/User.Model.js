var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    username: { type: String, require: true },
    password: { type: String, require: true },
    avatar: { type: String, default: 'avt-default.jpg' },
    codeMicrobit: { type: String, default: '' },
    veges: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Vegetable' }],
    current: { type: mongoose.Schema.Types.ObjectId, ref: 'Vegetable' },
    gardent: { type: mongoose.Schema.Types.ObjectId, ref: 'Gardent' }
})


module.exports = mongoose.model('User', UserSchema);