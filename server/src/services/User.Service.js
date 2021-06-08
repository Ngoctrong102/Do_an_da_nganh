const { hashPassword, checkPassword } = require('../helpers/hashPassword');
var User = require('../models/User.Model');
class UserService {
    signUp(username, password) {
        password = hashPassword(password);
        var user = new User({ username, password });
        user.save();
        return user;
    }
    async login(username, password) {
        var user = await User.findOne({ username })
        if (user && checkPassword(password, user.password)) return user;
        else return null;
    }
    async fetchInfor(userID) {
        var user = await User.findOne({ _id: userID })
        if (user) return user;
        else return null;
    }
    async addQR(userID, QR) {
        var res = await User.updateOne({ _id: userID }, { codeMicrobit: QR })
        return res;
    }
}

module.exports = new UserService();