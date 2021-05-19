import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  content: {
    alignItems: "flex-start",
    justifyContent: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: "#3a3a3a",
  },
  separator: {
    backgroundColor: "#ececec",
    height: 1,
  },
  right: {
    alignItems: "flex-end",
    flex: 1,
  },
});

const Row = ({ title, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.container}>
    <View style={styles.content}>
      <Text style={styles.title}>{title}</Text>
    </View>
  </TouchableOpacity>
);

export default Row;
