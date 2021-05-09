const checkAuth = (req, res, next) => {
    if (req.user) next();
    else return res.status(401).json({ status: "Error", message: "Authetication!!!" })
}

module.exports = checkAuth;