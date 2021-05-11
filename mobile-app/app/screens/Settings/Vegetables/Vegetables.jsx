import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import Vegetable from "../../../services/Vegetable.service";

const Vegetables = ({ navigation }) => {
  var [vegetables, setVegetables] = useState([]);

  useEffect(() => {
    async function getVege() {
      var veges = await Vegetable.getAll();
      setVegetables((prev) => [...veges]);
    }
    getVege();
    console.log({ vegetables });
  }, []);

  return (
    <View>
      <FlatList
        data={vegetables}
        renderItem={({ item }) => <Text>{item.name}</Text>}
        keyExtractor={(item, index) => index}
      />
    </View>
  );
};

export default Vegetables;
