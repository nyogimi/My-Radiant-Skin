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

const LandingHome = ({ navigation }) => {
  const goToLandingHome = () => {
    navigation.navigate("LandingHome");
  };
  const goToLandingProfile = () => {
    navigation.navigate("LandingProfile");
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
            <Text style={styles.recommenderText}>
              Scan your face by clicking the Camera button.
            </Text>
          <View style={styles.Gap}></View>
        </View>
      </ScrollView>

      {/* Bottom Toolbar */}
      <View style={styles.bottomToolbar}>
        <TouchableOpacity onPress={goToLandingHome}>
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
        <TouchableOpacity onPress={goToLandingProfile}>
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
    zIndex: 1,
    elevation: 4,
    borderRadius: 14,
  },
  recommenderText: {
    textAlign: "center",
    marginHorizontal: 20,
    fontSize: 18,
    color: "#333",
    fontWeight: "bold",
  },
  descriptionText: {
    marginVertical: 20,
    marginHorizontal: 10,
    fontSize: 16,
    color: "#555",
  },
  listText: {
    fontSize: 16,
    color: "#555",
  },
  boldText: {
    fontWeight: "bold",
    color: "#333",
  },
  noteText: {
    fontSize: 14,
    color: "#777",
    fontStyle: "italic",
  },
  Gap: {
    marginBottom: 20,
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
    bottom: 12,
    left: "50%",
    marginLeft: -20,
  },
});

export default LandingHome;
