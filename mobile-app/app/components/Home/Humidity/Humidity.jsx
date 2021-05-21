import React from "react";
import { Text, View } from "react-native";
import { connect } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faWater } from "@fortawesome/free-solid-svg-icons";

const Humidity = ({ on }) => {
  return (
    <View
      style={{
        borderRadius: 10,
        borderWidth: 2.5,
        borderColor: "#FFA630",
        backgroundColor: "white",
        padding: 15,
        flex: 1,
        marginLeft: 5,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <FontAwesomeIcon icon={faWater} size={50} color="#FFA630" />
      <Text style={{ fontSize: 30, color: "#FFA630" }}>37%</Text>
    </View>
  );
};

function mapStateToProp(state) {
  return {
    on: state.light.on,
  };
}

export default connect(mapStateToProp, null)(Humidity);
