import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { connect } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faTint } from "@fortawesome/free-solid-svg-icons";
import GardentService from "../../../services/Gardent.Service";

const Motor = ({ on }) => {
  return (
    <TouchableOpacity
      style={{
        borderRadius: 10,
        backgroundColor: on ? "#00A7E1" : "#d6d6d6",
        padding: 15,
        flex: 1,
        marginLeft: 5,
      }}
      activeOpacity={0.3}
      onPress={async () => {
        await GardentService.toggleMotor(!on);
      }}
    >
      {/* <Text>{on ? "Sáng" : "tắt"}</Text> */}
      <FontAwesomeIcon
        icon={faTint}
        size={60}
        color="white"
        style={{ alignSelf: "center" }}
      />
    </TouchableOpacity>
  );
};

// function mapStateToProp(state) {
//   return {
//     on: state.light.on,
//   };
// }

export default Motor;
