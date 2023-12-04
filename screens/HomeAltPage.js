import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import FormContainer from "../components/FormContainer";
import FormContainer1 from "../components/FormContainer1";
import SectionForm from "../components/SectionForm";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const HomeAltPage = () => {
  return (
    <View style={styles.homeAltPage}>
      <Image
        style={[styles.homeAltPageChild, styles.homePosition]}
        contentFit="cover"
        source={require("../assets/rectangle-3769.png")}
      />
      <Image
        style={[styles.homeAltPageItem, styles.homePosition]}
        contentFit="cover"
        source={require("../assets/rectangle-3770.png")}
      />
      <Image
        style={styles.homeAltPageInner}
        contentFit="cover"
        source={require("../assets/group-3868.png")}
      />
      <Text style={styles.goodDay}>Good Day!</Text>
      <View style={styles.frameView}>
        <View style={styles.frameParent}>
          <FormContainer skinIssues="Dark Spots" />
          <FormContainer
            skinIssues="Nodules"
            propTop={272}
            propBackgroundColor="unset"
            propMarginLeft={-111}
          />
          <FormContainer
            skinIssues="Papules"
            propTop={408}
            propBackgroundColor="unset"
            propMarginLeft={-110}
          />
          <FormContainer
            skinIssues="Pustules"
            propTop={544}
            propBackgroundColor="unset"
            propMarginLeft={-112}
          />
          <FormContainer
            skinIssues="Whiteheads"
            propTop={680}
            propBackgroundColor="unset"
            propMarginLeft={-122}
          />
          <Text style={[styles.darkspotsInfo, styles.infoTypo]}>LORem</Text>
          <Text style={[styles.nodulesInfo, styles.infoTypo]}>LORem</Text>
          <Text style={[styles.papulesInfo, styles.infoTypo]}>LORem</Text>
          <Text style={[styles.pustulesInfo, styles.infoTypo]}>LORem</Text>
          <Text style={[styles.whiteheadsInfo, styles.infoTypo]}>LORem</Text>
          <FormContainer1 />
        </View>
      </View>
      <SectionForm />
      <Image
        style={styles.image2Icon}
        contentFit="cover"
        source={require("../assets/image-2.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  homePosition: {
    width: 390,
    left: 0,
    top: 0,
    position: "absolute",
  },
  infoTypo: {
    fontSize: FontSize.size_smi,
    left: 143,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.uI16Semi,
    fontWeight: "600",
    position: "absolute",
  },
  homeAltPageChild: {
    borderRadius: Border.br_5xs,
    height: 177,
  },
  homeAltPageItem: {
    height: 178,
  },
  homeAltPageInner: {
    left: 20,
    width: 321,
    height: 134,
    top: 0,
    position: "absolute",
  },
  goodDay: {
    top: 106,
    left: 29,
    fontSize: FontSize.size_13xl,
    lineHeight: 48,
    textShadowColor: "rgba(97, 84, 170, 0.13)",
    textShadowOffset: {
      width: 0,
      height: 100,
    },
    textShadowRadius: 80,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.uI16Semi,
    fontWeight: "600",
    position: "absolute",
  },
  darkspotsInfo: {
    top: 167,
  },
  nodulesInfo: {
    top: 303,
  },
  papulesInfo: {
    top: 435,
  },
  pustulesInfo: {
    top: 571,
  },
  whiteheadsInfo: {
    top: 707,
  },
  frameParent: {
    top: 11,
    left: 13,
    width: 298,
    height: 800,
    position: "absolute",
  },
  frameView: {
    top: 170,
    left: 33,
    width: 108,
    height: 22,
    position: "absolute",
  },
  image2Icon: {
    top: 44,
    left: 96,
    width: 198,
    height: 30,
    position: "absolute",
  },
  homeAltPage: {
    backgroundColor: "#f1f1f1",
    flex: 1,
    width: "100%",
    height: 1091,
    overflow: "hidden",
  },
});

export default HomeAltPage;
