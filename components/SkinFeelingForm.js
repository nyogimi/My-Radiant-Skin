import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const SkinFeelingForm = () => {
  return (
    <View style={styles.ellipseParent}>
      <Image
        style={[styles.frameChild, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-39162.png")}
      />
      <Image
        style={[styles.frameItem, styles.frameIconPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-39152.png")}
      />
      <Image
        style={[styles.frameInner, styles.frameIconPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-3923.png")}
      />
      <Text style={styles.tellUsHow}>{`Tell us how is your skin feeling
today?`}</Text>
      <View style={[styles.groupWrapper, styles.groupWrapperLayout]}>
        <View style={[styles.dailySkinLogParent, styles.parentPosition]}>
          <Text style={styles.dailySkinLog}>Daily Skin Log</Text>
          <Image
            style={[styles.dateInputIcon, styles.groupWrapperLayout]}
            contentFit="cover"
            source={require("../assets/dateinput.png")}
          />
        </View>
      </View>
      <Image
        style={[styles.groupIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/group-3866.png")}
      />
      <View style={[styles.rectangleParent, styles.groupLayout]}>
        <View style={[styles.groupChild, styles.groupLayout]} />
        <View style={[styles.amazingParent, styles.iconParentLayout]}>
          <Text style={[styles.amazing, styles.okayTypo]}>Amazing</Text>
          <Image
            style={[styles.iconSmile, styles.iconParentLayout]}
            contentFit="cover"
            source={require("../assets/-icon-smile.png")}
          />
        </View>
      </View>
      <View style={[styles.rectangleGroup, styles.groupLayout]}>
        <View style={[styles.groupChild, styles.groupLayout]} />
        <View style={[styles.iconMeh, styles.iconParentLayout]}>
          <View style={[styles.okayParent, styles.iconParentLayout]}>
            <Text style={[styles.okay, styles.okayTypo]}>Okay</Text>
            <Image
              style={[styles.vectorIcon, styles.iconParentLayout]}
              contentFit="cover"
              source={require("../assets/vector1.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.rectangleContainer, styles.groupLayout]}>
        <View style={[styles.groupChild, styles.groupLayout]} />
        <Text style={[styles.awful, styles.okayTypo]}>Awful</Text>
        <Image
          style={[styles.iconFrown, styles.iconParentLayout]}
          contentFit="cover"
          source={require("../assets/-icon-frown.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    maxWidth: "100%",
    overflow: "hidden",
  },
  frameIconPosition: {
    left: 0,
    maxWidth: "100%",
    overflow: "hidden",
  },
  groupWrapperLayout: {
    height: 18,
    position: "absolute",
  },
  parentPosition: {
    right: 0,
    left: 0,
    top: 0,
  },
  groupLayout: {
    height: 25,
    position: "absolute",
  },
  iconParentLayout: {
    height: 20,
    position: "absolute",
  },
  okayTypo: {
    color: Color.gray01,
    fontSize: FontSize.uI14Regular_size,
    textAlign: "left",
    fontFamily: FontFamily.uI16Semi,
    fontWeight: "600",
    position: "absolute",
  },
  frameChild: {
    top: 14,
    right: -56,
    left: 169,
    height: 210,
    opacity: 0.3,
    position: "absolute",
  },
  frameItem: {
    right: 111,
    height: 212,
    opacity: 0.35,
    top: 0,
    left: 0,
    position: "absolute",
  },
  frameInner: {
    top: 63,
    right: -74,
    height: 234,
    position: "absolute",
  },
  tellUsHow: {
    top: 113,
    left: 51,
    fontSize: FontSize.uI16Semi_size,
    color: Color.colorDarkslategray_100,
    textAlign: "center",
    fontFamily: FontFamily.uI16Semi,
    fontWeight: "600",
    position: "absolute",
  },
  dailySkinLog: {
    left: 20,
    fontSize: FontSize.size_xs,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.colorMediumpurple_100,
    textAlign: "left",
    top: 2,
    position: "absolute",
  },
  dateInputIcon: {
    right: 85,
    left: 0,
    maxWidth: "100%",
    overflow: "hidden",
    top: 0,
  },
  dailySkinLogParent: {
    height: 18,
    position: "absolute",
  },
  groupWrapper: {
    top: 83,
    right: 110,
    left: 110,
  },
  groupIcon: {
    top: 11,
    right: 17,
    left: 24,
    height: 39,
    position: "absolute",
  },
  groupChild: {
    backgroundColor: Color.colorRosybrown,
    right: 0,
    left: 0,
    top: 0,
    height: 25,
    borderRadius: Border.br_5xs,
  },
  amazing: {
    left: 26,
    top: 1,
    fontSize: FontSize.uI14Regular_size,
  },
  iconSmile: {
    right: 66,
    left: 0,
    maxWidth: "100%",
    overflow: "hidden",
    top: 0,
  },
  amazingParent: {
    right: 7,
    left: 7,
    height: 20,
    top: 3,
  },
  rectangleParent: {
    right: 194,
    left: 29,
    elevation: 2,
    shadowRadius: 2,
    top: 186,
    height: 25,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  okay: {
    left: 28,
    top: 1,
    fontSize: FontSize.uI14Regular_size,
  },
  vectorIcon: {
    right: 43,
    left: 0,
    maxWidth: "100%",
    overflow: "hidden",
    top: 0,
  },
  okayParent: {
    right: 0,
    left: 0,
    top: 0,
  },
  iconMeh: {
    right: 10,
    left: 7,
    height: 20,
    top: 2,
  },
  rectangleGroup: {
    right: 105,
    left: 138,
    elevation: 2,
    shadowRadius: 2,
    top: 186,
    height: 25,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  awful: {
    top: 4,
    left: 34,
  },
  iconFrown: {
    right: 54,
    left: 7,
    height: 20,
    top: 3,
    maxWidth: "100%",
    overflow: "hidden",
  },
  rectangleContainer: {
    right: 15,
    left: 227,
    elevation: 2,
    shadowRadius: 2,
    top: 186,
    height: 25,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  ellipseParent: {
    top: 339,
    left: 33,
    backgroundColor: Color.colorMediumpurple_100,
    shadowRadius: 4,
    elevation: 4,
    width: 323,
    height: 227,
    overflow: "hidden",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_5xs,
    position: "absolute",
  },
});

export default SkinFeelingForm;
