const Vegetable = require("../models/Vegetable.Model");

class VegetableService {
    async add(vegetable) {
        var vege = new Vegetable(vegetable);
        vege.save();
        return { success: true }
    }
    async getAll(userId) {
        var vegetables = await Vegetable.find();
        return vegetables;
    }

}


module.exports = new VegetableService();