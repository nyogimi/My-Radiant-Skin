import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageSourcePropType } from "react-native";
import { FontFamily, FontSize, Border, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const InputText = ({
  bG,
  name1,
  showName,
  show,
  inputTextPosition,
  inputTextTop,
  inputTextRight,
  inputTextLeft,
  inputTextHeight,
  inputTextMarginLeft,
  inputTextWidth,
  bGIconBorderRadius,
  nameColor,
  nameMarginTop,
  showColor,
  showMarginTop,
}) => {
  const inputTextStyle = useMemo(() => {
    return {
      ...getStyleValue("position", inputTextPosition),
      ...getStyleValue("top", inputTextTop),
      ...getStyleValue("right", inputTextRight),
      ...getStyleValue("left", inputTextLeft),
      ...getStyleValue("height", inputTextHeight),
      ...getStyleValue("marginLeft", inputTextMarginLeft),
      ...getStyleValue("width", inputTextWidth),
    };
  }, [
    inputTextPosition,
    inputTextTop,
    inputTextRight,
    inputTextLeft,
    inputTextHeight,
    inputTextMarginLeft,
    inputTextWidth,
  ]);

  const bGIconStyle = useMemo(() => {
    return {
      ...getStyleValue("borderRadius", bGIconBorderRadius),
    };
  }, [bGIconBorderRadius]);

  const nameStyle = useMemo(() => {
    return {
      ...getStyleValue("color", nameColor),
      ...getStyleValue("marginTop", nameMarginTop),
    };
  }, [nameColor, nameMarginTop]);

  const showStyle = useMemo(() => {
    return {
      ...getStyleValue("color", showColor),
      ...getStyleValue("marginTop", showMarginTop),
    };
  }, [showColor, showMarginTop]);

  return (
    <View style={[styles.inputtext, inputTextStyle]}>
      <Image
        style={[styles.bgIcon, bGIconStyle]}
        contentFit="cover"
        source={bG}
      />
      {showName && (
        <Text style={[styles.name, styles.nameTypo, nameStyle]}>{name1}</Text>
      )}
      {!show && (
        <Text style={[styles.show, styles.nameTypo, showStyle]}>Show</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  nameTypo: {
    fontFamily: FontFamily.uI16Medium,
    fontWeight: "500",
    fontSize: FontSize.uI16Semi_size,
    top: "50%",
    marginTop: -9,
    position: "absolute",
  },
  bgIcon: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_5xs,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  name: {
    left: 16,
    color: Color.gray03,
    textAlign: "left",
  },
  show: {
    right: 16,
    color: Color.greenPrimary,
    textAlign: "right",
    display: "none",
  },
  inputtext: {
    height: 50,
  },
});

export default InputText;
