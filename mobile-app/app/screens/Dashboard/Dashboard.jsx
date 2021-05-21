import React, { useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { connect } from "react-redux";
import MQTT from "../../MQTT/MQTT";

import HomeScreen from "../Home/Home";
import SettingsScreen from "../Settings/Settings";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faSeedling, faBars } from "@fortawesome/free-solid-svg-icons";
import { fetchUser } from "../../store/actions/user";

var Tab = createBottomTabNavigator();

const Dashboard = ({ navigation, setToken, fetchUser }) => {
  useEffect(() => {
    fetchUser();
    return () => {
      console.log("end");
    };
  }, []);
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            // iconName = "home";
            return (
              <FontAwesomeIcon icon={faSeedling} size={size} color={color} />
            );
          } else if (route.name === "Settings") {
            iconName = "options";
            return <FontAwesomeIcon icon={faBars} size={size} color={color} />;
          }
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
function mapStateToProp(state) {
  return {};
}
function mapDispatcherToProp(dispatch) {
  return {
    fetchUser: () => dispatch(fetchUser()),
  };
}
export default connect(mapStateToProp, mapDispatcherToProp)(Dashboard);
