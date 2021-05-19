import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import Vegetable from "../../../services/Vegetable.service";
import Row from "../../../components/Row";

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
    <FlatList
      data={vegetables}
      keyExtractor={(item, index) => index}
      renderItem={({ item }) => {
        const name = item.name;
        return (
          <Row
            title={name}
            onPress={() => navigation.navigate("Vegetables-detail", { item })}
          />
        );
      }}
    />
  );
};

export default Vegetables;
