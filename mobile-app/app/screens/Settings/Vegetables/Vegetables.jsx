import React, { useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import { connect } from "react-redux";
import Row from "../../../components/Row";

import { getVeges } from "../../../store/actions/vegetables";

const Vegetables = ({ navigation, vegetables, getVeges }) => {
  useEffect(() => {
    if (vegetables.length == 0) {
      getVeges();
    }
  }, []);

  return (
    <FlatList
      data={vegetables}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => {
        const name = item.name;
        return (
          <Row
            title={name}
            onPress={() => navigation.navigate("Vegetables-detail", { item })}
          />
        );
      }}
    />
  );
};
function mapStateToProp(state) {
  return {
    vegetables: state.veges.veges,
  };
}
function mapDispatcherToProp(dispatch) {
  return {
    getVeges: () => {
      dispatch(getVeges());
    },
  };
}
export default connect(mapStateToProp, mapDispatcherToProp)(Vegetables);
