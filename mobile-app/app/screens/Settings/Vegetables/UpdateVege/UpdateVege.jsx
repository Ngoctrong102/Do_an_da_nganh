import React, { useState } from "react";
import { View, Text, TextInput, ScrollView, Button, Alert } from "react-native";
import { connect } from "react-redux";
import VegetableService from "../../../../services/Vegetable.service";
import { updateVege } from "../../../../store/actions/vegetables";
import style from "./UpdateVege.style";
import styled from "styled-components";

const Input = styled(TextInput)`
  border: 1px solid #1666e1;
  border-radius: 5px;
  padding: 5px 10px;
  margin: 5px 5px;
  flex: 1 1;
`;
const Label = styled(Text)`
  margin-left: 5px;
`;
const Row = styled(View)`
  flex-direction: row;
`;
const UpdateVegeScreen = ({ navigation, route, updateVege }) => {
  var vege = route.params.vege;
  var [name, setName] = useState(vege.name);
  var [light, setLight] = useState(vege.light);
  var [motor, setMotor] = useState(vege.motor.join(","));
  var [temp, setTemp] = useState(vege.temp);
  var [humidity, setHumidity] = useState(vege.humidity);

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
      var newVege = {
        name,
        light,
        motor: motor.split(",").map((str) => parseInt(str)),
        temp,
        humidity,
      };
      var respone = await VegetableService.update(
        route.params.vege._id,
        newVege
      );
      // console.log(respone);
      updateVege(route.params.vege._id, newVege);

      return navigation.navigate({
        name: "Vegetables-detail",
        params: {
          item: { ...newVege, _id: route.params.vege._id, merge: true },
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <ScrollView>
      <View style={{ paddingVertical: 10, flex: 1 }}>
        <View style={style.formGroup}>
          <Label>Loại rau</Label>
          <Input
            placeholder="Loại rau"
            value={name}
            onChangeText={(text) => {
              setName(text);
            }}
          />
        </View>
        <View style={style.formGroup}>
          <Label>Đèn</Label>
          <Row>
            <Input
              placeholder="Từ"
              value={light.from ? light.from.toString() : ""}
              onChangeText={(text) => {
                setLight((prev) => {
                  return { ...prev, from: parseInt(text) };
                });
              }}
            />
            <Input
              placeholder="Đến"
              value={light.to ? light.to.toString() : ""}
              onChangeText={(text) => {
                setLight((prev) => {
                  return { ...prev, to: parseInt(text) };
                });
              }}
            />
          </Row>
        </View>
        <View style={style.formGroup}>
          <Label>Máy bơm</Label>
          <Row>
            <Input
              placeholder="Giờ tưới nước"
              value={motor}
              onChangeText={(text) => {
                setMotor(text);
              }}
            />
          </Row>
        </View>
        <View style={style.formGroup}>
          <Label>Nhiệt độ</Label>
          <Row>
            <Input
              placeholder="Từ"
              value={temp.from ? temp.from.toString() : ""}
              onChangeText={(text) => {
                setTemp((prev) => {
                  return { ...prev, from: parseInt(text) };
                });
              }}
            />
            <Input
              placeholder="Đến"
              value={temp.to ? temp.to.toString() : ""}
              onChangeText={(text) => {
                setTemp((prev) => {
                  return { ...prev, to: parseInt(text) };
                });
              }}
            />
          </Row>
        </View>
        <View style={style.formGroup}>
          <Label>Độ ẩm</Label>
          <Row>
            <Input
              placeholder="Từ"
              value={humidity.from ? humidity.from.toString() : ""}
              onChangeText={(text) => {
                setHumidity((prev) => {
                  return { ...prev, from: parseInt(text) };
                });
              }}
            />
            <Input
              placeholder="Đến"
              value={humidity.to ? humidity.to.toString() : ""}
              onChangeText={(text) => {
                setHumidity((prev) => {
                  return { ...prev, to: parseInt(text) };
                });
              }}
            />
          </Row>
        </View>
        <View style={{ paddingHorizontal: 30, paddingTop: 10 }}>
          <Button onPress={handleAlert} title="Cập nhật" />
        </View>
      </View>
    </ScrollView>
  );
};
function mapStateToProp(state) {
  return {};
}
function mapDispatcherToProp(dispatch) {
  return {
    updateVege: (id, vege) => dispatch(updateVege(id, vege)),
  };
}
export default connect(mapStateToProp, mapDispatcherToProp)(UpdateVegeScreen);
