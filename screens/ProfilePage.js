import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import SectionCard from "../components/SectionCard";
import Property1DefaultProperty2 from "../components/Property1DefaultProperty2";
import { FontFamily, Color, FontSize } from "../GlobalStyles";

const ProfilePage = () => {
  return (
    <View style={styles.profilePage}>
      <Image
        style={styles.profilePageChild}
        contentFit="cover"
        source={require("../assets/frame-3879.png")}
      />
      <Text style={[styles.profilePage1, styles.profileTypo]}>
        Profile Page
      </Text>
      <SectionCard />
      <Text style={[styles.profile, styles.profileTypo]}>{`Name: 
Gender:
Age:
Email:`}</Text>
      <Property1DefaultProperty2
        buttonText="Log Out"
        continueButtonText={require("../assets/keyboard-arrow-right1.png")}
        showKeyboardArrowRightIcon={false}
        property1DefaultProperty2Position="absolute"
        property1DefaultProperty2Top={703}
        property1DefaultProperty2Left={131}
        property1DefaultProperty2Width={128}
        keyboardArrowRightIconWidth="10.08%"
        keyboardArrowRightIconRight="1.95%"
        keyboardArrowRightIconLeft="87.97%"
        buttonPrimaryBackgroundColor="#ff0000"
        showClickMe
      />
      <Image
        style={styles.image2Icon}
        contentFit="cover"
        source={require("../assets/image-2.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  profileTypo: {
    textAlign: "left",
    fontFamily: FontFamily.uI16Semi,
    fontWeight: "600",
    left: 27,
    position: "absolute",
  },
  profilePageChild: {
    top: 0,
    left: 0,
    width: 393.2,
    height: 114,
    position: "absolute",
  },
  profilePage1: {
    top: 128,
    fontSize: 36,
    lineHeight: 54,
    color: Color.black,
    width: 209,
    height: 50,
    textShadowColor: "rgba(97, 84, 170, 0.13)",
    textShadowOffset: {
      width: 0,
      height: 100,
    },
    textShadowRadius: 80,
  },
  profile: {
    top: 220,
    fontSize: FontSize.uI16Semi_size,
    lineHeight: 80,
    color: Color.colorDarkslategray_100,
    width: 285,
  },
  image2Icon: {
    top: 44,
    left: 96,
    width: 198,
    height: 30,
    position: "absolute",
  },
  profilePage: {
    backgroundColor: "#f1f1f1",
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default ProfilePage;
