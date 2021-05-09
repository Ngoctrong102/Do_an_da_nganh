import { Client, Message } from "react-native-paho-mqtt";
import { controlLight } from '../store/actions/light'
import store from '../store';


//Set up an in-memory alternative to global localStorage

const myStorage = {
    setItem: (key, item) => {
        myStorage[key] = item;
    },
    getItem: (key) => myStorage[key],
    removeItem: (key) => {
        delete myStorage[key];
    },
};

// Create a client instance


const client = new Client({
    uri: "ws://192.168.43.187:9000/",
    clientId: "clientId",
    storage: myStorage,
});
// set event handlers
client.on("connectionLost", (responseObject) => {
    if (responseObject.errorCode !== 0) {
        console.log(responseObject.errorMessage);
    }
});
client.on("messageReceived", (message) => {
    console.log(message.destinationName + ' : ' + message.payloadString);

    switch (message.destinationName) {
        case "light":
            {
                var { id, on } = JSON.parse(message.payloadString)
                store.dispatch(controlLight(on))
                break;
            }
    }
});
client
    .connect()
    .then(() => {
        // Once a connection has been made, make a subscription and send a message.
        console.log("onConnect");
        client.subscribe("presence");
        client.subscribe("hello");
        client.subscribe("light");
    })
    .catch((responseObject) => {
        if (responseObject.errorCode !== 0) {
            console.log("onConnectionLost:" + responseObject.errorMessage);
        }
    });


//   .then(() => {
//     const message = new Message("Hello");
//     message.destinationName = "presence";
//     client.send(message);

//     const me = new Message("Hello abc");
//     me.destinationName = "abc";
//     client.send(me);
//     console.log(client.isConnected())
// })

export default client;