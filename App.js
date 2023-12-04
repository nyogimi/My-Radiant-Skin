const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import StartupPage from "./screens/StartupPage";
import HomeAltPage from "./screens/HomeAltPage";
import Property1DefaultProperty2 from "./components/Property1DefaultProperty2";
import GettingStarted3 from "./screens/GettingStarted3";
import GettingStarted2 from "./screens/GettingStarted2";
import GettingStarted1 from "./screens/GettingStarted1";
import ProfilePage from "./screens/ProfilePage";
import SignUpPage from "./screens/SignUpPage";
import LoginPage from "./screens/LoginPage";
import GettingStarted4 from "./screens/GettingStarted4";
import GettingStarted5 from "./screens/GettingStarted5";
import GettingStarted7 from "./screens/GettingStarted7";
import GettingStarted6 from "./screens/GettingStarted6";
import ButtonPrimary from "./components/ButtonPrimary";
import PageHeader from "./components/PageHeader";
import InputText from "./components/InputText";
import Ellipse2DefaultImage from "./components/Ellipse2DefaultImage";
import StateInactive from "./components/StateInactive";
import AntiAging from "./components/AntiAging";
import GettingStarted8 from "./screens/GettingStarted8";
import GettingStarted9 from "./screens/GettingStarted9";
import ScannedPhoto from "./screens/ScannedPhoto";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
    "Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
    LilitaOne: require("./assets/fonts/LilitaOne.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="StartupPage"
              component={StartupPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HomeAltPage"
              component={HomeAltPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="GettingStarted3"
              component={GettingStarted3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="GettingStarted2"
              component={GettingStarted2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="GettingStarted1"
              component={GettingStarted1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ProfilePage"
              component={ProfilePage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUpPage"
              component={SignUpPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LoginPage"
              component={LoginPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="GettingStarted4"
              component={GettingStarted4}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="GettingStarted5"
              component={GettingStarted5}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="GettingStarted7"
              component={GettingStarted7}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="GettingStarted6"
              component={GettingStarted6}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="GettingStarted8"
              component={GettingStarted8}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="GettingStarted9"
              component={GettingStarted9}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ScannedPhoto"
              component={ScannedPhoto}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
