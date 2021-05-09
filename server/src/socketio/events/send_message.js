var people = require('../people');

const event = io => async(socket, { conversationID, message }) => {
    console.log('emit')

}

module.exports = event;