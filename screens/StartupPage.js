import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";  // Import useNavigation
import StartupLogo from "../components/StartupLogo";
import { Color } from "../GlobalStyles";

const StartupPage = () => {
  const navigation = useNavigation();  // Get navigation object

  useEffect(() => {
    const timer = setTimeout(() => {
      // Navigate to GettingStarted1.js after 3 seconds
      navigation.navigate("GettingStarted1"); // Replace "GettingStarted1" with the correct screen name
    }, 1000);

    return () => clearTimeout(timer); // Clear the timeout on component unmount
  }, [navigation]);

  return (
    <View style={styles.startupPage}>
      <StartupLogo />
    </View>
  );
};

const styles = StyleSheet.create({
  startupPage: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default StartupPage;
