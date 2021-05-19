import React, { useState } from "react";
import { View, Text, TextInput, ScrollView, Button, Alert } from "react-native";
import VegetableService from "../../../services/Vegetable.service";
import style from "./AddVege.style";
import styled from "styled-components";

const Input = styled(TextInput)`
  border: 1px solid #1666e1;
  border-radius: 5px;
  padding: 5px 10px;
  margin: 5px 0px;
`;

const AddVegeScreen = ({ navigation }) => {
  var [name, setName] = useState("");
  var [light, setLight] = useState({
    from: 0,
    to: 0,
  });
  var [motor, setMotor] = useState("");
  var [temp, setTemp] = useState({
    from: 0,
    to: 0,
  });
  var [humidity, setHumidity] = useState({
    from: 0,
    to: 0,
  });

  const handleClear = () => {
    console.log("Clear Button");
    return navigation.goBack();
  };

  const handleAlert = async () => {
    if (!name.trim()) {
      alert("Ban nhap thieu ten rau can them!");
      return;
    } else if (!motor.trim()) {
      alert("Ban nhap thieu may bom nuoc!");
      return;
    }

    Alert.alert("Thong bao", "Ban da them " + name + " thanh cong!", [
      {
        text: "OK",
        onPress: () => {
          console.log("OK Pressed"), handleSubmit();
        },
      },
    ]);
  };

  const handleSubmit = async () => {
    try {
      console.log(motor);
      var respone = await VegetableService.add({
        name,
        light,
        motor: motor.split(",").map((str) => parseInt(str)),
        temp,
        humidity,
      });
      console.log(respone);
    } catch (error) {
      console.log(error);
    }
    return navigation.goBack();
  };

  return (
    <ScrollView>
      <View style={{ padding: 10, flex: 1 }}>
        <View style={style.formGroup}>
          <Text>Loại rau</Text>
          <Input
            placeholder="Loại rau"
            onChangeText={(text) => {
              setName(text);
            }}
          />
        </View>
        <View style={style.formGroup}>
          <Text>Đèn</Text>
          <View>
            <Input
              placeholder="Từ"
              onChangeText={(text) => {
                setLight((prev) => {
                  return { ...prev, from: parseInt(text) };
                });
              }}
            />
            <Input
              placeholder="Đến"
              onChangeText={(text) => {
                setLight((prev) => {
                  return { ...prev, to: parseInt(text) };
                });
              }}
            />
          </View>
        </View>
        <View style={style.formGroup}>
          <Text>Máy bơm</Text>
          <View>
            <Input
              placeholder="Giờ tưới nước"
              onChangeText={(text) => {
                setMotor(text);
              }}
            />
          </View>
        </View>
        <View style={style.formGroup}>
          <Text>Nhiệt độ</Text>
          <View>
            <Input
              placeholder="Từ"
              onChangeText={(text) => {
                setTemp((prev) => {
                  return { ...prev, from: parseInt(text) };
                });
              }}
            />
            <Input
              placeholder="Đến"
              onChangeText={(text) => {
                setTemp((prev) => {
                  return { ...prev, to: parseInt(text) };
                });
              }}
            />
          </View>
        </View>
        <View style={style.formGroup}>
          <Text>Độ ẩm</Text>
          <View>
            <Input
              placeholder="Từ"
              onChangeText={(text) => {
                setHumidity((prev) => {
                  return { ...prev, from: parseInt(text) };
                });
              }}
            />
            <Input
              placeholder="Đến"
              onChangeText={(text) => {
                setHumidity((prev) => {
                  return { ...prev, to: parseInt(text) };
                });
              }}
            />
          </View>
        </View>
        <View style={style.formGroup}>
          <Button onPress={handleAlert} title="Thêm" />
        </View>
      </View>
    </ScrollView>
  );
};

export default AddVegeScreen;
