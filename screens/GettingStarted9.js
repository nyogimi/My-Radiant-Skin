import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import Ellipse2DefaultImage from "../components/Ellipse2DefaultImage";
import { useNavigation } from "@react-navigation/native";
import ButtonPrimary from "../components/ButtonPrimary";
import CameraFotoIcon from "../components/CameraFotoIcon";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const GettingStarted9 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.gettingStarted9}>
      <Image
        style={styles.image1Icon}
        contentFit="cover"
        source={require("../assets/image-11.png")}
      />
      <Ellipse2DefaultImage
        imageDimensions={require("../assets/ellipse-2default1.png")}
        ellipse2DefaultIconPosition="absolute"
        ellipse2DefaultIconWidth={292}
        ellipse2DefaultIconHeight={419}
        ellipse2DefaultIconMarginLeft={-146}
        ellipse2DefaultIconTop={195}
        ellipse2DefaultIconLeft="50%"
        ellipse2DefaultIconOpacity={0.8}
      />
      <Text style={styles.placeYourFace}>{`Place your face
inside the circle`}</Text>
      <Pressable
        style={styles.buttonprimaryParent}
        onPress={() => navigation.navigate("ScannedPhoto")}
      >
        <ButtonPrimary
          buttonText="Sign Up"
          showClickMe={false}
          buttonPrimaryPosition="absolute"
          buttonPrimaryBackgroundColor="#dec1ff"
          buttonPrimaryRight={0}
          buttonPrimaryBottom={0}
          buttonPrimaryLeft={0}
          buttonPrimaryHeight={100}
          buttonPrimaryOpacity={0.8}
          buttonPrimaryWidth="unset"
          buttonPrimaryTop="unset"
          buttonPrimaryMarginLeft="unset"
        />
        <CameraFotoIcon />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  image1Icon: {
    top: 1,
    left: -140,
    width: 648,
    height: 973,
    opacity: 0.9,
    position: "absolute",
  },
  placeYourFace: {
    marginLeft: -76,
    top: 109,
    left: "50%",
    fontSize: FontSize.size_xl,
    fontWeight: "600",
    fontFamily: FontFamily.uI16Semi,
    color: Color.white,
    textAlign: "center",
    position: "absolute",
  },
  buttonprimaryParent: {
    right: 159,
    bottom: 44,
    left: 131,
    height: 100,
    position: "absolute",
  },
  gettingStarted9: {
    backgroundColor: Color.white,
    flex: 1,
    justifyContent: "center", // Center vertically
    alignItems: "center",     // Center horizontally
  },
});

export default GettingStarted9;
