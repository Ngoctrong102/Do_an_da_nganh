var jwt = require('jsonwebtoken');
const parseUser = (req, res, next) => {
    if (req.headers['token']) {
        var user = jwt.decode(req.headers['token'], 'ahihi');
        req.user = user || null;
    }
    next();
}

module.exports = parseUser;