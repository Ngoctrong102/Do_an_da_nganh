import React, { useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import UserService from "../../services/User.service";

import style from "./SignUp.style";

const SignUpScreen = ({ navigation }) => {
  var [username, setUsername] = useState("");
  var [password, setPassword] = useState("");
  var [repass, setRepass] = useState("");

  const handleSignUp = async () => {
    var respone = await UserService.signUp(username, password, repass);
    console.log(respone);
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
          secureTextEntry={true}
          style={style.TextInput}
          placeholder="Password"
          onChangeText={(text) => setPassword(text)}
        />
        <TextInput
          secureTextEntry={true}
          style={style.TextInput}
          placeholder="Re-password"
          onChangeText={(text) => setRepass(text)}
        />
        <TouchableOpacity
          style={style.btnLogin}
          activeOpacity={0.7}
          onPress={handleSignUp}
        >
          <Text style={{ color: "#fff", width: "100%", textAlign: "center" }}>
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>

      <Text style={style.signUpText}>
        Have an account?
        <TouchableOpacity
          style={{ padding: 0, margin: 0 }}
          onPress={() => {
            navigation.navigate("SignIn");
          }}
        >
          <Text
            style={{
              color: "#1666EE",
              fontSize: 12,
              transform: [{ translateY: 3 }],
            }}
          >
            {" "}
            Login
          </Text>
        </TouchableOpacity>
      </Text>
    </View>
  );
};

export default SignUpScreen;
