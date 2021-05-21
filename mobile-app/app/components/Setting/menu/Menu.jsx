import React from "react";
import {
  FlatList,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

const Menu = ({ navigation, data }) => {
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={{ paddingHorizontal: 10, paddingVertical: 5 }}
        onPress={() => {
          navigation.navigate(item.route);
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <FontAwesomeIcon
            icon={item.icon}
            size={25}
            style={{ marginRight: 10 }}
            color="#00A7E1"
          />
          <Text style={{ fontSize: 18 }}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView>
      <View>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </SafeAreaView>
  );
};

export default Menu;
