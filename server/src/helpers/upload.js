var multer = require('multer');

var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, __basedir + '/uploads')
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname);
    }
})

var upload = multer({
    storage,
    fileFilter: function(req, file, cb) {
        cb(null, true)
    }
});

module.exports = upload;