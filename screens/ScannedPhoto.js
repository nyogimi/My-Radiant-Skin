import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Property1DefaultProperty2 from "../components/Property1DefaultProperty2";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const ScannedPhoto = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.scannedPhoto}>
      <Image
        style={styles.image1Icon}
        contentFit="cover"
        source={require("../assets/image-1.png")}
      />
      <Pressable
        style={styles.retakePhotoParent}
        onPress={() => navigation.goBack()}
      >
        <Text style={[styles.retakePhoto, styles.photoTypo]}>Retake Photo</Text>
        <Image
  
        />
      </Pressable>
      <Text style={[styles.photoTaken, styles.photoTypo]}>Photo Taken!</Text>
      <Pressable onPress={() => navigation.navigate("Results")}>
        <Property1DefaultProperty2
          buttonText="Continue"
          continueButtonText={require("../assets/keyboard-arrow-right.png")}
          property1DefaultProperty2Position="absolute"
          property1DefaultProperty2Top={737}
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
  photoTypo: {
    fontFamily: FontFamily.uI16Semi,
    fontWeight: "600",
    left: "50%",
    position: "absolute",
  },
  image1Icon: {
    top: 330,
    left: '50%', // Set left to 50% to center horizontally
    marginLeft: -75, // Adjust this value to half of the width (150 / 2)
    width: 150,
    height: 150,
    opacity: 0.9,
    position: "absolute",
  },
  retakePhoto: {
    top: 10,
    fontSize: FontSize.uI16Semi_size,
    color: Color.colorPlum_200,
    textAlign: "center",
  },
  arrowsSvg: {
    top: 20,
    left: 0,
    width: 28,
    height: 28,
    position: "absolute",
  },
  retakePhotoParent: {
    marginLeft: -71,
    top: 697,
    width: 143,
    height: 25,
    left: "40%",
    position: "absolute",
  },
  photoTaken: {
    marginLeft: -76,
    top: 186,
    fontSize: FontSize.size_5xl,
    color: Color.gray04,
    textAlign: "left",
  },
  scannedPhoto: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default ScannedPhoto;
