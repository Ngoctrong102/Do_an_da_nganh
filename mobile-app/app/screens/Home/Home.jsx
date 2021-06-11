import React, { useEffect, useRef, useState } from "react";
import { Button, View, Text, Image } from "react-native";
import Header from "../../components/Home/Header";
import SelectBox from "react-native-multi-selectbox";
import Light from "../../components/Home/light/Light";
import { connect } from "react-redux";
import { getVeges } from "../../store/actions/vegetables";
import { changeVege } from "../../store/actions/gardent";
import Motor from "../../components/Home/Motor/Motor";
import Temp from "../../components/Home/Temp/Temp";
import Humidity from "../../components/Home/Humidity/Humidity";
import { getGardentInfo } from "../../store/actions/gardent";

const HomeScreen = ({
  navigation,
  setToken,
  veges,
  getVeges,
  current,
  changeVege,
  getGardentInfo,
  gardent,
}) => {
  var options = veges.map((v) => {
    return { item: v.name, id: v._id };
  });

  // const [selectedTeam, setSelectedTeam] = useState({});
  useEffect(() => {
    if (veges.length == 0) {
      getVeges();
    }
    getGardentInfo();
  }, []);
  // useEffect(() => {
  //   var c = options.find((o) => o.id == current) || {};
  //   console.log(c);
  //   setSelectedTeam(c);
  // }, [current]);
  const handleChange = (selection) => {
    // setSelectedTeam(selection);
    changeVege(selection.id);
    console.log(selection);
  };
  return (
    // <ScrollView nestedScrollEnabled={true}>
    <View style={{ flex: 1 }}>
      <Header />
      <View paddingHorizontal={10}>
        <SelectBox
          label=""
          inputPlaceholder="Tìm loại rau"
          options={options}
          value={options.find((o) => o.id == current) || {}}
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
        <View style={{ marginVertical: 20 }}>
          <Image
            source={require("./../../../assets/plant-default.png")}
            style={{
              width: "100%",
              height: 200,
              resizeMode: "contain",
            }}
          />
        </View>
        <View style={{ flexDirection: "row", marginVertical: 5 }}>
          <Light on={gardent.light} />
          <Motor on={gardent.motor} />
        </View>
        <View style={{ flexDirection: "row", marginVertical: 5 }}>
          <Temp temp={gardent.temp} />
          <Humidity humidity={gardent.humidity} />
        </View>
      </View>
    </View>
    // </ScrollView>
  );
};

function mapStateToProp(state) {
  return {
    veges: state.veges.veges,
    current: state.gardent.current,
    gardent: state.gardent,
  };
}
function mapDispatcherToProp(dispatch) {
  return {
    getVeges: () => {
      dispatch(getVeges());
    },
    changeVege: (id) => {
      dispatch(changeVege(id));
    },
    getGardentInfo: () => {
      dispatch(getGardentInfo());
    },
  };
}
export default connect(mapStateToProp, mapDispatcherToProp)(HomeScreen);
