import * as React from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import Property1DefaultProperty2 from "../components/Property1DefaultProperty2";
import { FontFamily, Color, FontSize } from "../GlobalStyles";

const GettingStarted1 = () => {
  const navigation = useNavigation();

  // Function to handle swipe gestures
  const handleSwipe = (event) => {
    if (event.nativeEvent.translationX > 50 && event.nativeEvent.state === State.END) {
      // If swiped to the right
      navigation.navigate("GettingStarted2");
    }
  };

  return (
    <View style={styles.gettingStarted1}>
      <Pressable
        style={[styles.alreadyHaveAnContainer, styles.myParentPosition]}
        onPress={() => navigation.navigate("LoginPage")}
      >
        <Text style={[styles.text, styles.textTypo]}>
          <Text style={styles.alreadyHaveAn}>Already have an account?</Text>
          <Text style={styles.logIn}> Log In</Text>
        </Text>
      </Pressable>
      <View style={[styles.myParent, styles.myParentPosition]}>
        <Text style={[styles.my, styles.myFlexBox]}>my</Text>
        <Text style={[styles.radiant, styles.myTypo]}>radiant</Text>
        <Text style={[styles.skin, styles.myTypo]}>skin</Text>
      </View>
      <Pressable
        onPress={() => navigation.navigate("GettingStarted2")}
        style={[styles.propertyPressable, styles.myParentPosition]}
      >
        <Property1DefaultProperty2
          buttonText="Get started"
          continueButtonText={require("../assets/keyboard-arrow-right2.png")}
          property1DefaultProperty2Position="absolute"
          property1DefaultProperty2Top={724}
          property1DefaultProperty2Left={-150}
          property1DefaultProperty2Width={295}
          keyboardArrowRightIconWidth="10.07%"
          keyboardArrowRightIconRight="1.93%"
          keyboardArrowRightIconLeft="88%"
        />
      </Pressable>
      <View style={[styles.groupParent, styles.groupLayout]}>
        <Image
          style={[styles.groupChild, styles.groupLayout]}
          contentFit="cover"
          source={require("../assets/group-1.png")}
        />
        <Text
          style={[styles.getTailoredSkin, styles.getTailoredSkinPosition]}
        >{`Get tailored skin 
care routines`}</Text>
        <Text
          style={[styles.loremIpsumDolor, styles.getTailoredSkinPosition]}
        >{`Skincare at you fingertips. `}</Text>
      </View>
      <Image
        style={styles.gettingStarted1Child}
        contentFit="cover"
        source={require("../assets/group-3878.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  myParentPosition: {
    left: "50%",
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.uI16Semi,
    fontWeight: "600",
  },
  myFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
  myTypo: {
    textAlign: "center",
    fontFamily: FontFamily.lilitaOne,
    left: "50%",
    position: "absolute",
  },
  groupLayout: {
    width: 280,
    position: "absolute",
  },
  getTailoredSkinPosition: {
    top: "50%",
    textAlign: "center",
    color: Color.colorDarkslategray_100,
    left: "48%",
    position: "absolute",
  },
  alreadyHaveAn: {
    color: Color.colorPlum_200,
  },
  logIn: {
    color: Color.colorMediumpurple_100,
  },
  text: {
    marginLeft: -110,
    textAlign: "left",
    fontSize: FontSize.uI14Regular_size,
  },
  alreadyHaveAnContainer: {
    bottom: 44,
  },
  my: {
    marginLeft: -43,
    top: 0,
    fontSize: FontSize.size_xl,
    width: 29,
    textAlign: "center",
    fontFamily: FontFamily.lilitaOne,
    left: "50%",
    position: "absolute",
    color: Color.colorDarkslategray_100,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
  radiant: {
    top: 9,
    fontSize: FontSize.size_13xl,
    fontFamily: FontFamily.lilitaOne,
    textAlign: "center",
    marginLeft: -51,
    color: Color.colorMediumpurple_100,
  },
  skin: {
    marginLeft: -7,
    top: 34,
    color: Color.colorThistle,
    fontSize: FontSize.size_13xl,
    fontFamily: FontFamily.lilitaOne,
    textAlign: "center",
  },
  myParent: {
    top: 44,
    width: 102,
    height: 71,
    marginLeft: -51,
  },
  groupChild: {
    right: 0,
    bottom: 148,
    height: 232,
  },
  getTailoredSkin: {
    marginTop: 51,
    marginLeft: -132,
    fontSize: FontSize.size_13xl,
    fontFamily: FontFamily.uI16Semi,
    fontWeight: "600",
  },
  loremIpsumDolor: {
    marginTop: 148,
    marginLeft: -120,
    fontFamily: FontFamily.uI14Regular,
    width: 232,
    height: 42,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    fontSize: FontSize.uI14Regular_size,
  },
  groupParent: {
    right: 53,
    bottom: 258,
    height: 380,
  },
  gettingStarted1Child: {
    top: 614,
    left: 176,
    width: 38,
    height: 6,
    position: "absolute",
  },
  gettingStarted1: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default GettingStarted1;
