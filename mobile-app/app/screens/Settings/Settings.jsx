import React from "react";
import Header from "../../components/Home/Header";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { createStackNavigator } from "@react-navigation/stack";
import Menu from "../../components/Setting/menu/Menu";
import QRScreen from "./QRScreen/QRScreen";
import Vegetables from "./Vegetables/Vegetables";
import AddVegeScreen from "./AddVege/AddVege";
import EachVege from "./Vegetables/EachVege";

var Stack = createStackNavigator();

var data = [
  {
    title: "Nhập code",
    route: "QRCode",
  },
  {
    title: "Danh sách các loại rau",
    route: "Vegetables",
  },
  {
    title: "Thêm rau",
    route: "AddVege",
  },
];

const Settings = ({ setToken }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: "white",
        headerTitleStyle: {
          fontSize: 16,
          color: "white",
          marginLeft: 0,
        },
        headerStyle: {
          backgroundColor: "#1666E1",
        },
        headerBackTitleStyle: {
          color: "white",
        },
      }}
    >
      <Stack.Screen name="menu" options={{ headerShown: false }}>
        {({ navigation }) => (
          <View>
            <Header />
            <View>
              <Menu data={data} navigation={navigation} />
              <TouchableOpacity
                style={{ padding: 10 }}
                onPress={async () => {
                  await AsyncStorage.removeItem("token");
                  setToken("");
                }}
              >
                <Text>Log out</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </Stack.Screen>
      <Stack.Screen name="QRCode" component={QRScreen} />
      <Stack.Screen name="Vegetables" component={Vegetables} />
      <Stack.Screen
        name="AddVege"
        component={AddVegeScreen}
        options={{ title: "Thêm rau" }}
      />
      <Stack.Screen name="Vegetables-detail" component={EachVege} />
    </Stack.Navigator>
  );
};

export default Settings;
