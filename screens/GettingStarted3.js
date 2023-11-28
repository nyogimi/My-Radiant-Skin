import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import Property1DefaultProperty2 from "../components/Property1DefaultProperty2";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const GettingStarted3 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.gettingStarted3}>
      <Text style={styles.alreadyHaveAnContainer}>
        <Text style={styles.alreadyHaveAn}>Already have an account?</Text>
        <Text style={styles.logIn}> Log In</Text>
      </Text>
      <Image
        style={styles.gettingStarted3Child}
        contentFit="cover"
        source={require("../assets/group-3882.png")}
      />
      <View style={styles.getPersonalizedDailySkinCaParent}>
        <Text
          style={[styles.getPersonalizedDaily, styles.loremIpsumDolorPosition]}
        >{`Get personalized
daily skin care tips`}</Text>
        <Text
          style={[styles.loremIpsumDolor, styles.myFlexBox]}
        >{`Skincare for All. `}</Text>
        <Image
          style={styles.groupChild}
          contentFit="cover"
          source={require("../assets/group-3884.png")}
        />
      </View>
      <View style={styles.myParent}>
        <Text style={[styles.my, styles.myTypo]}>my</Text>
        <Text style={[styles.radiant, styles.myTypo]}>radiant</Text>
        <Text style={[styles.skin, styles.myTypo]}>skin</Text>
      </View>
      <Pressable
        onPress={() => navigation.navigate("SignUpPage")}
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
        onComponent1Press={() => navigation.navigate("SignUpPage")}
      />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  loremIpsumDolorPosition: {
    textAlign: "center",
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  myFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    color: Color.colorDarkslategray_100,
  },
  myTypo: {
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
  alreadyHaveAnContainer: {
    marginLeft: -110,
    bottom: 44,
    textAlign: "left",
    fontFamily: FontFamily.uI16Semi,
    fontWeight: "600",
    fontSize: FontSize.uI14Regular_size,
    left: "50%",
    position: "absolute",
  },
  gettingStarted3Child: {
    top: 614,
    left: 176,
    width: 38,
    height: 6,
    position: "absolute",
  },
  getPersonalizedDaily: {
    marginTop: 51,
    marginLeft: -142.5,
    color: Color.colorDarkslategray_100,
    textAlign: "center",
    fontSize: FontSize.size_13xl,
    fontFamily: FontFamily.uI16Semi,
    fontWeight: "600",
  },
  loremIpsumDolor: {
    marginTop: 148,
    marginLeft: -115.5,
    fontFamily: FontFamily.uI14Regular,
    width: 232,
    height: 42,
    textAlign: "center",
    top: "50%",
    left: "50%",
    position: "absolute",
    fontSize: FontSize.uI14Regular_size,
    alignItems: "center",
    display: "flex",
  },
  groupChild: {
    bottom: 142,
    left: -4,
    width: 288,
    height: 238,
    position: "absolute",
  },
  getPersonalizedDailySkinCaParent: {
    marginTop: -216,
    marginLeft: -146,
    width: 289,
    height: 380,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  my: {
    marginLeft: -43,
    top: 0,
    fontSize: FontSize.size_xl,
    width: 29,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    color: Color.colorDarkslategray_100,
  },
  radiant: {
    top: 9,
    marginLeft: -51,
    fontSize: FontSize.size_13xl,
    fontFamily: FontFamily.lilitaOne,
    color: Color.colorMediumpurple_100,
  },
  skin: {
    marginLeft: -7,
    top: 34,
    color: Color.colorThistle,
    fontSize: FontSize.size_13xl,
    fontFamily: FontFamily.lilitaOne,
  },
  myParent: {
    top: 44,
    width: 102,
    height: 71,
    marginLeft: -51,
    left: "50%",
    position: "absolute",
  },
  gettingStarted3: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default GettingStarted3;
