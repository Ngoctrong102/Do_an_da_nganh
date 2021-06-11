const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
// const fs = require('fs');
const env = require('dotenv').config();
require('events').EventEmitter.defaultMaxListeners = 30;
// var cert = {
//     key: fs.readFileSync("./cert/key.pem"),
//     cert: fs.readFileSync('./cert/cert.pem')
// }
const app = express();
// const server = require('https').createServer(cert, app);
const server = require('http').createServer(app);


const db = require('./src/config/database');
const parseUser = require('./src/middleware/parseUser');

global.__basedir = __dirname;

const io = require('socket.io')(server, {
    cors: {
        origin: process.env.ORIGIN,
        methods: ["GET", "POST"]
    }
});
io.use(function(socket, next) {
    if (socket.handshake.auth && socket.handshake.auth.token) {
        try {
            var user = jwt.decode(socket.handshake.auth.token, 'ahihi');
            socket.user = user;
            next();
        } catch (err) {
            return next(new Error('Authentication error'));

        }
    } else {
        next(new Error('Authentication error'));
    }
});

// require('./src/socketio/listeners')(io);
require('./src/schedule');


const PORT = process.env.PORT;

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(cors({ origin: '*' }))


app.use(parseUser);

app.get('/', (req, res) => {
    res.send('running')
})

app.use('/user', require('./src/routes/user.router'))
app.use('/vegetables', require('./src/routes/vegetable.router'));
app.use('/controller', require('./src/routes/controller.router'))
app.use('/gardent', require('./src/routes/gardent.router'))


server.listen(PORT, () => {
    console.log('Listening at port ' + PORT);
})