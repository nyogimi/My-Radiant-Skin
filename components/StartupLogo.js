import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const StartupLogo = () => {
  return (
    <View style={styles.startuplogo}>
      <Text style={styles.my}>my</Text>
      <Text style={[styles.radiant, styles.skinTypo]}>radiant</Text>
      <Text style={[styles.skin, styles.skinTypo]}>skin</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  skinTypo: {
    fontSize: FontSize.size_45xl,
    textAlign: "center",
    fontFamily: FontFamily.lilitaOne,
    position: "absolute",
  },
  my: {
    width: "42.65%",
    top: "0%",
    left: "1.96%",
    fontSize: FontSize.size_21xl,
    color: Color.colorDarkslategray_100,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    fontFamily: FontFamily.lilitaOne,
    position: "absolute",
  },
  radiant: {
    top: "10.37%",
    left: "0%",
    color: Color.colorMediumpurple_100,
  },
  skin: {
    top: "45.93%",
    left: "43.14%",
    color: Color.colorThistle,
  },
  startuplogo: {
    marginLeft: -111,
    top: 313,
    left: "50%",
    width: 204,
    height: 135,
    position: "absolute",
  },
});

export default StartupLogo;
