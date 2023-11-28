import * as React from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import PageHeader from "../components/PageHeader";
import StateInactive from "../components/StateInactive";
import Property1DefaultProperty2 from "../components/Property1DefaultProperty2";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const GettingStarted5 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.gettingStarted5}>
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
        onPageHeaderPress={() => navigation.navigate("GettingStarted4")}
        onLoginPress={() => navigation.navigate("LoginPage")}
        onIconXPress={() => navigation.navigate("GettingStarted1")}
      />
      <Text style={[styles.selectYouSkin, styles.youPosition]}>
        Select you skin goals
      </Text>
      <Text style={[styles.youMaySelect, styles.youPosition]}>
        You may select more than one
      </Text>
      <StateInactive
        buttonText="Acne-care"
        stateInactivePosition="absolute"
        stateInactiveTop={242}
        stateInactiveLeft={65}
      />
      <StateInactive
        buttonText="Anti-Aging"
        stateInactivePosition="absolute"
        stateInactiveTop={309}
        stateInactiveLeft={65}
      />
      <StateInactive
        buttonText="Brightening"
        stateInactivePosition="absolute"
        stateInactiveTop={376}
        stateInactiveLeft={65}
      />
      <StateInactive
        buttonText="Pore-Care"
        stateInactivePosition="absolute"
        stateInactiveTop={443}
        stateInactiveLeft={65}
      />
      <StateInactive
        buttonText="Hyperpigmentation"
        stateInactivePosition="absolute"
        stateInactiveTop={592}
        stateInactiveLeft={65}
      />
       <Pressable
        onPress={() => navigation.navigate("GettingStarted6")}
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
        buttonText="Soothing"
        stateInactivePosition="absolute"
        stateInactiveTop={517}
        stateInactiveLeft={65}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  youPosition: {
    fontFamily: FontFamily.uI16Semi,
    fontWeight: "600",
    left: "50%",
    marginLeft: -102,
    position: "absolute",
  },
  selectYouSkin: {
    top: 165,
    fontSize: FontSize.size_xl,
    color: Color.gray04,
    textAlign: "left",
  },
  youMaySelect: {
    top: 194,
    fontSize: FontSize.uI14Regular_size,
    color: Color.colorPlum_200,
    textAlign: "center",
  },
  gettingStarted5: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default GettingStarted5;
