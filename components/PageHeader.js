import React, { useMemo } from "react";
import { Text, StyleSheet, View, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const PageHeader = ({
  buttonText,
  actionButtonText,
  iconImageUrl,
  buttonPosition,
  showSignUp,
  iconX1,
  pageHeaderPosition,
  pageHeaderTop,
  pageHeaderRight,
  pageHeaderLeft,
  pageHeaderMarginLeft,
  pageHeaderBackgroundColor,
  pageHeaderWidth,
  leftFontSize,
  leftFontWeight,
  leftFontFamily,
  leftColor,
  leftTextAlign,
  signUpPosition,
  signUpMarginLeft,
  signUpTop,
  signUpLeft,
  signUpFontSize,
  signUpFontWeight,
  signUpFontFamily,
  signUpColor,
  signUpTextAlign,
  iconXTop,
  iconXLeft,
  iconXWidth,
  iconXHeight,
  iconXMarginLeft,
  rightMarginTop,
  rightTop,
  rightFontSize,
  rightFontWeight,
  rightFontFamily,
  rightColor,
  rightTextAlign,
  rightWidth,
  rightHeight,
  onPageHeaderPress,
  onLoginPress,
  onIconXPress,
}) => {
  const pageHeaderStyle = useMemo(() => {
    return {
      ...getStyleValue("position", pageHeaderPosition),
      ...getStyleValue("top", pageHeaderTop),
      ...getStyleValue("right", pageHeaderRight),
      ...getStyleValue("left", pageHeaderLeft),
      ...getStyleValue("marginLeft", pageHeaderMarginLeft),
      ...getStyleValue("backgroundColor", pageHeaderBackgroundColor),
      ...getStyleValue("width", pageHeaderWidth),
    };
  }, [
    pageHeaderPosition,
    pageHeaderTop,
    pageHeaderRight,
    pageHeaderLeft,
    pageHeaderMarginLeft,
    pageHeaderBackgroundColor,
    pageHeaderWidth,
  ]);

  const leftStyle = useMemo(() => {
    return {
      ...getStyleValue("fontSize", leftFontSize),
      ...getStyleValue("fontWeight", leftFontWeight),
      ...getStyleValue("fontFamily", leftFontFamily),
      ...getStyleValue("color", leftColor),
      ...getStyleValue("textAlign", leftTextAlign),
    };
  }, [leftFontSize, leftFontWeight, leftFontFamily, leftColor, leftTextAlign]);

  const signUpStyle = useMemo(() => {
    return {
      ...getStyleValue("position", signUpPosition),
      ...getStyleValue("marginLeft", signUpMarginLeft),
      ...getStyleValue("top", signUpTop),
      ...getStyleValue("left", signUpLeft),
      ...getStyleValue("fontSize", signUpFontSize),
      ...getStyleValue("fontWeight", signUpFontWeight),
      ...getStyleValue("fontFamily", signUpFontFamily),
      ...getStyleValue("color", signUpColor),
      ...getStyleValue("textAlign", signUpTextAlign),
    };
  }, [
    signUpPosition,
    signUpMarginLeft,
    signUpTop,
    signUpLeft,
    signUpFontSize,
    signUpFontWeight,
    signUpFontFamily,
    signUpColor,
    signUpTextAlign,
  ]);

  const iconXStyle = useMemo(() => {
    return {
      ...getStyleValue("top", iconXTop),
      ...getStyleValue("left", iconXLeft),
      ...getStyleValue("width", iconXWidth),
      ...getStyleValue("height", iconXHeight),
      ...getStyleValue("marginLeft", iconXMarginLeft),
    };
  }, [iconXTop, iconXLeft, iconXWidth, iconXHeight, iconXMarginLeft]);

  const rightStyle = useMemo(() => {
    return {
      ...getStyleValue("marginTop", rightMarginTop),
      ...getStyleValue("top", rightTop),
      ...getStyleValue("fontSize", rightFontSize),
      ...getStyleValue("fontWeight", rightFontWeight),
      ...getStyleValue("fontFamily", rightFontFamily),
      ...getStyleValue("color", rightColor),
      ...getStyleValue("textAlign", rightTextAlign),
      ...getStyleValue("width", rightWidth),
      ...getStyleValue("height", rightHeight),
    };
  }, [
    rightMarginTop,
    rightTop,
    rightFontSize,
    rightFontWeight,
    rightFontFamily,
    rightColor,
    rightTextAlign,
    rightWidth,
    rightHeight,
  ]);

  return (
    <View
      style={[styles.pageHeader, pageHeaderStyle]}
      onPress={onPageHeaderPress}
    >
      <Text
        style={[styles.left, styles.leftTypo, leftStyle]}
        onPress={onLoginPress}
      >
        {buttonText}
      </Text>
      {showSignUp && (
        <Text style={[styles.signUp, signUpStyle]}>{actionButtonText}</Text>
      )}
      {!iconX1 && (
        <Image
          style={[styles.iconx, styles.iconxPosition, iconXStyle]}
          contentFit="cover"
          source={iconImageUrl}
        />
      )}
      <Text
        style={[styles.right, styles.iconxPosition, rightStyle]}
        onPress={onIconXPress}
      >
        {buttonPosition}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  leftTypo: {
    color: Color.greenPrimary,
    fontFamily: FontFamily.uI16Medium,
    fontWeight: "500",
    fontSize: FontSize.uI16Semi_size,
  },
  iconxPosition: {
    left: 0,
    position: "absolute",
  },
  left: {
    top: 8,
    right: 0,
    textAlign: "right",
    position: "absolute",
  },
  signUp: {
    marginLeft: -55,
    top: 0,
    left: "50%",
    fontSize: FontSize.uI30Semi_size,
    fontWeight: "600",
    fontFamily: FontFamily.uI16Semi,
    color: Color.black,
    textAlign: "center",
    position: "absolute",
  },
  iconx: {
    top: 16,
    width: 16,
    height: 16,
    display: "none",
  },
  right: {
    marginTop: -10,
    top: "50%",
    textAlign: "left",
    color: Color.greenPrimary,
    fontFamily: FontFamily.uI16Medium,
    fontWeight: "500",
    fontSize: FontSize.uI16Semi_size,
  },
  pageHeader: {
    height: 36,
  },
});

export default PageHeader;
