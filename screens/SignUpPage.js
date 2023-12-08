import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebase-config";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize } from "../GlobalStyles";
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [user, setUser] = useState(null);

  const Stack = createStackNavigator();
  const navigation = useNavigation();

  const onSignUp = () => {
    if (email && password) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          console.log("User signed up:", userCredential.user);
          navigation.navigate("GettingStarted6");
        })
        .catch((error) => {
          setErrorMsg(error.message);
          Alert.alert("Error signing up", error.message);
        });
    } else {
      setErrorMsg("Please enter an email and password");
      Alert.alert("Error signing up", "Please enter an email and password");
    }
  };

  const onSignIn = () => {
    if (email && password) {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          console.log("User signed in:", userCredential.user);
          navigation.navigate("LandingHome");
        })
        .catch((error) => {
          setErrorMsg(error.message);
          Alert.alert("Error signing in", error.message);
        });
    } else {
      setErrorMsg("Please enter an email and password");
      Alert.alert("Error signing in", "Please enter an email and password");
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <View style={styles.container}>
        <View style={[styles.myParent, styles.myParentPosition]}>
        <Text style={[styles.my, styles.myFlexBox]}>my</Text>
        <Text style={[styles.radiant, styles.myTypo]}>radiant</Text>
        <Text style={[styles.skin, styles.myTypo]}>skin</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry
      />
      {errorMsg && <Text style={styles.errorText}>{errorMsg}</Text>}
      <TouchableOpacity style={styles.button} onPress={onSignIn}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={onSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 0,
    borderRadius: 50,  // Set borderRadius to round the corners
    margin: 20,       // Add margin to create space around the container
  },
  input: {
    height: 60,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 20, 
  },
  button: {
    backgroundColor: "#93867f",  // Use a brown color of your choice
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,  // Set borderRadius to half of the height for a round button
    marginTop: 15,
  },
  
  buttonText: {
    color: "white",
    fontSize: 16,
  },  
  errorText: {
    color: "red",
    fontSize: 14,
    marginBottom: 10,
  },

  myParentPosition: {
    left: "50%",
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.uI16Semi,
    fontWeight: "600",
  },
  myFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
  myTypo: {
    textAlign: "center",
    fontFamily: FontFamily.lilitaOne,
    left: "50%",
    position: "absolute",
    justifyContent: "center",
  },
  alreadyHaveAn: {
    color: Color.colorPlum_200,
  },
  logIn: {
    color: Color.colorMediumpurple_100,
  },
  text: {
    marginLeft: -110,
    textAlign: "left",
    fontSize: FontSize.uI14Regular_size,
  },
  alreadyHaveAnContainer: {
    bottom: 44,
  },
  my: {
    marginLeft: -43,
    top: 0,
    fontSize: FontSize.size_xl,
    width: 29,
    textAlign: "center",
    fontFamily: FontFamily.lilitaOne,
    left: "50%",
    position: "absolute",
    color: Color.colorDarkslategray_100,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
  radiant: {
    top: 9,
    fontSize: FontSize.size_13xl,
    fontFamily: FontFamily.lilitaOne,
    textAlign: "center",
    marginLeft: -51,
    color: Color.colorMediumpurple_100,
  },
  skin: {
    marginLeft: -7,
    top: 34,
    color: Color.colorThistle,
    fontSize: FontSize.size_13xl,
    fontFamily: FontFamily.lilitaOne,
    textAlign: "center",
  },
  myParent: {
    top: 14,
    width: 102,
    height: 71,
    marginLeft: -51,
    display: "flex",
    justifyContent: "center",
  },
});

export default LoginPage;
