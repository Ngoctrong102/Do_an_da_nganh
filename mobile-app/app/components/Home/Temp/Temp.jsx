import React from "react";
import { Text, View } from "react-native";
import { connect } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faTemperatureHigh } from "@fortawesome/free-solid-svg-icons";

const Temp = ({ on }) => {
  return (
    <View
      style={{
        borderRadius: 10,
        borderWidth: 2.5,
        borderColor: "#00A7E1",
        backgroundColor: "white",
        padding: 15,
        flex: 1,
        marginRight: 5,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <FontAwesomeIcon icon={faTemperatureHigh} size={50} color="#00A7E1" />
      <Text style={{ fontSize: 30, color: "#00A7E1" }}>37°C</Text>
    </View>
  );
};

function mapStateToProp(state) {
  return {
    on: state.light.on,
  };
}

export default connect(mapStateToProp, null)(Temp);
