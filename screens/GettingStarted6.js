import * as React from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import PageHeader from "../components/PageHeader";
import Property1DefaultProperty2 from "../components/Property1DefaultProperty2";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const GettingStarted6 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.gettingStarted6}>
      <PageHeader
        actionButtonText="Login"
        iconX1={false}
        pageHeaderPosition="absolute"
        pageHeaderTop={60}
        pageHeaderRight={16}
        pageHeaderLeft={16}
        pageHeaderMarginLeft="unset"
        pageHeaderBackgroundColor="unset"
        pageHeaderWidth="unset"
        leftFontWeight="unset"
        leftFontFamily="unset"
        leftColor="unset"
        leftTextAlign="unset"
        iconXTop={0}
        iconXLeft="50%"
        iconXWidth="unset"
        iconXHeight="unset"
        iconXMarginLeft={-55}
        rightMarginTop="unset"
        rightTop={16}
        rightFontWeight="unset"
        rightFontFamily="unset"
        rightColor="unset"
        rightTextAlign="unset"
        rightWidth={16}
        rightHeight={16}
        onPageHeaderPress={() => navigation.navigate("GettingStarted5")}
        onLoginPress={() => navigation.navigate("LoginPage")}
        onIconXPress={() => navigation.navigate("GettingStarted1")}
      />
      <Text
        style={[styles.letsAnalyzeYour, styles.letsAnalyzeYourTypo]}
      >{`Let’s analyze your skin with 
our built-in AI`}</Text>
      <Text
        style={[styles.loremIpsumDolor, styles.letsAnalyzeYourTypo]}
      >{``}</Text>
      <Image
        style={styles.keyboardArrowRightIcon}
        contentFit="cover"
        source={require("../assets/keyboard-arrow-right.png")}
      />
      <Image
        style={styles.gettingStarted6Child}
        contentFit="cover"
        source={require("../assets/group-17.png")}
      />
      <Pressable
        onPress={() => navigation.navigate("GettingStarted7")}
        style={styles.propertyPressable}
      >
        <Property1DefaultProperty2
          buttonText="Continue"
          continueButtonText={require("../assets/keyboard-arrow-right.png")}
          property1DefaultProperty2Position="absolute"
          property1DefaultProperty2Top={721}
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
  letsAnalyzeYourTypo: {
    textAlign: "center",
    fontFamily: FontFamily.uI16Semi,
    fontWeight: "600",
    left: "50%",
    position: "absolute",
  },
  letsAnalyzeYour: {
    marginLeft: -137,
    top: 360,
    fontSize: FontSize.size_xl,
    color: Color.gray04,
  },
  loremIpsumDolor: {
    marginLeft: -159,
    top: 422,
    fontSize: FontSize.uI14Regular_size,
    color: Color.colorPlum_200,
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
  gettingStarted6Child: {
    marginLeft: -57,
    top: 234,
    width: 112,
    height: 112,
    left: "50%",
    position: "absolute",
  },
  gettingStarted6: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default GettingStarted6;
