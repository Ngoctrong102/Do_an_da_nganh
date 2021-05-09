var { send_message } = require('../events');
module.exports = socket => {
    socket.on("SEND_MESSAGE", async({ conversationID, message }) => {
        console.log('listen event')
    })
}