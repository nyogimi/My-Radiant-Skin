import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Border, Color, FontSize, FontFamily, Padding } from "../GlobalStyles";

const MyProfileSection = () => {
  return (
    <View style={[styles.rectangleParent, styles.groupChildPosition]}>
      <View style={[styles.groupChild, styles.groupChildPosition]} />
      <Image
        style={[styles.groupItem, styles.groupLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-39161.png")}
      />
      <Image
        style={[styles.groupInner, styles.groupLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-39151.png")}
      />
      <Image
        style={styles.groupIcon}
        contentFit="cover"
        source={require("../assets/group-3868.png")}
      />
      <View style={[styles.myProfileWrapper, styles.rectangleParentShadowBox]}>
        <Text style={styles.myProfile}>My Profile</Text>
      </View>
      <Text style={styles.goodMorningJaneContainer}>
        <Text style={styles.goodMorning}>{`Good morning, 
`}</Text>
        <Text style={styles.jane}>Jane!</Text>
      </Text>
      <Image
        style={styles.rectangleIcon}
        contentFit="cover"
        source={require("../assets/rectangle.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildPosition: {
    height: 320,
    width: 390,
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupLayout: {
    width: 246,
    position: "absolute",
  },
  rectangleParentShadowBox: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  groupChild: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorPlum_200,
  },
  groupItem: {
    top: 122,
    left: 144,
    height: 215,
    opacity: 0.3,
  },
  groupInner: {
    height: 246,
    opacity: 0.35,
    left: 0,
    top: 0,
    width: 246,
  },
  groupIcon: {
    top: 76,
    left: 25,
    width: 321,
    height: 237,
    position: "absolute",
  },
  myProfile: {
    fontSize: FontSize.size_xs,
    textDecoration: "underline",
    fontWeight: "700",
    fontFamily: FontFamily.manropeBold,
    color: Color.colorCornflowerblue,
    textAlign: "center",
  },
  myProfileWrapper: {
    top: 240,
    left: 47,
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
    position: "absolute",
  },
  goodMorning: {
    fontSize: FontSize.size_5xl,
  },
  jane: {
    fontSize: FontSize.size_17xl,
  },
  goodMorningJaneContainer: {
    top: 126,
    left: 29,
    fontWeight: "600",
    fontFamily: FontFamily.uI16Semi,
    color: Color.colorDarkslategray_100,
    textAlign: "left",
    width: 178,
    textShadowColor: "rgba(97, 84, 170, 0.13)",
    textShadowOffset: {
      width: 0,
      height: 100,
    },
    textShadowRadius: 80,
    position: "absolute",
  },
  rectangleIcon: {
    top: 100,
    left: 226,
    borderRadius: Border.br_8xl,
    width: 181,
    height: 182,
    position: "absolute",
  },
  rectangleParent: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
});

export default MyProfileSection;
