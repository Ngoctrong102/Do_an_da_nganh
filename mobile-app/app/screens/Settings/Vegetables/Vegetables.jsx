import React, { useEffect } from "react";
import { View, Text } from "react-native";
import Vegetable from "../../../services/Vegetable.service";

const Vegetables = ({}) => {
  useEffect(() => {
    (async () => {
      var a = await Vegetable.getAll();
      console.log(a);
    })();
  }, []);
  return (
    <View>
      <Text>Rau các loại</Text>
    </View>
  );
};

export default Vegetables;
