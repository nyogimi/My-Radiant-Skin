import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Ellipse2DefaultImage from "../components/Ellipse2DefaultImage";
import Property1DefaultProperty2 from "../components/Property1DefaultProperty2";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const GettingStarted8 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.gettingStarted8}>
      <Image
        style={styles.keyboardArrowRightIcon}
        contentFit="cover"
        source={require("../assets/keyboard-arrow-right.png")}
      />
      <Ellipse2DefaultImage
        imageDimensions={require("../assets/ellipse-2default2.png")}
        ellipse2DefaultIconPosition="absolute"
        ellipse2DefaultIconWidth={292}
        ellipse2DefaultIconHeight={419}
        ellipse2DefaultIconMarginLeft={-146}
        ellipse2DefaultIconTop={193}
        ellipse2DefaultIconLeft="50%"
        ellipse2DefaultIconOpacity={0.7}
      />
      <Text style={styles.placeYourFace}>{`Place your face
in below circle`}</Text>
      <Image
        style={[styles.gettingStarted8Child, styles.gettingPosition]}
        contentFit="cover"
        source={require("../assets/rectangle-3.png")}
      />
      <View style={[styles.gettingStarted8Item, styles.gettingPosition]} />
      <Image
        style={[styles.cameraPhotosSvg, styles.svgLayout]}
        contentFit="cover"
        source={require("../assets/camera--photos--svg.png")}
      />
      <Image
        style={styles.nurseIcon}
        contentFit="cover"
        source={require("../assets/nurse.png")}
      />
      <Image
        style={styles.lightbulbmaxIcon}
        contentFit="cover"
        source={require("../assets/lightbulbmax.png")}
      />
      <Image
        style={[styles.humanSvg, styles.svgLayout]}
        contentFit="cover"
        source={require("../assets/human--svg.png")}
      />
      <Text
        style={[styles.ensureTheresEnough, styles.noHairOrTypo]}
      >{`Ensure there’s 
enough lighting`}</Text>
      <Text
        style={[styles.makeSureThere, styles.makeSureThereTypo]}
      >{`Make sure there are 
no shadows present`}</Text>
      <Text
        style={[styles.noHairOr, styles.noHairOrTypo]}
      >{`No hair or obstructions
anywhere in your face`}</Text>
      <Text
        style={[styles.plainBackgroundsAre, styles.makeSureThereTypo]}
      >{`Plain backgrounds
are preferable`}</Text>
      <Pressable onPress={() => navigation.navigate("GettingStarted9")}>
        <Property1DefaultProperty2
          buttonText="Continue"
          continueButtonText={require("../assets/keyboard-arrow-right.png")}
          property1DefaultProperty2Position="absolute"
          property1DefaultProperty2Top={750}
          property1DefaultProperty2Left={16}
          property1DefaultProperty2Width={358}
          keyboardArrowRightIconWidth="10.06%"
          keyboardArrowRightIconRight="1.96%"
          keyboardArrowRightIconLeft="87.99%"
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  gettingPosition: {
    width: 390,
    left: 0,
    position: "absolute",
  },
  svgLayout: {
    height: 28,
    width: 28,
    position: "absolute",
  },
  noHairOrTypo: {
    color: Color.colorGray_100,
    fontFamily: FontFamily.uI16Medium,
    fontWeight: "500",
    fontSize: FontSize.uI14Regular_size,
    top: 610,
    textAlign: "center",
    left: "50%",
    position: "absolute",
  },
  makeSureThereTypo: {
    top: 685,
    color: Color.colorGray_100,
    fontFamily: FontFamily.uI16Medium,
    fontWeight: "500",
    fontSize: FontSize.uI14Regular_size,
    textAlign: "center",
    left: "50%",
    position: "absolute",
  },
  keyboardArrowRightIcon: {
    height: "4.27%",
    width: "9.23%",
    top: "86.73%",
    right: "5.9%",
    bottom: "9%",
    left: "84.87%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  placeYourFace: {
    marginLeft: -74,
    top: 109,
    fontSize: FontSize.size_xl,
    fontWeight: "600",
    fontFamily: FontFamily.uI16Semi,
    color: Color.gray04,
    textAlign: "center",
    left: "50%",
    position: "absolute",
  },
  gettingStarted8Child: {
    top: 0,
    opacity: 0.3,
    height: 844,
    left: 0,
  },
  gettingStarted8Item: {
    top: 563,
    borderRadius: 32,
    height: 312,
    left: 0,
    backgroundColor: Color.white,
  },
  cameraPhotosSvg: {
    top: 688,
    left: 183,
  },
  nurseIcon: {
    left: 178,
    width: 38,
    height: 38,
    top: 610,
    position: "absolute",
    overflow: "hidden",
  },
  lightbulbmaxIcon: {
    marginTop: 187,
    marginLeft: -177,
    top: "50%",
    height: 41,
    width: 28,
    left: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  humanSvg: {
    top: 691,
    left: 18,
  },
  ensureTheresEnough: {
    marginLeft: -135,
  },
  makeSureThere: {
    marginLeft: 30,
  },
  noHairOr: {
    marginLeft: 22,
  },
  plainBackgroundsAre: {
    marginLeft: -145,
  },
  gettingStarted8: {
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 844,
    backgroundColor: Color.white,
  },
});

export default GettingStarted8;
