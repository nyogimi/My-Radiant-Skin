import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const SkinHealthCard = () => {
  return (
    <View style={[styles.groupParent, styles.parentShadowBox]}>
      <View style={styles.innerCircleParent}>
        <Image
          style={[styles.innerCircleIcon, styles.circleIconPosition]}
          contentFit="cover"
          source={require("../assets/inner-circle.png")}
        />
        <Image
          style={[styles.outerCircleIcon, styles.circleIconPosition]}
          contentFit="cover"
          source={require("../assets/outer-circle.png")}
        />
        <Text style={[styles.text, styles.textTypo]}>
          <Text style={styles.txt}>
            <Text style={styles.text1}>{`67 `}</Text>
            <Text style={styles.text2}>/100</Text>
          </Text>
        </Text>
        <Text style={[styles.minsAgo, styles.textTypo]}>15 mins ago</Text>
      </View>
      <View style={[styles.cameraFotoParent, styles.parentShadowBox]}>
        <Image
          style={styles.cameraFotoIcon}
          contentFit="cover"
          source={require("../assets/camerafoto1.png")}
        />
        <Text style={styles.analyzeSkin}>Analyze Skin</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentShadowBox: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: "50%",
    position: "absolute",
  },
  circleIconPosition: {
    top: 0,
    position: "absolute",
  },
  textTypo: {
    textAlign: "left",
    fontFamily: FontFamily.uI16Semi,
    fontWeight: "600",
    marginLeft: 7.5,
    left: "50%",
    position: "absolute",
  },
  innerCircleIcon: {
    left: 0,
    width: 54,
    height: 54,
  },
  outerCircleIcon: {
    left: -4,
    width: 59,
    height: 62,
  },
  text1: {
    fontSize: FontSize.size_13xl,
    color: Color.gray04,
  },
  text2: {
    fontSize: FontSize.size_xl,
    color: Color.colorGray_100,
  },
  txt: {
    lineBreak: "anywhere",
    width: "100%",
  },
  text: {
    top: 2,
    display: "flex",
    alignItems: "flex-end",
    width: 92,
    height: 34,
  },
  minsAgo: {
    top: 37,
    fontSize: FontSize.uI14Regular_size,
    color: Color.colorPlum_200,
  },
  innerCircleParent: {
    top: 34,
    left: 62,
    width: 199,
    height: 54,
    position: "absolute",
  },
  cameraFotoIcon: {
    width: 27,
    height: 28,
    overflow: "hidden",
  },
  analyzeSkin: {
    fontSize: FontSize.size_xs,
    textDecoration: "underline",
    fontWeight: "700",
    fontFamily: FontFamily.manropeBold,
    color: Color.colorCornflowerblue,
    textAlign: "center",
    marginLeft: 10,
  },
  cameraFotoParent: {
    marginLeft: -74.5,
    top: 94,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorGray_300,
    borderStyle: "solid",
    borderColor: Color.colorGray_200,
    borderWidth: 2,
    width: 150,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: Padding.p_3xs,
  },
  groupParent: {
    marginLeft: -162,
    top: 616,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.white,
    width: 323,
    height: 167,
    overflow: "hidden",
  },
});

export default SkinHealthCard;
