import React, { useMemo } from "react";
import { StyleSheet, View, Text, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const CheckboxOptionEmpty1 = ({
  textValue,
  displayText,
  checkboxOptionEmptyPosition,
  checkboxOptionEmptyHeight,
  checkboxOptionEmptyRight,
  checkboxOptionEmptyBottom,
  checkboxOptionEmptyLeft,
  textHereColor,
  textHereWidth,
}) => {
  const checkboxOptionEmptyStyle = useMemo(() => {
    return {
      ...getStyleValue("position", checkboxOptionEmptyPosition),
      ...getStyleValue("height", checkboxOptionEmptyHeight),
      ...getStyleValue("right", checkboxOptionEmptyRight),
      ...getStyleValue("bottom", checkboxOptionEmptyBottom),
      ...getStyleValue("left", checkboxOptionEmptyLeft),
    };
  }, [
    checkboxOptionEmptyPosition,
    checkboxOptionEmptyHeight,
    checkboxOptionEmptyRight,
    checkboxOptionEmptyBottom,
    checkboxOptionEmptyLeft,
  ]);

  const textHereStyle = useMemo(() => {
    return {
      ...getStyleValue("color", textHereColor),
      ...getStyleValue("width", textHereWidth),
    };
  }, [textHereColor, textHereWidth]);

  return (
    <View style={[styles.checkboxOptionempty, checkboxOptionEmptyStyle]}>
      <View style={styles.checkboxempty}>
        <View style={styles.bg} />
        <Image
          style={styles.iconcheckmark}
          contentFit="cover"
          source={textValue}
        />
      </View>
      <Text style={[styles.textHere, textHereStyle]}>{displayText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  bg: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_9xs,
    backgroundColor: Color.gray01,
    borderStyle: "solid",
    borderColor: Color.colorGainsboro,
    borderWidth: 1,
    position: "absolute",
  },
  iconcheckmark: {
    top: 4,
    left: 4,
    width: 8,
    height: 7,
    display: "none",
    position: "absolute",
  },
  checkboxempty: {
    top: 1,
    left: 0,
    width: 16,
    height: 16,
    position: "absolute",
  },
  textHere: {
    top: 0,
    left: 24,
    fontSize: FontSize.uI14Regular_size,
    fontFamily: FontFamily.uI14Regular,
    color: Color.gray04,
    textAlign: "left",
    width: 154,
    position: "absolute",
  },
  checkboxOptionempty: {
    height: 17,
  },
});

export default CheckboxOptionEmpty1;
