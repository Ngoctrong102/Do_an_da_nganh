import React from "react";
import Header from "../../components/Home/Header";
import { View, Text, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { connect } from "react-redux";

import { createStackNavigator } from "@react-navigation/stack";
import Menu from "../../components/Setting/menu/Menu";
import QRScreen from "./QRScreen/QRScreen";
import Vegetables from "./Vegetables/Vegetables";
import AddVegeScreen from "./Vegetables/AddVege/AddVege";
import EachVege from "./Vegetables/Detail/VegeDetail";
import UpdateVege from "./Vegetables/UpdateVege/UpdateVege";

import { logout } from "../../store/actions/user";

import { faQrcode, faListUl, faPlus } from "@fortawesome/free-solid-svg-icons";

var Stack = createStackNavigator();

var data = [
  {
    title: "Nhập code",
    route: "QRCode",
    icon: faQrcode,
  },
  {
    title: "Danh sách các loại rau",
    route: "Vegetables",
    icon: faListUl,
  },
  {
    title: "Thêm rau",
    route: "AddVege",
    icon: faPlus,
  },
];

const Settings = ({ setToken, logout }) => {
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
            <View style={{ padding: 5 }}>
              <Menu data={data} navigation={navigation} />
              <TouchableOpacity
                style={{ padding: 10 }}
                onPress={async () => {
                  await AsyncStorage.removeItem("token");
                  setToken("");
                  logout();
                }}
              >
                <Text>Log out</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </Stack.Screen>
      <Stack.Screen name="QRCode">
        {({ navigation, route }) => (
          <QRScreen navigation={navigation} route={route} setToken={setToken} />
        )}
      </Stack.Screen>
      <Stack.Screen name="Vegetables" component={Vegetables} />
      <Stack.Screen
        name="AddVege"
        component={AddVegeScreen}
        options={{ title: "Thêm rau" }}
      />
      <Stack.Screen
        name="Vegetables-detail"
        component={EachVege}
        options={({ route }) => ({ title: route.params.item.name })}
      />
      <Stack.Screen
        name="Vegetables-update"
        component={UpdateVege}
        options={({ route }) => ({ title: route.params.vege.name })}
      />
    </Stack.Navigator>
  );
};

function mapDispatcherToProp(dispatch) {
  return {
    logout: () => {
      dispatch(logout());
    },
  };
}
export default connect(null, mapDispatcherToProp)(Settings);
