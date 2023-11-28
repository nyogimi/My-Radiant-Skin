import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const ButtonPrimary = ({
  buttonText,
  showClickMe,
  buttonPrimaryPosition,
  buttonPrimaryBackgroundColor,
  buttonPrimaryRight,
  buttonPrimaryBottom,
  buttonPrimaryLeft,
  buttonPrimaryHeight,
  buttonPrimaryOpacity,
  buttonPrimaryWidth,
  buttonPrimaryTop,
  buttonPrimaryMarginLeft,
  onButtonPrimaryPress,
}) => {
  const buttonPrimaryStyle = useMemo(() => {
    return {
      ...getStyleValue("position", buttonPrimaryPosition),
      ...getStyleValue("backgroundColor", buttonPrimaryBackgroundColor),
      ...getStyleValue("right", buttonPrimaryRight),
      ...getStyleValue("bottom", buttonPrimaryBottom),
      ...getStyleValue("left", buttonPrimaryLeft),
      ...getStyleValue("height", buttonPrimaryHeight),
      ...getStyleValue("opacity", buttonPrimaryOpacity),
      ...getStyleValue("width", buttonPrimaryWidth),
      ...getStyleValue("top", buttonPrimaryTop),
      ...getStyleValue("marginLeft", buttonPrimaryMarginLeft),
    };
  }, [
    buttonPrimaryPosition,
    buttonPrimaryBackgroundColor,
    buttonPrimaryRight,
    buttonPrimaryBottom,
    buttonPrimaryLeft,
    buttonPrimaryHeight,
    buttonPrimaryOpacity,
    buttonPrimaryWidth,
    buttonPrimaryTop,
    buttonPrimaryMarginLeft,
  ]);

  return (
    <View
      style={[styles.buttonprimary, buttonPrimaryStyle]}
      onPress={onButtonPrimaryPress}
    >
      {showClickMe && <Text style={styles.clickMe}>{buttonText}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  clickMe: {
    fontSize: FontSize.uI16Semi_size,
    fontWeight: "600",
    fontFamily: FontFamily.uI16Semi,
    color: Color.white,
    textAlign: "center",
  },
  buttonprimary: {
    borderRadius: Border.br_81xl,
    backgroundColor: Color.greenPrimary,
    alignItems: "center",
    paddingHorizontal: Padding.p_13xl,
    paddingVertical: Padding.p_base,
  },
});

export default ButtonPrimary;
