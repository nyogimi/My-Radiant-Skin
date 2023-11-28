import React, { useMemo } from "react";
import { Text, StyleSheet, View, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Property1DefaultProperty2 = ({
  buttonText,
  continueButtonText,
  property1DefaultProperty2Position,
  property1DefaultProperty2Top,
  property1DefaultProperty2Left,
  property1DefaultProperty2Width,
  keyboardArrowRightIconWidth,
  keyboardArrowRightIconRight,
  keyboardArrowRightIconLeft,
  onComponent1Press,
}) => {
  const property1DefaultProperty2Style = useMemo(() => {
    return {
      ...getStyleValue("position", property1DefaultProperty2Position),
      ...getStyleValue("top", property1DefaultProperty2Top),
      ...getStyleValue("left", property1DefaultProperty2Left),
      ...getStyleValue("width", property1DefaultProperty2Width),
    };
  }, [
    property1DefaultProperty2Position,
    property1DefaultProperty2Top,
    property1DefaultProperty2Left,
    property1DefaultProperty2Width,
  ]);

  const keyboardArrowRightIconStyle = useMemo(() => {
    return {
      ...getStyleValue("width", keyboardArrowRightIconWidth),
      ...getStyleValue("right", keyboardArrowRightIconRight),
      ...getStyleValue("left", keyboardArrowRightIconLeft),
    };
  }, [
    keyboardArrowRightIconWidth,
    keyboardArrowRightIconRight,
    keyboardArrowRightIconLeft,
  ]);

  return (
    <View
      style={[styles.property1defaultProperty2, property1DefaultProperty2Style]}
      onPress={onComponent1Press}
    >
      <View style={styles.buttonprimary}>
        <Text style={styles.signUp}>{buttonText}</Text>
      </View>
      <Image
        style={[styles.keyboardArrowRightIcon, keyboardArrowRightIconStyle]}
        contentFit="cover"
        source={continueButtonText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  signUp: {
    fontSize: FontSize.uI16Semi_size,
    fontWeight: "600",
    fontFamily: FontFamily.uI16Semi,
    color: Color.white,
    textAlign: "center",
  },
  buttonprimary: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_81xl,
    backgroundColor: Color.colorGray_100,
    alignItems: "center",
    paddingHorizontal: Padding.p_13xl,
    paddingVertical: Padding.p_base,
    position: "absolute",
  },
  keyboardArrowRightIcon: {
    height: "70.59%",
    width: "10.06%",
    top: "15.69%",
    right: "1.96%",
    bottom: "13.73%",
    left: "87.99%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  property1defaultProperty2: {
    width: 358,
    height: 51,
  },
});

export default Property1DefaultProperty2;
