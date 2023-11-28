import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, ImageSourcePropType } from "react-native";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Ellipse2DefaultImage = ({
  imageDimensions,
  ellipse2DefaultIconPosition,
  ellipse2DefaultIconWidth,
  ellipse2DefaultIconHeight,
  ellipse2DefaultIconMarginLeft,
  ellipse2DefaultIconTop,
  ellipse2DefaultIconLeft,
  ellipse2DefaultIconOpacity,
}) => {
  const ellipse2DefaultIconStyle = useMemo(() => {
    return {
      ...getStyleValue("position", ellipse2DefaultIconPosition),
      ...getStyleValue("width", ellipse2DefaultIconWidth),
      ...getStyleValue("height", ellipse2DefaultIconHeight),
      ...getStyleValue("marginLeft", ellipse2DefaultIconMarginLeft),
      ...getStyleValue("top", ellipse2DefaultIconTop),
      ...getStyleValue("left", ellipse2DefaultIconLeft),
      ...getStyleValue("opacity", ellipse2DefaultIconOpacity),
    };
  }, [
    ellipse2DefaultIconPosition,
    ellipse2DefaultIconWidth,
    ellipse2DefaultIconHeight,
    ellipse2DefaultIconMarginLeft,
    ellipse2DefaultIconTop,
    ellipse2DefaultIconLeft,
    ellipse2DefaultIconOpacity,
  ]);

  return (
    <Image
      style={[styles.ellipse2defaultIcon, ellipse2DefaultIconStyle]}
      contentFit="cover"
      source={imageDimensions}
    />
  );
};

const styles = StyleSheet.create({
  ellipse2defaultIcon: {
    width: 353,
    height: 506,
  },
});

export default Ellipse2DefaultImage;
