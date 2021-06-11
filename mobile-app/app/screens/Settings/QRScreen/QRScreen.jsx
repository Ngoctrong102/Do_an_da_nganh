import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button, Alert } from "react-native";
import { connect } from "react-redux";
import { BarCodeScanner } from "expo-barcode-scanner";
import AsyncStorage from "@react-native-async-storage/async-storage";
import User from "../../../services/User.service";
import { updateQRCode } from "../../../store/actions/user";

function QRScreen({ navigation, route, setToken, updateQRCode }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = async ({ type, data }) => {
    setScanned(true);

    var respone = await User.addQR(data);
    if (respone.status == 1) {
      updateQRCode(data);
      await AsyncStorage.setItem("token", respone.token);
      setToken(respone.token);

      Alert.alert(
        "Thành công",
        "Thêm vườn rau thành công",
        [
          {
            text: "Oke",
            onPress: () => {
              navigation.goBack();
            },
          },
        ],
        { cancelable: false }
      );
      navigation.back();
    }
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && (
        <Button title={"Tap to Scan Again"} onPress={() => setScanned(false)} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
});

function mapDispatcherToProp(dispatch) {
  return {
    updateQRCode: (code) => dispatch(updateQRCode(code)),
  };
}
export default connect(null, mapDispatcherToProp)(QRScreen);
