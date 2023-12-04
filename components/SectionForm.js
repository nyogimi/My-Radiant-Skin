import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, View, Text, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const SectionForm = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.userParent}>
      <Pressable
        style={[styles.user, styles.userLayout]}
        onPress={() => navigation.navigate("ProfilePage")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/user1.png")}
        />
      </Pressable>
      <View style={[styles.messageCircle, styles.userLayout]} />
      <Image
        style={styles.frameChild}
        contentFit="cover"
        source={require("../assets/group-3859.png")}
      />
      <View style={styles.groupWrapper}>
        <Pressable
          style={styles.buttonprimaryPosition}
          onPress={() => navigation.navigate("GettingStarted6")}
        >
          <View style={[styles.buttonprimary, styles.buttonprimaryPosition]}>
            <Text style={styles.signUp}>Sign Up</Text>
          </View>
          <Image
            style={styles.cameraFotoIcon}
            contentFit="cover"
            source={require("../assets/camerafoto.png")}
          />
        </Pressable>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "absolute",

  },
  userLayout: {
    height: 24,
    width: 24,

  },
  buttonprimaryPosition: {
    left: 0,
    right: 0,
    height: 54,
    bottom: 0,

  },
  icon: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
    
  },
  user: {
    left: 284,
    top: 19,
    height: 24,
    
  },
  frameChild: {
    left: 76,
    height: 30,
    width: 24,
    top: 19,
    position: "absolute",
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
    borderRadius: Border.br_81xl,
    backgroundColor: Color.colorMediumpurple_100,
    alignItems: "center",
    paddingHorizontal: Padding.p_13xl,
    paddingVertical: Padding.p_base,
    opacity: 0.8,
    position: "absolute",
  },
  cameraFotoIcon: {
    height: "52.04%",
    width: "51.92%",
    top: "24.07%",
    right: "24.04%",
    bottom: "23.89%",
    left: "34.04%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  groupWrapper: {
    top: 10,
    left: 169,
    width: 52,
    height: 54,
    position: "absolute",
  },
  userParent: {
    marginLeft: -195,
    left: "50%",
    borderTopLeftRadius: Border.br_26xl,
    borderTopRightRadius: Border.br_26xl,
    backgroundColor: Color.white,
    shadowColor: "rgba(0, 0, 0, 0.03)",
    shadowOffset: {
      width: 0,
      height: -10,
      position: "absolute",
    },
    shadowRadius: 30,
    elevation: 30,
    shadowOpacity: 1,
    width: 390,
    height: 73,
    overflow: "hidden",
    bottom: 0,
    position: "absolute",
  },
});

export default SectionForm;
