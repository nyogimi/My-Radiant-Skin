import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const AntiAging = ({
  buttonText,
  buttonSecondaryPosition,
  buttonSecondaryBorderRadius,
  buttonSecondaryBackgroundColor,
  buttonSecondaryBorderStyle,
  buttonSecondaryBorderColor,
  buttonSecondaryBorderWidth,
  clickMeColor,
  clickMeDisplay,
  clickMeAlignItems,
  clickMeJustifyContent,
  clickMeWidth,
}) => {
  const buttonSecondaryStyle = useMemo(() => {
    return {
      ...getStyleValue("position", buttonSecondaryPosition),
      ...getStyleValue("borderRadius", buttonSecondaryBorderRadius),
      ...getStyleValue("backgroundColor", buttonSecondaryBackgroundColor),
      ...getStyleValue("borderStyle", buttonSecondaryBorderStyle),
      ...getStyleValue("borderColor", buttonSecondaryBorderColor),
      ...getStyleValue("borderWidth", buttonSecondaryBorderWidth),
    };
  }, [
    buttonSecondaryPosition,
    buttonSecondaryBorderRadius,
    buttonSecondaryBackgroundColor,
    buttonSecondaryBorderStyle,
    buttonSecondaryBorderColor,
    buttonSecondaryBorderWidth,
  ]);

  const clickMeStyle = useMemo(() => {
    return {
      ...getStyleValue("color", clickMeColor),
      ...getStyleValue("display", clickMeDisplay),
      ...getStyleValue("alignItems", clickMeAlignItems),
      ...getStyleValue("justifyContent", clickMeJustifyContent),
      ...getStyleValue("width", clickMeWidth),
    };
  }, [
    clickMeColor,
    clickMeDisplay,
    clickMeAlignItems,
    clickMeJustifyContent,
    clickMeWidth,
  ]);

  return (
    <View
      style={[
        styles.buttonsecondary,
        styles.clickMeFlexBox,
        buttonSecondaryStyle,
      ]}
    >
      <Text style={[styles.clickMe, styles.clickMeFlexBox, clickMeStyle]}>
        {buttonText}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  clickMeFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  clickMe: {
    fontSize: FontSize.uI16Semi_size,
    fontWeight: "600",
    fontFamily: FontFamily.uI16Semi,
    color: Color.greenSecondary,
    textAlign: "center",
    display: "flex",
    width: 67,
  },
  buttonsecondary: {
    borderRadius: Border.br_81xl,
    backgroundColor: Color.gray01,
    width: 259,
    flexDirection: "row",
    paddingHorizontal: Padding.p_13xl,
    paddingVertical: Padding.p_base,
  },
});

export default AntiAging;
