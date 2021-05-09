import React, { useEffect, useRef, useState } from "react";
import { Button, View, Text } from "react-native";
import Header from "../../components/Home/Header";
import SelectBox from "react-native-multi-selectbox";
import Light from "../../components/light/Light";
const K_OPTIONS = [
  {
    item: "Juventus",
    id: "JUVE",
  },
  {
    item: "Real Madrid",
    id: "RM",
  },
  {
    item: "Barcelona",
    id: "BR",
  },
  {
    item: "PSG",
    id: "PSG",
  },
  {
    item: "FC Bayern Munich",
    id: "FBM",
  },
  {
    item: "Manchester United FC",
    id: "MUN",
  },
  {
    item: "Manchester City FC",
    id: "MCI",
  },
  {
    item: "Everton FC",
    id: "EVE",
  },
  {
    item: "Tottenham Hotspur FC",
    id: "TOT",
  },
  {
    item: "Chelsea FC",
    id: "CHE",
  },
  {
    item: "Liverpool FC",
    id: "LIV",
  },
  {
    item: "Arsenal FC",
    id: "ARS",
  },

  {
    item: "Leicester City FC",
    id: "LEI",
  },
];
const HomeScreen = ({ navigation, setToken }) => {
  const [selectedTeam, setSelectedTeam] = useState({});

  useEffect(() => {}, []);
  return (
    <View>
      <Header />
      <View padding={10}>
        <SelectBox
          label="Rau đang trồng"
          inputPlaceholder="Tìm loại rau"
          options={K_OPTIONS}
          value={selectedTeam}
          onChange={(selection) => {
            setSelectedTeam(selection);
            console.log(selection);
          }}
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

        <Button
          title="Bật đèn 1"
          onPress={() => {
            console.log("turn on ligth 1");
            fetch("http://192.168.43.187:8888/light", {
              method: "post",
              headers: {
                "Content-Type": "application/json;charset=utf-8",
              },
              body: JSON.stringify({ id: 1, on: true }),
            });
          }}
        />
        <Light />
      </View>
    </View>
  );
};

export default HomeScreen;
