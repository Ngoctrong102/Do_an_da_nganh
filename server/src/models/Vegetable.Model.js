var mongoose = require('mongoose');

var VegetableSchema = new mongoose.Schema({
    name: { type: String, require: true },
    // owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
})


module.exports = mongoose.model('Vegetable', VegetableSchema);