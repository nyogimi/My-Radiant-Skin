import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const PasswordSection = () => {
  return (
    <View style={[styles.rectangleParent, styles.groupChildLayout]}>
      <View style={[styles.groupChild, styles.groupChildLayout]} />
      <View style={styles.groupItem} />
      <Text style={styles.personalInformation}>Personal Information</Text>
      <Text style={[styles.name, styles.ageTypo]}>Name</Text>
      <Text style={[styles.age, styles.ageTypo]}>Age</Text>
      <Text style={[styles.email, styles.ageTypo]}>Email</Text>
      <Text style={[styles.password, styles.ageTypo]}>Password</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildLayout: {
    width: 358,
    position: "absolute",
  },
  ageTypo: {
    fontFamily: FontFamily.uI16Semi,
    fontWeight: "600",
    fontSize: FontSize.uI14Regular_size,
    textAlign: "left",
    color: Color.gray04,
    left: 13,
    position: "absolute",
  },
  groupChild: {
    top: 9,
    left: 0,
    borderRadius: Border.br_5xs,
    borderStyle: "solid",
    borderColor: Color.gray03,
    borderWidth: 1,
    height: 368,
  },
  groupItem: {
    top: 1,
    left: 12,
    backgroundColor: Color.white,
    width: 119,
    height: 17,
    position: "absolute",
  },
  personalInformation: {
    top: 0,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.uI14Regular,
    display: "flex",
    alignItems: "flex-end",
    width: 117,
    height: 20,
    textAlign: "left",
    color: Color.gray04,
    left: 13,
    position: "absolute",
  },
  name: {
    top: 31,
  },
  age: {
    top: 113,
  },
  email: {
    top: 195,
  },
  password: {
    top: 281,
  },
  rectangleParent: {
    top: 127,
    left: 16,
    height: 377,
  },
});

export default PasswordSection;
