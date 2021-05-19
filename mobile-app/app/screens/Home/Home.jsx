import React, { useEffect, useRef, useState } from "react";
import { Button, View, Text } from "react-native";
import Header from "../../components/Home/Header";
import SelectBox from "react-native-multi-selectbox";
import Light from "../../components/light/Light";
import Vegetable from "../../services/Vegetable.service";
const HomeScreen = ({ navigation, setToken }) => {
  const [selectedTeam, setSelectedTeam] = useState({});
  const [veges, setVeges] = useState([]);
  useEffect(() => {
    (async function getVege() {
      var veges = await Vegetable.getAll();
      setVeges((prev) => [...veges]);
    })();
  }, []);

  const handleChange = (selection) => {
    setSelectedTeam(selection);
    // guiwr thay đổi rau cho server
    // hiển thị ra thông tin rau ở dưới
    console.log(selection);
  };
  return (
    <View>
      <Header />
      <View padding={10}>
        <SelectBox
          label="Rau đang trồng"
          inputPlaceholder="Tìm loại rau"
          options={veges.map((v) => {
            return { item: v.name, id: v._id };
          })}
          value={selectedTeam}
          onChange={handleChange}
          containerStyle={{
            borderRadius: 5,
            borderWidth: 1,
            padding: 10,
            marginBottom: 5,
            borderColor: "#1666E1",
          }}
          inputFilterContainerStyle={{
            paddingLeft: 10,
            paddingHorizontal: 1,
            borderWidth: 1,
            borderRadius: 5,
            borderColor: "#1666E1",
            borderBottomColor: "#1666E1",
            marginBottom: 1,
          }}
          inputFilterStyle={{
            paddingVertical: 5,
          }}
          arrowIconColor="transparent"
          hideInputFilter={false}
          labelStyle={{ paddingLeft: 10 }}
          optionContainerStyle={{
            justifyContent: "center",
            borderColor: "#fff",
            borderRadius: 10,
            borderBottomWidth: 0,
            backgroundColor: "rgb(212, 212, 212)",
            marginTop: 1,
          }}
          optionsLabelStyle={{ fontSize: 12 }}
        />

        <View>
          <Text>
            {JSON.stringify(veges.filter((v) => v._id === selectedTeam.id))}
          </Text>
        </View>
        <Light />
      </View>
    </View>
  );
};

export default HomeScreen;
