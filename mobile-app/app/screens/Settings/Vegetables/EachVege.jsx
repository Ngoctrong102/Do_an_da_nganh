import React from "react";
import { Text, View } from "react-native";

const VegeDetail = ({ navigation, route }) => {
  return (
    <View>
      <Text>{JSON.stringify(route.params.item)}</Text>
    </View>
  );
};

export default VegeDetail;
