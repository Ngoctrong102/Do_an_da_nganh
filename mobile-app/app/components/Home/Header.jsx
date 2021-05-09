import React from "react";
import { View } from "react-native";
import { Header } from "react-native-elements";

const HomeHeader = () => {
  return (
    <View>
      <Header
        backgroundColor="#1666E1"
        centerComponent={{ text: "SMART GARDENT", style: { color: "#fff" } }}
      />
    </View>
  );
};

export default HomeHeader;
