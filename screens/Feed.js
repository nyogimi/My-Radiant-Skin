import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import MyProfileSection from "../components/MyProfileSection";
import SkinHealthCard from "../components/SkinHealthCard";
import SkinFeelingForm from "../components/SkinFeelingForm";
import SelectionBar from "../components/SelectionBar";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const Feed = () => {
  return (
    <View style={styles.feed}>
      <MyProfileSection />
      <Text style={[styles.skinHealth, styles.skinTypo]}>Skin Health</Text>
      <Text style={[styles.yourSkinCare, styles.skinTypo]}>
        Your Skin Care Routines
      </Text>
      <SkinHealthCard />
      <SkinFeelingForm />
      <View style={styles.frameParent}>
        <View style={[styles.morningRoutineParent, styles.parentShadowBox]}>
          <Text style={styles.morningRoutine}>Morning Routine</Text>
          <Text style={[styles.amEveryday, styles.amMonFriTypo]}>
            6:00 am • Everyday
          </Text>
        </View>
        <View style={[styles.afterWorkoutParent, styles.parentShadowBox]}>
          <Text
            style={[styles.afterWorkout, styles.amMonFriPosition]}
          >{`After Workout  `}</Text>
          <Text style={[styles.amMonFri, styles.amMonFriPosition]}>
            8:30 am • Mon,Wed,Fri
          </Text>
        </View>
        <View style={[styles.pmEverydayParent, styles.parentShadowBox]}>
          <Text style={[styles.amEveryday, styles.amMonFriTypo]}>
            9:00 pm • Everyday
          </Text>
          <Text style={[styles.bedtimeRoutine, styles.afterWorkoutTypo]}>
            Bedtime Routine
          </Text>
        </View>
      </View>
      <View style={styles.radiantParent}>
        <Text style={styles.radiant}>radiant</Text>
        <Text style={[styles.my, styles.myFlexBox]}>my</Text>
        <Text style={[styles.skin, styles.myFlexBox]}>skin</Text>
      </View>
      <SelectionBar />
    </View>
  );
};

const styles = StyleSheet.create({
  skinTypo: {
    textAlign: "center",
    fontFamily: FontFamily.uI16Semi,
    fontWeight: "600",
    fontSize: FontSize.uI16Semi_size,
    color: Color.colorDarkslategray_100,
    left: 33,
    position: "absolute",
  },
  parentShadowBox: {
    height: 200,
    width: 150,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.white,
    borderRadius: Border.br_5xs,
    top: "50%",
    marginTop: -100,
    position: "absolute",
    overflow: "hidden",
  },
  amMonFriTypo: {
    color: Color.colorCornflowerblue,
    fontFamily: FontFamily.uI16Medium,
    fontWeight: "500",
    fontSize: FontSize.size_3xs,
    top: 163,
  },
  amMonFriPosition: {
    left: 13,
    textAlign: "center",
    position: "absolute",
  },
  afterWorkoutTypo: {
    top: 146,
    fontSize: FontSize.uI14Regular_size,
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.uI16Semi,
    fontWeight: "600",
  },
  myFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.lilitaOne,
    left: "50%",
    textAlign: "center",
    position: "absolute",
  },
  skinHealth: {
    top: 591,
  },
  yourSkinCare: {
    top: 814,
  },
  morningRoutine: {
    top: 144,
    fontSize: FontSize.uI14Regular_size,
    left: 10,
    textAlign: "center",
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.uI16Semi,
    fontWeight: "600",
    position: "absolute",
  },
  amEveryday: {
    left: 10,
    textAlign: "center",
    position: "absolute",
  },
  morningRoutineParent: {
    left: 2,
  },
  afterWorkout: {
    top: 146,
    fontSize: FontSize.uI14Regular_size,
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.uI16Semi,
    fontWeight: "600",
  },
  amMonFri: {
    color: Color.colorCornflowerblue,
    fontFamily: FontFamily.uI16Medium,
    fontWeight: "500",
    fontSize: FontSize.size_3xs,
    top: 163,
  },
  afterWorkoutParent: {
    left: 171,
  },
  bedtimeRoutine: {
    left: 10,
    textAlign: "center",
    position: "absolute",
  },
  pmEverydayParent: {
    left: 340,
  },
  frameParent: {
    top: 839,
    width: 357,
    height: 220,
    left: 33,
    position: "absolute",
  },
  radiant: {
    marginLeft: -68.5,
    color: Color.colorMediumpurple_100,
    fontFamily: FontFamily.lilitaOne,
    top: 0,
    fontSize: FontSize.size_13xl,
    left: "50%",
    textAlign: "center",
    position: "absolute",
  },
  my: {
    marginLeft: -100.5,
    fontSize: FontSize.size_xl,
    width: 31,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    color: Color.colorDarkslategray_100,
  },
  skin: {
    marginLeft: 34.5,
    color: Color.colorThistle,
    width: 66,
    fontSize: FontSize.size_13xl,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
  radiantParent: {
    marginLeft: -101,
    top: 44,
    shadowRadius: 3,
    elevation: 3,
    width: 201,
    height: 37,
    left: "50%",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
  },
  feed: {
    backgroundColor: "#f1f1f1",
    flex: 1,
    width: "100%",
    height: 1161,
    overflow: "hidden",
  },
});

export default Feed;