import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ButtonPrimary from "./ButtonPrimary";
import { Border, Color } from "../GlobalStyles";

const SelectionBar = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.feedInner, styles.feedInnerPosition]}>
      <View style={[styles.userParent, styles.feedInnerPosition]}>
        <Pressable style={styles.user} onPress={() => {}}>
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/user1.png")}
          />
        </Pressable>
        <View style={[styles.heart, styles.heartPosition]} />
        <Image
          style={[styles.vectorIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector.png")}
        />
        <Image
          style={[styles.messageCircleIcon, styles.heartPosition]}
          contentFit="cover"
          source={require("../assets/messagecircle.png")}
        />
        <Image
          style={[styles.frameChild, styles.heartPosition]}
          contentFit="cover"
          source={require("../assets/group-38591.png")}
        />
        <Pressable
          style={styles.buttonprimaryParent}
          onPress={() => navigation.navigate("GettingStarted6")}
        >
          <ButtonPrimary
            buttonText="Sign Up"
            showClickMe={false}
            buttonPrimaryPosition="absolute"
            buttonPrimaryBackgroundColor="#7d70ba"
            buttonPrimaryRight={0}
            buttonPrimaryBottom={0}
            buttonPrimaryLeft={0}
            buttonPrimaryHeight={54}
            buttonPrimaryOpacity={0.8}
            buttonPrimaryWidth="unset"
            buttonPrimaryTop="unset"
            buttonPrimaryMarginLeft="unset"
          />
          <Image
            style={[styles.cameraFotoIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/camerafoto.png")}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  feedInnerPosition: {
    height: 73,
    width: 390,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: -4,
    },
    left: "50%",
    marginLeft: -195,
    overflow: "hidden",
    position: "absolute",
  },
  heartPosition: {
    top: 29,
    width: 24,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  icon: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
  user: {
    left: 320,
    top: 26,
    height: 24,
    width: 24,
    position: "absolute",
  },
  heart: {
    left: 132,
    height: 24,
    overflow: "hidden",
  },
  vectorIcon: {
    height: "27.67%",
    width: "5.87%",
    top: "42.47%",
    right: "65.92%",
    bottom: "29.86%",
    left: "28.21%",
  },
  messageCircleIcon: {
    left: 260,
    height: 24,
    overflow: "hidden",
  },
  frameChild: {
    left: 45,
    height: 29,
  },
  cameraFotoIcon: {
    height: "52.04%",
    width: "51.92%",
    top: "24.07%",
    right: "24.04%",
    bottom: "23.89%",
    left: "24.04%",
  },
  buttonprimaryParent: {
    right: 166,
    bottom: 8,
    left: 172,
    height: 54,
    position: "absolute",
  },
  userParent: {
    top: 0,
    borderTopLeftRadius: Border.br_26xl,
    borderTopRightRadius: Border.br_26xl,
    backgroundColor: Color.white,
    shadowColor: "rgba(0, 0, 0, 0.03)",
    shadowRadius: 30,
    elevation: 30,
    overflow: "hidden",
  },
  feedInner: {
    bottom: 0,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowRadius: 8,
    elevation: 8,
    overflow: "hidden",
  },
});

export default SelectionBar;
