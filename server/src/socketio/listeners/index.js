const fs = require('fs');
const path = require('path');
const listenerPath = path.resolve(__dirname);
const people = require('../people');
const initEvent = require('../events');


module.exports = io => {
    io.on("connection", (socket) => {
        if (people[socket.user._id]) {
            people[socket.user._id].push(socket.id);
        } else {
            people[socket.user._id] = [socket.id];
        }
        console.log(people);
        // let currentUserId = null;
        // socket.on("ACTIVE", (data) => {
        //     currentUserId = data._id;
        //     console.log(`ACTIVE`, data, socket.id);
        //     if (people[data._id]) {
        //         people[data._id].push(socket.id);
        //     } else {
        //         people[data._id] = [socket.id];
        //     }
        //     console.log(people);
        // })
        // console.log(`${socket.id} connected`);
        fs.readdir(listenerPath, (err, files) => {
            if (err) process.exit(1);
            files.map(fileName => {
                if (fileName != "index.js") {
                    const listener = require(path.resolve(__dirname, fileName));
                    listener(socket);
                }
            })
        })
        socket.on("disconnect", () => {
            if (people[socket.user._id]) {
                people[socket.user._id] = people[socket.user._id].filter(socketId => socketId != socket.id)
                if (people[socket.user._id].length == 0) delete people[socket.user._id];
            }
            console.log("disconnect", people);
        })
    })
    initEvent(io);
}