import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import Ellipse2DefaultImage from "../components/Ellipse2DefaultImage";
import { Color, FontFamily, FontSize } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";

const GettingStarted7 = () => {
  const navigation = useNavigation();

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.navigate("GettingStarted8");
    }, 2000);

    // Clear the timeout if the component is unmounted
    return () => clearTimeout(timeout);
  }, []);

  return (
    <View style={styles.gettingStarted7}>
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
      <Text
        style={[styles.placeYourFace, styles.placeYourFaceTypo]}
      >{`Place your face
in below circle`}</Text>
      <View
        style={[
          styles.guidelinesForTakingAPicturParent,
          styles.questionCircleOIconLayout,
        ]}
      >
        <Text style={[styles.guidelinesForTaking, styles.placeYourFaceTypo]}>
          Guidelines for taking a picture
        </Text>
        <Image
          style={[styles.questionCircleOIcon, styles.questionCircleOIconLayout]}
          contentFit="cover"
          source={require("../assets/questioncircleo1.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  placeYourFaceTypo: {
    textAlign: "center",
    color: Color.gray04,
    fontFamily: FontFamily.uI16Semi,
    fontWeight: "600",
    fontSize: FontSize.size_xl,
    left: "50%",
    position: "absolute",
  },
  questionCircleOIconLayout: {
    height: 29,
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
  },
  guidelinesForTaking: {
    marginLeft: -131,
    top: 3,
  },
  questionCircleOIcon: {
    top: 0,
    left: 0,
    width: 29,
    overflow: "hidden",
  },
  guidelinesForTakingAPicturParent: {
    marginLeft: -159,
    top: 732,
    width: 318,
    left: "50%",
    height: 29,
  },
  gettingStarted7: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default GettingStarted7;
