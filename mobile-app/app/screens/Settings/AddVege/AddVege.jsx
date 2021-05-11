import React, { useState } from "react";
import { View, Text, Button, TextInput, TouchableOpacity } from "react-native";
import VegetableService from "../../../services/Vegetable.service";
const AddVegeScreen = ({ navigation }) => {
  var [nameVege, setNameVege] = useState("");

  const handleSubmit = async () => {
    try {
      var respone = await VegetableService.add({ name: nameVege });
      console.log(respone);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={{ padding: 10 }}>
      <TextInput
        placeholder="Tên rau"
        onChangeText={(text) => {
          setNameVege(text);
        }}
      />
      <TouchableOpacity onPress={handleSubmit}>
        <Text>Thêm</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddVegeScreen;
