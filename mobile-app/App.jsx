import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "./app/screens/Login/Login";
import SignUpScreen from "./app/screens/SignUp/SignUp";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Dashboard from "./app/screens/Dashboard/Dashboard";

import store from "./app/store";

var Stack = createStackNavigator();

export default function App() {
  var [token, setToken] = useState("");

  useEffect(() => {
    (async () => {
      token = await AsyncStorage.getItem("token");
      setToken(token);
    })();
    return () => {
      console.log("end");
    };
  }, []);

  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            {token ? (
              <>
                <Stack.Screen name="Dashboard">
                  {({ navigation }) => (
                    <Dashboard navigation={navigation} setToken={setToken} />
                  )}
                </Stack.Screen>
              </>
            ) : (
              <>
                <Stack.Screen name="SignIn">
                  {({ navigation }) => (
                    <LoginScreen navigation={navigation} setToken={setToken} />
                  )}
                </Stack.Screen>
                <Stack.Screen name="SignUp">
                  {({ navigation }) => (
                    <SignUpScreen navigation={navigation} setToken={setToken} />
                  )}
                </Stack.Screen>
              </>
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </SafeAreaProvider>
  );
}
