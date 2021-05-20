import React from "react";
import { Text, View, ScrollView, Button, Alert } from "react-native";
import { connect } from "react-redux";
import VegetableService from "../../../../services/Vegetable.service";
import { deleteVege } from "../../../../store/actions/vegetables";
const VegeDetail = ({ navigation, route, deleteVege }) => {
  var vege = route.params.item;
  return (
    <ScrollView style={{ padding: 10 }}>
      <Text>Tên: {vege.name}</Text>
      <Text>
        Nhiệt độ: {vege.temp.from}°C-{vege.temp.to}°C
      </Text>
      <Text>
        Độ ẩm: {vege.humidity.from}%-{vege.humidity.to}%
      </Text>
      <Text>
        Đèn sáng từ {vege.light.from} giờ đến {vege.light.to} giờ
      </Text>
      <Text>Nước được tưới vào các khung giờ: {vege.motor.join(", ")}.</Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <View style={{ flex: 1, marginHorizontal: 5 }}>
          <Button
            title="Sửa"
            onPress={() => {
              navigation.navigate("Vegetables-update", { vege });
            }}
          />
        </View>
        <View style={{ flex: 1, marginHorizontal: 5 }}>
          <Button
            title="Xóa"
            style={{ backgroundColor: "red" }}
            color="red"
            onPress={() => {
              Alert.alert(`Xóa`, `Bạn có chắc muốn xóa ${vege.name}`, [
                {
                  text: "Hủy",
                  onPress: () => {
                    console.log("hủy");
                  },
                },
                {
                  text: "Xóa",
                  onPress: async () => {
                    console.log("xóa");
                    var respone = await VegetableService.delete(vege._id);
                    console.log(respone);
                    if (respone.deletedCount == 1) {
                      deleteVege(vege._id);
                      navigation.goBack();
                    }
                  },
                },
              ]);
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

function mapStateToProp(state) {
  return {};
}
function mapDispatcherToProp(dispatch) {
  return {
    deleteVege: (id) => dispatch(deleteVege(id)),
  };
}

export default connect(mapStateToProp, mapDispatcherToProp)(VegeDetail);
