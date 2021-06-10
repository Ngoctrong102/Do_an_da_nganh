const Vegetable = require("../models/Vegetable.Model");

const User = require('../models/User.Model');
class VegetableService {
    async add(vegetable) {
        var vege = new Vegetable(vegetable);
        vege.save();
        var r = await User.updateOne({ _id: vegetable.owner }, { $push: { veges: vege._id } })
        console.log('keets quar', r);
        return vege;

    }
    async getAll(userId) {
        var vegetables = await Vegetable.find({ owner: userId });
        return vegetables;
    }
    async delete(_id, owner) {
        var res = await Vegetable.deleteOne({ _id, owner })
        return res;
    }
    async update(_id, vege) {
        var res = await Vegetable.updateOne({ _id }, vege);
        return res;
    }

}


module.exports = new VegetableService();