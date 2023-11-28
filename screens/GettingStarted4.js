import React, { useState } from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import PageHeader from "../components/PageHeader";
import StateInactive from "../components/StateInactive";
import Property1DefaultProperty2 from "../components/Property1DefaultProperty2";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const GettingStarted4 = () => {
  const navigation = useNavigation();

  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonPress = (buttonText) => {
    setSelectedButton(buttonText === selectedButton ? null : buttonText);
  };

  const isButtonSelected = (buttonText) => {
    return selectedButton === buttonText;
  };

  return (
    <View style={styles.gettingStarted4}>
      <PageHeader
        actionButtonText="Login"
        iconX1
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
        onPageHeaderPress={() => navigation.navigate("LoginPage")}
        onLoginPress={() => navigation.navigate("LoginPage")}
        onIconXPress={() => navigation.navigate("GettingStarted1")}
      />
      <Text style={styles.selectYourSkin}>Select your skin type</Text>
      <StateInactive
        buttonText="Normal"
        stateInactivePosition="absolute"
        stateInactiveTop={262}
        stateInactiveLeft={67}
        selected={isButtonSelected("Normal")}
        onPress={() => handleButtonPress("Normal")}
      />
      <StateInactive
        buttonText="Dry"
        stateInactivePosition="absolute"
        stateInactiveTop={329}
        stateInactiveLeft={65}
        selected={isButtonSelected("Dry")}
        onPress={() => handleButtonPress("Dry")}
      />
      <StateInactive
        buttonText="Oily"
        stateInactivePosition="absolute"
        stateInactiveTop={396}
        stateInactiveLeft={65}
        selected={isButtonSelected("Oily")}
        onPress={() => handleButtonPress("Oily")}
      />
      <StateInactive
        buttonText="Sensitive"
        stateInactivePosition="absolute"
        stateInactiveTop={463}
        stateInactiveLeft={65}
        selected={isButtonSelected("Sensitive")}
        onPress={() => handleButtonPress("Sensitive")}
      />
      <StateInactive
        buttonText="Combination"
        stateInactivePosition="absolute"
        stateInactiveTop={530}
        stateInactiveLeft={65}
        selected={isButtonSelected("Combination")}
        onPress={() => handleButtonPress("Combination")}
      />
      <Pressable
        onPress={() => navigation.navigate("GettingStarted5")}
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
      <StateInactive
        buttonText="Normal"
        stateInactivePosition="absolute"
        stateInactiveTop={262}
        stateInactiveLeft={67}
        selected={isButtonSelected("Normal")}
        onPress={() => handleButtonPress("Normal")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  selectYourSkin: {
    position: "absolute",
    marginLeft: -102,
    top: 165,
    left: "50%",
    fontSize: FontSize.size_xl,
    fontWeight: "600",
    fontFamily: FontFamily.uI16Semi,
    color: Color.gray04,
    textAlign: "left",
  },
  gettingStarted4: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default GettingStarted4;
