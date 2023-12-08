import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
  ImageBackground,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import * as Font from "expo-font";

const loadFonts = async () => {
  await Font.loadAsync({
    Inter: require("../assets/fonts/Inter-Regular.ttf"),
  });
};

const HomePage = ({ navigation }) => {
  const goToHomePage = () => {
    navigation.navigate("HomePage");
  };
  const goToProfilePage = () => {
    navigation.navigate("ProfilePage");
  };

  const goToGettingStarted6 = () => {
    navigation.navigate("GettingStarted6");
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {/* Section for Greetings and User Info */}
        <View style={styles.headerSection}>
          <ImageBackground
            source={require("../assets/info-bg.png")}
            style={styles.infoImage}
          >
            <View style={styles.greetingsSection}>
              <Image
                source={require("../assets/logo_flat.png")}
                style={styles.logo}
              />
              <View style={styles.userInfo}>
                <View>
                  <Text style={styles.greetingText}>Good Day!</Text>
                </View>
              </View>
            </View>
          </ImageBackground>
        </View>

        <View style={styles.skinProblemSection}>
          <TouchableOpacity style={styles.skinProblemButtons}>
            <Image
              source={require("../assets/Blackheads-button.png")}
              style={styles.skinButton}
            />
            <Text style={styles.recommenderText}>Cleanse your face: Use a gentle, non-comedogenic cleanser daily to remove dirt and oil. 
                                                cleanser to remove cleanser to 
.{" "}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.skinProblemButtons}>
            <Image
              source={require("../assets/DarkSpots-button.png")}
              style={styles.skinButton}
            />
            <Text style={styles.recommenderText}>Exfoliation:
                                                Incorporate a vitamin C serum to brighten and fade. dark spots.
                                                fade dark spots </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.skinProblemButtons}>
            <Image
              source={require("../assets/Nodules-button.png")}
              style={styles.skinButton}
            />
            <Text style={styles.recommenderText}>Exfoliation:
                                                 Incorporate a salicylic acid exfoliant daily
                                                 to unclog pores.  unclog pores   to unclog pores  to unclog pores </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.skinProblemButtons}>
            <Image
              source={require("../assets/Papules-button.png")}
              style={styles.skinButton}
            />
            <Text style={styles.recommenderText}>Treatment:
                                                Apply a targeted treatment with benzoyl peroxide for inflammatory lesions. inflammatory lesions.  inflammatory lesions.  </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.skinProblemButtons}>
            <Image
              source={require("../assets/Pustules-button.png")}
              style={styles.skinButton}
            />
            <Text style={styles.recommenderText}>Serum:
                                                Choose a serum with niacinamide for its anti-inflammatory properties. inflammatory lesions.  </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.skinProblemButtons}>
            <Image
              source={require("../assets/Whiteheads-button.png")}
              style={styles.skinButton}
            />
            <Text style={styles.recommenderText}> Exfoliation:
                                                  Use a salicylic acid exfoliant to prevent and treat whiteheads. inflammatory lesions.  inflammatory lesions. </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.Gap}></View>
      </ScrollView>

      {/* Bottom Toolbar */}
      <View style={styles.bottomToolbar}>
        <TouchableOpacity onPress={goToHomePage}>
          <Image
            source={require("../assets/icons/home-icon.png")}
            style={styles.toolbarIcons}
          />
        </TouchableOpacity>
        <View>
          <TouchableOpacity onPress={goToGettingStarted6}>
            <Icon name="camera" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <View style={styles.cameraIconContainer}>
          <TouchableOpacity onPress={goToGettingStarted6}>
            <Image
              source={require("../assets/icons/camera-icon.png")}
              style={styles.toolbarIcons}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={goToProfilePage}>
          <Image
            source={require("../assets/icons/user-icon.png")}
            style={styles.toolbarIcons}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  headerSection: {
    borderBottomLeftRadius: 20,
  },
  infoImage: {
    flex: 1,
    resizeMode: "contain",
    alignItems: "center",
    justifyContent: "center",
  },
  greetingsSection: {
    flex: 1,
    paddingTop: 20,
    paddingBottom: 20,
    paddingHorizontal: 16,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 201,
    resizeMode: "contain",
  },
  icons: {
    height: 18,
    width: 18,
  },
  userInfo: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  greetingText: {
    color: "white",
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    paddingVertical: 10,
  },
  skinProblemSection: {
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 50,
    marginBottom: 100,
    gap: 20,
  },
  skinProblemButtons: {
    flexDirection: "row",
    alignItems: "center",
    zindex: 1,
    elevation: 4,
    borderRadius: 14,
  },
  recommenderText: {
    position: "absolute",
    left: "38%",
    width: 170,
    maxWidth: "76%",
    textAlign: "left",
  },
  toolbarIcons: {
    height: 22,
    width: 22,
  },
  bottomToolbar: {
    flexDirection: "row",
    justifyContent: "center",
    borderTopColor: "#ccc",
    paddingVertical: 24,
    position: "absolute",
    shadowOffset: { width: 0, height: 45 },
    elevation: 4,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "white",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    gap: 100,
  },
  cameraIconContainer: {
    backgroundColor: "#7D70BA",
    borderRadius: 30,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 12, // Adjust this value to control the overlap
    left: "50%", // Center the icon horizontally
    marginLeft: -20, // Adjust this value to center the icon properly
  },
});

export default HomePage;
