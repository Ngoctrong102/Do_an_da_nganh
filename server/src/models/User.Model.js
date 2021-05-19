var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    username: { type: String, require: true },
    password: { type: String, require: true },
    avatar: { type: String, default: 'avt-default.jpg' },
    codeMicrobit: { type: String, default: '' },
    veges: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Vegetable' }],
    current: { type: mongoose.Schema.Types.ObjectId, ref: 'Vegetable' }
})


module.exports = mongoose.model('User', UserSchema);