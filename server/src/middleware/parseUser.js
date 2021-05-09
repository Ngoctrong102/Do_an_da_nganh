var jwt = require('jsonwebtoken');
const parseUser = (req, res, next) => {
    if (req.headers['x-access-token']) {
        var user = jwt.decode(req.headers['x-access-token'], 'ahihi');
        req.user = user || null;
    }
    next();
}

module.exports = parseUser;