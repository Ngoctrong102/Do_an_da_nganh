import React, { useEffect, useRef, useState } from "react";
import { Button, View, Text, Image, ScrollView } from "react-native";
import Header from "../../components/Home/Header";
import SelectBox from "react-native-multi-selectbox";
import Light from "../../components/Home/light/Light";
import { connect } from "react-redux";
import { getVeges, changeCurrent } from "../../store/actions/vegetables";
import Motor from "../../components/Home/Motor/Motor";
import Temp from "../../components/Home/Temp/Temp";
import Humidity from "../../components/Home/Humidity/Humidity";
const HomeScreen = ({ navigation, setToken, veges, getVeges, current }) => {
  const [selectedTeam, setSelectedTeam] = useState({});
  useEffect(() => {
    if (veges.length == 0) {
      getVeges();
    }
  }, []);

  const handleChange = (selection) => {
    setSelectedTeam(selection);
    changeCurrent(selection.id);
    // guiwr thay đổi rau cho server
    // hiển thị ra thông tin rau ở dưới
    console.log(selection);
  };
  return (
    <ScrollView>
      <View style={{ flex: 1 }}>
        <Header />
        <View paddingHorizontal={10}>
          <SelectBox
            label=""
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
            <Light />
            <Motor />
          </View>
          <View style={{ flexDirection: "row", marginVertical: 5 }}>
            <Temp />
            <Humidity />
          </View>
          {/* <View>
            <Text>
              {JSON.stringify(veges.filter((v) => v._id === selectedTeam.id))}
            </Text>
          </View> */}
        </View>
      </View>
    </ScrollView>
  );
};

function mapStateToProp(state) {
  return {
    veges: state.veges.veges,
    current: state.veges.current,
  };
}
function mapDispatcherToProp(dispatch) {
  return {
    getVeges: () => {
      dispatch(getVeges());
    },
    changeCurrent: (id) => {
      dispatch(changeCurrent(id));
    },
  };
}
export default connect(mapStateToProp, mapDispatcherToProp)(HomeScreen);
