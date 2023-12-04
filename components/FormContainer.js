import React, { useMemo } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const FormContainer = ({
  skinIssues,
  propTop,
  propBackgroundColor,
  propTop1,
  propMarginLeft,
}) => {
  const frameViewStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
      ...getStyleValue("backgroundColor", propBackgroundColor),
    };
  }, [propTop, propBackgroundColor]);

  const darkSpotsStyle = useMemo(() => {
    return {
      ...getStyleValue("marginLeft", propMarginLeft),
    };
  }, [propMarginLeft]);

  return (
    <View style={[styles.groupWrapper, frameViewStyle]}>
      <View style={styles.groupChildPosition}>
        <View style={[styles.groupChild, styles.groupChildPosition]} />
        <Image
          style={styles.gallery1Icon}
          contentFit="cover"
          source={require("../assets/gallery-1.png")}
        />
        <Text style={[styles.darkSpots, darkSpotsStyle]}>{skinIssues}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildPosition: {
    top: 0,
    height: 120,
    width: 298,
    left: 0,
    position: "absolute",
  },
  groupChild: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.colorLavender,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 12,
      height: 12,
    },
    shadowRadius: 6,
    elevation: 6,
    shadowOpacity: 1,
  },
  gallery1Icon: {
    top: 27,
    left: 37,
    width: 48,
    height: 48,
    position: "absolute",
  },
  darkSpots: {
    marginLeft: -119,
    top: "63.33%",
    left: "50%",
    fontSize: FontSize.size_xs,
    fontWeight: "600",
    fontFamily: FontFamily.uI16Semi,
    color: Color.colorGray_400,
    textAlign: "center",
    position: "absolute",
  },
  groupWrapper: {
    top: 136,
    backgroundColor: Color.white,
    height: 120,
    width: 298,
    left: 0,
    position: "absolute",
  },
});

export default FormContainer;
