import React, { useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import UserService from "../../services/User.service";
import AsyncStorage from "@react-native-async-storage/async-storage";

import style from "./Login.style";

const LoginScreen = ({ navigation, setToken }) => {
  var [username, setUsername] = useState("");
  var [password, setPassword] = useState("");

  const handleLogin = async () => {
    var respone = await UserService.login(username, password);
    console.log(respone);
    await AsyncStorage.setItem("token", respone.token);
    setToken(respone.token);
  };

  return (
    <View style={style.container}>
      <Image
        source={require("./../../../assets/blue_bg.png")}
        style={style.ImageBackground}
      />

      <View style={style.form}>
        <Image
          source={require("./../../../assets/logo.png")}
          style={style.ImageLogo}
        />

        <TextInput
          style={style.TextInput}
          placeholder="Username"
          onChangeText={(text) => setUsername(text)}
        />
        <TextInput
          style={style.TextInput}
          secureTextEntry={true}
          placeholder="Password"
          onChangeText={(text) => setPassword(text)}
        />

        <TouchableOpacity
          style={style.btnLogin}
          activeOpacity={0.7}
          onPress={handleLogin}
        >
          <Text style={{ color: "#fff", width: "100%", textAlign: "center" }}>
            Login
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={{ color: "#1666EE", fontSize: 12 }}>
            Forget password?
          </Text>
        </TouchableOpacity>
      </View>

      <Text style={style.signUpText}>
        Don't have account?
        <TouchableOpacity
          style={{ padding: 0, margin: 0 }}
          onPress={() => navigation.navigate("SignUp")}
        >
          <Text
            style={{
              color: "#1666EE",
              fontSize: 12,
              transform: [{ translateY: 3 }],
            }}
          >
            Sign up
          </Text>
        </TouchableOpacity>
      </Text>
    </View>
  );
};

export default LoginScreen;
