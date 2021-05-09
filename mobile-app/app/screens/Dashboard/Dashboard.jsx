import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import MQTT from "../../MQTT/MQTT";

import HomeScreen from "../Home/Home";
import SettingsScreen from "../Settings/Settings";

var Tab = createBottomTabNavigator();

const Dashboard = ({ navigation, setToken }) => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "Settings") {
            iconName = "options";
          } else if (route.name === "QR") {
            iconName = "options";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "#1666E1",
        inactiveTintColor: "gray",
        showLabel: false,
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings">
        {({ navigation }) => (
          <SettingsScreen navigation={navigation} setToken={setToken} />
        )}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default Dashboard;
