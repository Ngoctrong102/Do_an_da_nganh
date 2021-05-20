import React, { useEffect, useRef, useState } from "react";
import { Button, View, Text } from "react-native";
import Header from "../../components/Home/Header";
import SelectBox from "react-native-multi-selectbox";
import Light from "../../components/light/Light";
import { connect } from "react-redux";
import { getVeges } from "../../store/actions/vegetables";
const HomeScreen = ({ navigation, setToken, veges, getVeges }) => {
  const [selectedTeam, setSelectedTeam] = useState({});
  useEffect(() => {
    if (veges.length == 0) {
      getVeges();
    }
  }, []);

  const handleChange = (selection) => {
    setSelectedTeam(selection);
    // guiwr thay đổi rau cho server
    // hiển thị ra thông tin rau ở dưới
    console.log(selection);
  };
  return (
    <View>
      <Header />
      <View padding={10}>
        <SelectBox
          label="Rau đang trồng"
          inputPlaceholder="Tìm loại rau"
          options={veges.map((v) => {
            return { item: v.name, id: v._id };
          })}
          value={selectedTeam}
          onChange={handleChange}
          containerStyle={{
            borderRadius: 5,
            borderWidth: 1,
            padding: 10,
            marginBottom: 5,
            borderColor: "#1666E1",
          }}
          inputFilterContainerStyle={{
            paddingLeft: 10,
            paddingHorizontal: 1,
            borderWidth: 1,
            borderRadius: 5,
            borderColor: "#1666E1",
            borderBottomColor: "#1666E1",
            marginBottom: 1,
          }}
          inputFilterStyle={{
            paddingVertical: 5,
          }}
          arrowIconColor="transparent"
          hideInputFilter={false}
          labelStyle={{ paddingLeft: 10 }}
          optionContainerStyle={{
            justifyContent: "center",
            borderColor: "#fff",
            borderRadius: 10,
            borderBottomWidth: 0,
            backgroundColor: "rgb(212, 212, 212)",
            marginTop: 1,
          }}
          optionsLabelStyle={{ fontSize: 12 }}
        />

        <View>
          <Text>
            {JSON.stringify(veges.filter((v) => v._id === selectedTeam.id))}
          </Text>
        </View>
        <Light />
      </View>
    </View>
  );
};

function mapStateToProp(state) {
  return {
    veges: state.veges.veges,
  };
}
function mapDispatcherToProp(dispatch) {
  return {
    getVeges: () => {
      dispatch(getVeges());
    },
  };
}
export default connect(mapStateToProp, mapDispatcherToProp)(HomeScreen);
