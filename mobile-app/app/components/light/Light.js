import React from "react";
import { Text, View } from "react-native";
import { connect } from "react-redux";

const Light = ({ on }) => {
  return (
    <View>
      <Text>{on ? "Sáng" : "tắt"}</Text>
    </View>
  );
};

function mapStateToProp(state) {
  return {
    on: state.light.on,
  };
}

export default connect(mapStateToProp, null)(Light);
