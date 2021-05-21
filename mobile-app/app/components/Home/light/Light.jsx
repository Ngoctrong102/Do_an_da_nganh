import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { connect } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import ControllerService from "../../../services/Controller.service";

const Light = ({ on }) => {
  return (
    <TouchableOpacity
      style={{
        borderRadius: 10,
        backgroundColor: on ? "#FFA630" : "#d6d6d6",
        padding: 15,
        flex: 1,
        marginRight: 5,
      }}
      activeOpacity={0.3}
      onPress={async () => {
        await ControllerService.toggleLight(!on);
      }}
    >
      <FontAwesomeIcon
        icon={faLightbulb}
        size={60}
        color="white"
        style={{ alignSelf: "center" }}
      />
    </TouchableOpacity>
  );
};

function mapStateToProp(state) {
  return {
    on: state.light.on,
  };
}

export default connect(mapStateToProp, null)(Light);
