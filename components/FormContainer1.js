import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { FontFamily, Border, Color, FontSize } from "../GlobalStyles";

const FormContainer1 = () => {
  return (
    <View style={[styles.groupParent, styles.groupParentPosition]}>
      <View style={styles.groupParentPosition}>
        <View style={[styles.groupChild, styles.groupParentPosition]} />
        <Image
          style={styles.gallery1Icon}
          contentFit="cover"
          source={require("../assets/gallery-1.png")}
        />
        <Text style={[styles.blackHeads, styles.blackHeadsTypo]}>
          Black Heads
        </Text>
      </View>
      <Text style={[styles.darkspotsInfo, styles.blackHeadsTypo]}>LORem</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  groupParentPosition: {
    height: 120,
    width: 298,
    left: 0,
    top: 0,
    position: "absolute",
  },
  blackHeadsTypo: {
    fontFamily: FontFamily.uI16Semi,
    fontWeight: "600",
    position: "absolute",
  },
  groupChild: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.colorLavender,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 12,
      height: 12,
    },
    shadowRadius: 6,
    elevation: 6,
    shadowOpacity: 1,
  },
  gallery1Icon: {
    top: 27,
    left: 37,
    width: 48,
    height: 48,
    position: "absolute",
  },
  blackHeads: {
    marginLeft: -123,
    top: "63.33%",
    left: "50%",
    fontSize: FontSize.size_xs,
    color: Color.colorGray_400,
    textAlign: "center",
  },
  darkspotsInfo: {
    top: 52,
    left: 143,
    fontSize: FontSize.size_smi,
    color: Color.black,
    textAlign: "left",
  },
  groupParent: {
    backgroundColor: Color.white,
  },
});

export default FormContainer1;
