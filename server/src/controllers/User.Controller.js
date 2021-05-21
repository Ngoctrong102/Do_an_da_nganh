const jwt = require('jsonwebtoken');

const UserService = require('../services/User.Service');

const SECRET_CODE = 'AHIHI';

module.exports = {
    signUp: (req, res) => {
        try {
            var { username, password, repass } = req.body;
            if (password !== repass) {
                return res.json({ status: "Error", message: "Re-Pass and Password are not same!" })
            }
            var user = UserService.signUp(username, password);
            if (user) {
                var userData = {
                    _id: user._id,
                    username: user.username,
                    avatar: user.avatar,
                    codeMicrobit: user.codeMicrobit
                };
                return res.json({
                    user: userData,
                    token: jwt.sign(userData, SECRET_CODE)
                });
            }

        } catch (err) {
            console.log(err);
        }
    },
    login: async(req, res) => {
        try {
            var { username, password } = req.body;
            console.log(req.body)
            var user = await UserService.login(username, password);
            if (user) {
                var userData = {
                    _id: user._id,
                    username: user.username,
                    avatar: user.avatar,
                    codeMicrobit: user.codeMicrobit
                };
                return res.json({
                    user: userData,
                    token: jwt.sign(userData, SECRET_CODE)
                })
            } else {
                res.json({ status: "Error", message: "Username or password is incorect" });
            }
        } catch (err) {
            console.log(err);
        }
    },
    fetchInfor: async(req, res) => {
        try {
            return res.json({
                user: req.user
            })
        } catch (err) {
            res.json({ status: "Error", message: "Invalid token!" })
        }
    },
    addQR: async(req, res) => {
        try {
            var respone = await UserService.addQR(req.user._id, req.body.QR);
            res.json(respone);
        } catch (err) {
            console.log(err)
        }
    }
}