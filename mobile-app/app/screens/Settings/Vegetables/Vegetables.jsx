import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import Vegetable from "../../../services/Vegetable.service";
import { Row, Separator } from "../../../components/Row";
import { createStackNavigator } from "@react-navigation/stack";
import EachVege from "./EachVege";




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

  const abc = () => {
    return navigation.navigate("EachVege");
  }

  return (
    <FlatList
      data={vegetables}
      keyExtractor={(item, index) => index}
      renderItem={({ item }) => {
        const name = item.name;
        return (
          <Row
            title={name}
            onPress={() => navigation.navigate("l")}
          />
        );
      }}
      ItemSeparatorComponent={Separator}
      ListHeaderComponent={() => <Separator />}
      ListFooterComponent={() => <Separator />}
      contentContainerStyle={{ paddingVertical: 20 }}
    />
  );
};

export default Vegetables;
