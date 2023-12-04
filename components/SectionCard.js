import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Border, FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const SectionCard = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.groupParent, styles.groupParentPosition]}>
      <View style={[styles.rectangleWrapper, styles.groupChildLayout]}>
        <LinearGradient
          style={[styles.groupChild, styles.groupChildPosition]}
          locations={[0, 1]}
          colors={["#818af9", "#656bb5"]}
        />
      </View>
      <Pressable
        style={[styles.frameParent, styles.buttonprimaryLayout]}
        onPress={() => navigation.navigate("GettingStarted6")}
      >
        <View style={[styles.buttonprimaryWrapper, styles.buttonprimaryLayout]}>
          <View style={[styles.buttonprimary, styles.buttonprimaryLayout]}>
            <Text style={styles.signUp}>Sign Up</Text>
          </View>
        </View>
        <Image
          style={[styles.cameraFotoIcon, styles.groupParentPosition]}
          contentFit="cover"
          source={require("../assets/camerafoto.png")}
        />
      </Pressable>
      <Image
        style={[styles.userIcon, styles.wrapperLayout]}
        contentFit="cover"
        source={require("../assets/user.png")}
      />
      <Pressable
        style={[styles.wrapper, styles.wrapperLayout]}
        onPress={() => navigation.navigate("HomeAltPage")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/group-3860.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  groupParentPosition: {
    position: "absolute",
    overflow: "hidden",
  },
  groupChildLayout: {
    height: 2,
    width: 12,
    position: "absolute",
  },
  groupChildPosition: {
    top: 0,
    left: 0,
  },
  buttonprimaryLayout: {
    height: 54,
    position: "absolute",
  },
  wrapperLayout: {
    height: 24,
    width: 24,
    top: 25,
    position: "absolute",
  },
  groupChild: {
    borderRadius: Border.br_8xs,
    backgroundColor: "transparent",
    left: 0,
    height: 2,
    width: 12,
    position: "absolute",
  },
  rectangleWrapper: {
    top: 50,
    left: 290,
  },
  signUp: {
    fontSize: FontSize.uI16Semi_size,
    fontWeight: "600",
    fontFamily: FontFamily.uI16Semi,
    color: Color.white,
    textAlign: "center",
    display: "none",
  },
  buttonprimary: {
    right: 0,
    bottom: 0,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.colorMediumpurple_100,
    alignItems: "center",
    paddingHorizontal: Padding.p_13xl,
    paddingVertical: Padding.p_base,
    opacity: 0.8,
    left: 0,
  },
  buttonprimaryWrapper: {
    width: 52,
    height: 54,
    left: 0,
    top: 0,
  },
  cameraFotoIcon: {
    height: "52.04%",
    width: "51.92%",
    top: "24.07%",
    right: "24.04%",
    bottom: "23.89%",
    left: "35%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  frameParent: {
    top: 9,
    left: 169,
    width: 52,
    height: 54,
  },
  userIcon: {
    left: 284,
    overflow: "hidden",
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  wrapper: {
    left: 82,
  },
  groupParent: {
    marginLeft: -195,
    top: 799,
    left: "50%",
    borderTopLeftRadius: Border.br_26xl,
    borderTopRightRadius: Border.br_26xl,
    backgroundColor: Color.white,
    shadowColor: "rgba(0, 0, 0, 0.03)",
    shadowOffset: {
      width: 0,
      height: -0,
    },
    shadowRadius: 30,
    elevation: 30,
    shadowOpacity: 1,
    width: 390,
    height: 73,
    overflow: "hidden",
  },
});

export default SectionCard;
