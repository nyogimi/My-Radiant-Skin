import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const StateInactive = ({
  buttonText,
  stateInactivePosition,
  stateInactiveTop,
  stateInactiveLeft,
}) => {
  const stateInactiveStyle = useMemo(() => {
    return {
      ...getStyleValue("position", stateInactivePosition),
      ...getStyleValue("top", stateInactiveTop),
      ...getStyleValue("left", stateInactiveLeft),
    };
  }, [stateInactivePosition, stateInactiveTop, stateInactiveLeft]);

  return (
    <View style={[styles.stateinactive, stateInactiveStyle]}>
      <View style={styles.button}>
        <Text style={styles.clickMe}>{buttonText}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  clickMe: {
    fontSize: FontSize.uI16Semi_size,
    fontWeight: "600",
    fontFamily: FontFamily.uI16Semi,
    color: Color.colorMediumpurple_100,
    textAlign: "center",
  },
  button: {
    borderRadius: Border.br_base,
    backgroundColor: Color.white,
    borderStyle: "solid",
    borderColor: Color.colorPlum_200,
    borderWidth: 1,
    width: 259,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_13xl,
    paddingVertical: Padding.p_base,
    flexDirection: "row",
  },
  stateinactive: {
    flexDirection: "row",
  },
});

export default StateInactive;
