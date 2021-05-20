import React from "react";
import {
  FlatList,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

const Menu = ({ navigation, data }) => {
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={{ paddingHorizontal: 10, paddingVertical: 5 }}
        onPress={() => {
          navigation.navigate(item.route);
        }}
      >
        <Text>{item.title}</Text>
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
