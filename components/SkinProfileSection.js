import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import InputText from "./InputText";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const SkinProfileSection = () => {
  return (
    <View style={styles.rectangleParent}>
      <View style={styles.groupChild} />
      <View style={styles.groupItem} />
      <Text style={styles.beautyProfile}>Skin Analysis Result</Text>
      <InputText
        bG={require("../assets/bg3.png")}
        name1="Select Skin Type"
        showName={false}
        show={false}
        inputTextPosition="absolute"
        inputTextTop={126}
        inputTextRight="unset"
        inputTextLeft="50%"
        inputTextHeight={60}
        inputTextMarginLeft={-162}
        inputTextWidth={323}
        bGIconBorderRadius={16}
        nameColor="#bdbdbd"
        nameMarginTop={-8.9}
        showColor="#5db075"
        showMarginTop={-8.9}
      />
      <View style={[styles.rectangleGroup, styles.groupLayout]}>
        <View style={[styles.groupInner, styles.groupInnerPosition]} />
        <Text style={styles.acne}>Acne</Text>
      </View>
      <View style={[styles.rectangleContainer, styles.viewLayout]}>
        <View style={[styles.rectangleView, styles.viewLayout]} />
        <Text style={[styles.blackheads, styles.blackheadsPosition]}>
          Blackheads
        </Text>
      </View>
      <View style={[styles.groupView, styles.viewLayout]}>
        <View style={[styles.rectangleView, styles.viewLayout]} />
        <Text style={[styles.whiteheads, styles.blackheadsPosition]}>
          Whiteheads
        </Text>
      </View>
      <Text style={styles.skinProfile}>Skin Profile</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  groupLayout: {
    height: 30,
    width: 60,
    position: "absolute",
  },
  groupInnerPosition: {
    backgroundColor: Color.colorPlum_200,
    borderRadius: Border.br_sm,
    top: 0,
    left: 0,
  },
  viewLayout: {
    width: 104,
    height: 30,
    position: "absolute",
  },
  blackheadsPosition: {
    marginLeft: -39,
    height: 20,
    alignItems: "center",
    color: Color.gray01,
    fontFamily: FontFamily.uI16Semi,
    fontWeight: "600",
    fontSize: FontSize.uI14Regular_size,
    left: "50%",
    top: 5,
    display: "flex",
    textAlign: "left",
    position: "absolute",
  },
  groupChild: {
    borderRadius: Border.br_5xs,
    borderStyle: "solid",
    borderColor: Color.gray03,
    borderWidth: 1,
    height: 198,
    left: 0,
    top: 4,
    width: 358,
    position: "absolute",
  },
  groupItem: {
    left: 12,
    backgroundColor: Color.white,
    width: 117,
    height: 10,
    top: 0,
    position: "absolute",
  },
  beautyProfile: {
    left: 13,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.uI14Regular,
    alignItems: "flex-end",
    width: 116,
    height: 6,
    display: "flex",
    textAlign: "left",
    color: Color.gray04,
    top: 4,
    position: "absolute",
  },
  groupInner: {
    height: 30,
    width: 60,
    position: "absolute",
  },
  acne: {
    marginLeft: -19,
    width: 38,
    height: 20,
    alignItems: "center",
    color: Color.gray01,
    left: "50%",
    top: 5,
    fontFamily: FontFamily.uI16Semi,
    fontWeight: "600",
    fontSize: FontSize.uI14Regular_size,
    display: "flex",
    textAlign: "left",
    position: "absolute",
  },
  rectangleGroup: {
    left: 34,
    top: 140,
  },
  rectangleView: {
    backgroundColor: Color.colorPlum_200,
    borderRadius: Border.br_sm,
    top: 0,
    left: 0,
  },
  blackheads: {
    width: 79,
  },
  rectangleContainer: {
    left: 102,
    top: 140,
  },
  whiteheads: {
    width: 91,
  },
  groupView: {
    left: 214,
    top: 140,
  },
  skinProfile: {
    top: 103,
    left: 22,
    fontFamily: FontFamily.uI16Semi,
    fontWeight: "600",
    fontSize: FontSize.uI14Regular_size,
    textAlign: "left",
    color: Color.gray04,
    position: "absolute",
  },
  rectangleParent: {
    top: 785,
    left: 16,
    height: 202,
    width: 358,
    position: "absolute",
  },
});

export default SkinProfileSection;
