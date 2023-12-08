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
  const goToNormalProfilePage = () => {
    navigation.navigate("NormalProfilePage");
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
              Congratulations! You have clear skin. Continue your skincare routine. 
            </Text>


          <Text style={styles.descriptionText}>
            A simple skincare routine for normal skin typically involves cleansing, toning, and moisturizing. Here's a short routine you can follow:

            {"\n\n"}
            
            <Text style={styles.listText}>
              1. <Text style={styles.boldText}>Cleansing:</Text>{"\n"}
              - Use a gentle, hydrating cleanser to wash your face in the morning and evening.{"\n"}
              - Gently massage the cleanser onto your face in circular motions, then rinse with lukewarm water.
            </Text>

            {"\n\n"}
            
            <Text style={styles.listText}>
              2. <Text style={styles.boldText}>Toning:</Text>{"\n"}
              - Apply a mild, alcohol-free toner to a cotton pad.{"\n"}
              - Swipe the toner across your face to remove any remaining impurities and balance your skin's pH.
            </Text>

            {"\n\n"}
            
            <Text style={styles.listText}>
              3. <Text style={styles.boldText}>Moisturizing:</Text>{"\n"}
              - Choose a lightweight, non-comedogenic moisturizer.{"\n"}
              - Apply the moisturizer evenly to your face and neck, focusing on areas that may be prone to dryness.
            </Text>

            {"\n\n"}
            
            <Text style={styles.listText}>
              4. <Text style={styles.boldText}>Sunscreen (Morning Routine):</Text>{"\n"}
              - In the morning, apply a broad-spectrum sunscreen with at least SPF 30.{"\n"}
              - Sunscreen helps protect your skin from harmful UV rays and prevents premature aging.
            </Text>

            {"\n\n"}
            
            <Text style={styles.listText}>
              5. <Text style={styles.boldText}>Weekly Treatment (Optional):</Text>{"\n"}
              - Consider incorporating a weekly exfoliation or a face mask suitable for normal skin.{"\n"}
              - Exfoliating helps remove dead skin cells, and masks can provide additional nourishment.
            </Text>

            {"\n\n"}
            
            <Text style={styles.noteText}>
              Note: Remember to patch test any new products before incorporating them into your routine. Adjust the routine based on your skin's response and specific needs. Additionally, stay hydrated, get enough sleep, and maintain a healthy lifestyle for overall skin well-being.
            </Text>
          </Text>

          <View style={styles.Gap}></View>
        </View>
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
        <TouchableOpacity onPress={goToNormalProfilePage}>
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

export default HomePage;
