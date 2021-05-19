const Vegetable = require("../models/Vegetable.Model");

const User = require('../models/User.Model');
class VegetableService {
    async add(vegetable) {
        var vege = new Vegetable(vegetable);
        vege.save();
        var r = await User.updateOne({ _id: vegetable.owner }, { $push: { veges: vege._id } })
        console.log('keets quar', r);
        return { success: true }

    }
    async getAll(userId) {
        var vegetables = await Vegetable.find({ owner: userId });
        return vegetables;
    }

}


module.exports = new VegetableService();