import { Client, Message } from "react-native-paho-mqtt";
import { controlGardent } from '../store/actions/gardent'
import store from '../store';


import { MQTT_URL } from '@env';
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
    uri: MQTT_URL,
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
    // console.log(message.destinationName + ' : ' + message.payloadString);



    // đoạn code cần quan tâm

    var data = JSON.parse(message.payloadString)
    var user = store.getState().user;
    if (data.code == user.codeMicrobit) {
        switch (message.destinationName) {
            case "light":
                {
                    console.log({ light: data.on });
                    store.dispatch(controlGardent({ light: data.on }))
                    break;
                }
            case "motor":
                {
                    console.log({ motor: data.on });

                    store.dispatch(controlGardent({ motor: data.on }))
                    break;
                }
            case "temp":
                {
                    console.log({ temp: data.temp });
                    store.dispatch(controlGardent({ temp: data.temp }))
                    break;
                }
            case "humidity":
                {
                    console.log({ humidity: data.humidity });
                    store.dispatch(controlGardent({ humidity: data.humidity }))
                    break;
                }
        }
    }
    // đoạn code cần quan tâm

});
client
    .connect()
    .then(() => {
        // Once a connection has been made, make a subscription and send a message.
        console.log("Connected broker");
        // đoạn code cần quan tâm
        // client.subscribe("topic presence");
        // client.subscribe("hello");
        client.subscribe("light");
        client.subscribe("motor");

        client.subscribe("temp");
        client.subscribe("humidity");
        // đoạn code cần quan tâm

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