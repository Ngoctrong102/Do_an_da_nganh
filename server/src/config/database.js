const mongoose = require('mongoose');

mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((res) => {
        console.log("Connect database successfully")
    })
    .catch(err => {
        console.error(err);
    });

module.exports = mongoose.connection;