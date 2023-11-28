import * as React from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import Property1DefaultProperty2 from "../components/Property1DefaultProperty2";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const GettingStarted2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.gettingStarted2}>
      <Pressable
        style={[styles.alreadyHaveAnContainer, styles.myParentPosition]}
        onPress={() => navigation.navigate("LoginPage")}
      >
        <Text style={styles.text}>
          <Text style={styles.alreadyHaveAn}>Already have an account?</Text>
          <Text style={styles.logIn}> Log In</Text>
        </Text>
      </Pressable>
      <View style={styles.analyzeSkinConditionsUsingParent}>
        <Text style={styles.analyzeSkinConditions}>{`Analyze skin conditions
using our built-in AI`}</Text>
        <Text
          style={styles.loremIpsumDolor}
        >{`Scan your Face at your Comfort `}</Text>
        <Image
          style={styles.groupChild}
          contentFit="cover"
          source={require("../assets/group-3883.png")}
        />
      </View>
      <Image
        style={styles.gettingStarted2Child}
        contentFit="cover"
        source={require("../assets/group-3880.png")}
      />
      <View style={[styles.myParent, styles.myParentPosition]}>
        <Text style={styles.my}>my</Text>
        <Text style={[styles.radiant, styles.skinTypo]}>radiant</Text>
        <Text style={[styles.skin, styles.skinTypo]}>skin</Text>
      </View>
      
      <Pressable
        onPress={() => navigation.navigate("GettingStarted3")}
        style={styles.propertyPressable}
      >
        <Property1DefaultProperty2
          buttonText="Get started"
          continueButtonText={require("../assets/keyboard-arrow-right2.png")}
          property1DefaultProperty2Position="absolute"
          property1DefaultProperty2Top={724}
          property1DefaultProperty2Left={47}
          property1DefaultProperty2Width={295}
          keyboardArrowRightIconWidth="10.07%"
          keyboardArrowRightIconRight="1.93%"
          keyboardArrowRightIconLeft="88%"
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  myParentPosition: {
    left: "50%",
    position: "absolute",
  },
  skinTypo: {
    fontSize: FontSize.size_13xl,
    fontFamily: FontFamily.lilitaOne,
    textAlign: "center",
    left: "50%",
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
    fontFamily: FontFamily.uI16Semi,
    fontWeight: "600",
    fontSize: FontSize.uI14Regular_size,
  },
  alreadyHaveAnContainer: {
    bottom: 44,
  },
  analyzeSkinConditions: {
    marginTop: 51,
    fontSize: FontSize.uI30Semi_size,
    textAlign: "center",
    color: Color.colorDarkslategray_100,
    top: "50%",
    marginLeft: -172,
    fontFamily: FontFamily.uI16Semi,
    fontWeight: "600",
    left: "50%",
    position: "absolute",
  },
  loremIpsumDolor: {
    marginTop: 148,
    marginLeft: -118,
    fontFamily: FontFamily.uI14Regular,
    width: 232,
    height: 42,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.colorDarkslategray_100,
    top: "50%",
    fontSize: FontSize.uI14Regular_size,
    left: "50%",
    position: "absolute",
  },
  groupChild: {
    height: "61.05%",
    width: "70.35%",
    top: "-0.53%",
    right: "15.41%",
    bottom: "39.47%",
    left: "14.24%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  analyzeSkinConditionsUsingParent: {
    marginTop: -216,
    width: 344,
    height: 380,
    top: "50%",
    marginLeft: -172,
    left: "50%",
    position: "absolute",
  },
  gettingStarted2Child: {
    top: 614,
    left: 176,
    width: 38,
    height: 6,
    position: "absolute",
  },
  my: {
    marginLeft: -43,
    top: 0,
    fontSize: FontSize.size_xl,
    width: 29,
    fontFamily: FontFamily.lilitaOne,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.colorDarkslategray_100,
    left: "50%",
    position: "absolute",
  },
  radiant: {
    top: 9,
    marginLeft: -51,
    color: Color.colorMediumpurple_100,
  },
  skin: {
    marginLeft: -7,
    top: 34,
    color: Color.colorThistle,
  },
  myParent: {
    top: 44,
    width: 102,
    height: 71,
    marginLeft: -51,
  },
  gettingStarted2: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default GettingStarted2;
