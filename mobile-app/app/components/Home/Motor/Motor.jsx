import React from "react";
import { Text, View } from "react-native";
import { connect } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faTint } from "@fortawesome/free-solid-svg-icons";

const Motor = ({ on }) => {
  return (
    <View
      style={{
        borderRadius: 10,
        backgroundColor: "#00A7E1",
        padding: 15,
        flex: 1,
        marginLeft: 5,
      }}
    >
      {/* <Text>{on ? "Sáng" : "tắt"}</Text> */}
      <FontAwesomeIcon
        icon={faTint}
        size={60}
        color="white"
        style={{ alignSelf: "center" }}
      />
    </View>
  );
};

function mapStateToProp(state) {
  return {
    on: state.light.on,
  };
}

export default connect(mapStateToProp, null)(Motor);
