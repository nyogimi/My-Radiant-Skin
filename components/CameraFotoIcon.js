import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet } from "react-native";

const CameraFotoIcon = () => {
  return (
    <Image
      style={styles.cameraFotoIcon}
      contentFit="cover"
      source={require("../assets/camerafoto2.png")}
    />
  );
};

const styles = StyleSheet.create({
  cameraFotoIcon: {
    position: "absolute",
    height: "52%",
    width: "52%",
    top: "24%",
    right: "24%",
    bottom: "24%",
    left: "24%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
});

export default CameraFotoIcon;
