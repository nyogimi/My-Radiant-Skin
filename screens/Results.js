import React from "react";
import { Text, StyleSheet, View, ScrollView, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import ButtonPrimary from "../components/ButtonPrimary";
import CheckboxOptionEmpty1 from "../components/CheckboxOptionEmpty1";
import InputText from "../components/InputText";
import PasswordSection from "../components/PasswordSection";
import SkinProfileSection from "../components/SkinProfileSection";
import PageHeader from "../components/PageHeader";
import { FontFamily, Color, Border, FontSize } from "../GlobalStyles";
import Property1DefaultProperty2 from "../components/Property1DefaultProperty2";

const Results = () => {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.resultsContainer}>
      <View style={styles.results}>
      <Pressable onPress={() => navigation.navigate("Feed")}>
        <Property1DefaultProperty2
          buttonText="Continue"
          continueButtonText={require("../assets/keyboard-arrow-right.png")}
          property1DefaultProperty2Position="absolute"
          property1DefaultProperty2Top={1100}
          property1DefaultProperty2Left={16}
          property1DefaultProperty2Width={358}
          keyboardArrowRightIconWidth="10.06%"
          keyboardArrowRightIconRight="1.96%"
          keyboardArrowRightIconLeft="87.99%"
        />
      </Pressable>
      <Image
        style={styles.keyboardArrowRightIcon}
        contentFit="cover"
        source={require("../assets/keyboard-arrow-right.png")}
      />
      <CheckboxOptionEmpty1
        textValue={require("../assets/iconcheckmark1.png")}
        checkboxOptionEmptyPosition="absolute"
        checkboxOptionEmptyHeight={19}
        checkboxOptionEmptyRight={28}
        checkboxOptionEmptyBottom={123}
        checkboxOptionEmptyLeft={27}
        textHereColor="unset"
        textHereWidth={312}
      />
      <InputText
        bG={require("../assets/bg1.png")}
        name1="Jane Doe"
        showName
        show={false}
        inputTextPosition="absolute"
        inputTextTop={181}
        inputTextRight="unset"
        inputTextLeft="50%"
        inputTextHeight={50}
        inputTextMarginLeft={-158}
        inputTextWidth={323}
        bGIconBorderRadius={8}
        nameColor="#7d70ba"
        nameMarginTop={-9}
        showColor="#5db075"
        showMarginTop={-9}
      />
      <InputText
        bG={require("../assets/bg1.png")}
        name1="21"
        showName
        show={false}
        inputTextPosition="absolute"
        inputTextTop={263}
        inputTextRight="unset"
        inputTextLeft="50%"
        inputTextHeight={50}
        inputTextMarginLeft={-159}
        inputTextWidth={323}
        bGIconBorderRadius={8}
        nameColor="#7d70ba"
        nameMarginTop={-9}
        showColor="#5db075"
        showMarginTop={-9}
      />
      <InputText
        bG={require("../assets/bg1.png")}
        name1="janedoe@email.com"
        showName
        show={false}
        inputTextPosition="absolute"
        inputTextTop={345}
        inputTextRight="unset"
        inputTextLeft="50%"
        inputTextHeight={50}
        inputTextMarginLeft={-159}
        inputTextWidth={323}
        bGIconBorderRadius={8}
        nameColor="#7d70ba"
        nameMarginTop={-9}
        showColor="#5db075"
        showMarginTop={-9}
      />
      <InputText
        bG={require("../assets/bg1.png")}
        name1="***********"
        showName
        show
        inputTextPosition="absolute"
        inputTextTop={431}
        inputTextRight="unset"
        inputTextLeft="50%"
        inputTextHeight={50}
        inputTextMarginLeft={-158}
        inputTextWidth={323}
        bGIconBorderRadius={8}
        nameColor="#7d70ba"
        nameMarginTop={-9}
        showColor="#7d70ba"
        showMarginTop={-9}
      />
      <Text style={[styles.skinType, styles.skinTypo]}>Skin Type</Text>
      <InputText
        bG={require("../assets/bg2.png")}
        name1="Select Skin Type"
        showName={false}
        show={false}
        inputTextPosition="absolute"
        inputTextTop={679}
        inputTextRight="unset"
        inputTextLeft="50%"
        inputTextHeight={50}
        inputTextMarginLeft={-162}
        inputTextWidth={323}
        bGIconBorderRadius={16}
        nameColor="#bdbdbd"
        nameMarginTop={-9}
        showColor="#5db075"
        showMarginTop={-9}
      />
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupPosition]} />
        <Text style={[styles.poreCare, styles.poreCareTypo]}>Pore-Care</Text>
      </View>
      <View style={[styles.rectangleGroup, styles.groupLayout]}>
        <View style={[styles.groupItem, styles.groupLayout]} />
        <Text style={[styles.brightening, styles.textPosition]}>
          Brightening
        </Text>
      </View>
      <Text style={[styles.skinGoals, styles.skinTypo]}>Skin Goals</Text>
      <PasswordSection />
      <View style={styles.rectangleContainer}>
        <View style={[styles.groupInner, styles.groupInnerPosition]} />
        <View style={[styles.rectangleView, styles.poreCarePosition]} />
        <Text style={[styles.beautyProfile, styles.groupInnerPosition]}>
          Beauty Profile
        </Text>
      </View>
      <SkinProfileSection />
      <View style={[styles.inputtextWrapper, styles.textPosition]}>
        <InputText
          bG={require("../assets/bg2.png")}
          name1="Combination"
          showName
          show={false}
          inputTextPosition="absolute"
          inputTextTop={0}
          inputTextRight="unset"
          inputTextLeft="50%"
          inputTextHeight={50}
          inputTextMarginLeft={-161.5}
          inputTextWidth={323}
          bGIconBorderRadius={16}
          nameColor="#7d70ba"
          nameMarginTop={-9}
          showColor="#5db075"
          showMarginTop={-9}
        />
      </View>
      <Image
        style={styles.resultsChild}
        contentFit="cover"
        source={require("../assets/group-3860.png")}
      />
      <Text style={[styles.text, styles.textPosition]}>
        <Text style={styles.text1}>{`67 `}</Text>
        <Text style={styles.text2}>/100</Text>
      </Text>
      <Text style={[styles.yourSkinHealth, styles.textPosition]}>
        Your skin health score
      </Text>
      <View style={[styles.resultsItem, styles.resultsItemPosition]} />
      <PageHeader
        actionButtonText="Login"
        iconX1
        pageHeaderPosition="absolute"
        pageHeaderTop={60}
        pageHeaderRight="unset"
        pageHeaderLeft="50%"
        pageHeaderMarginLeft={-179}
        pageHeaderBackgroundColor="#fff"
        pageHeaderWidth={358}
        leftFontWeight="unset"
        leftFontFamily="unset"
        leftColor="unset"
        leftTextAlign="unset"
        iconXTop={0}
        iconXLeft="50%"
        iconXWidth="unset"
        iconXHeight="unset"
        iconXMarginLeft={-55}
        rightMarginTop="unset"
        rightTop={16}
        rightFontWeight="unset"
        rightFontFamily="unset"
        rightColor="unset"
        rightTextAlign="unset"
        rightWidth={16}
        rightHeight={16}
        onPageHeaderPress={() => navigation.navigate("GettingStarted4")}
        onLoginPress={() => navigation.navigate("LoginPage")}
        onIconXPress={() => navigation.navigate("GettingStarted1")}
      />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  skinTypo: {
    fontFamily: FontFamily.uI16Semi,
    fontWeight: "600",
    textAlign: "left",
  },
  groupChildLayout: {
    height: 25,
    width: 95,
    position: "absolute",
  },
  groupPosition: {
    backgroundColor: Color.colorPlum_200,
    borderRadius: Border.br_sm,
    left: 0,
    top: 0,
  },
  poreCareTypo: {
    color: Color.gray01,
    top: 4,
    textAlign: "left",
    fontFamily: FontFamily.uI16Semi,
    fontWeight: "600",
    fontSize: FontSize.uI14Regular_size,
  },
  groupLayout: {
    width: 104,
    height: 25,
    position: "absolute",
  },
  textPosition: {
    left: "50%",
    position: "absolute",
  },
  groupInnerPosition: {
    top: 5,
    position: "absolute",
  },
  poreCarePosition: {
    left: 12,
    position: "absolute",
  },
  resultsItemPosition: {
    top: 0,
    backgroundColor: Color.white,
  },
  keyboardArrowRightIcon: {
    top: 754,
    left: 322,
    width: 36,
    height: 36,
    position: "absolute",
    overflow: "hidden",
  },
  skinType: {
    top: 560,
    textAlign: "left",
    color: Color.gray04,
    fontSize: FontSize.uI14Regular_size,
    left: 26,
    fontWeight: "600",
    position: "absolute",
  },
  groupChild: {
    height: 25,
    width: 95,
    position: "absolute",
  },
  poreCare: {
    left: 12,
    position: "absolute",
  },
  rectangleParent: {
    left: 44,
    top: 691,
  },
  groupItem: {
    backgroundColor: Color.colorPlum_200,
    borderRadius: Border.br_sm,
    left: 0,
    top: 0,
  },
  brightening: {
    marginLeft: -39,
    color: Color.gray01,
    top: 4,
    textAlign: "left",
    fontFamily: FontFamily.uI16Semi,
    fontWeight: "600",
    fontSize: FontSize.uI14Regular_size,
  },
  rectangleGroup: {
    left: 146,
    top: 691,
  },
  skinGoals: {
    top: 656,
    textAlign: "left",
    color: Color.gray04,
    fontSize: FontSize.uI14Regular_size,
    left: 26,
    fontWeight: "600",
    position: "absolute",
  },
  groupInner: {
    borderRadius: Border.br_5xs,
    borderStyle: "solid",
    borderColor: Color.gray03,
    borderWidth: 1,
    height: 226,
    width: 358,
    left: 0,
  },
  rectangleView: {
    width: 82,
    height: 11,
    top: 0,
    backgroundColor: Color.white,
  },
  beautyProfile: {
    left: 13,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.uI14Regular,
    display: "flex",
    alignItems: "flex-end",
    width: 79,
    height: 7,
    textAlign: "left",
    color: Color.gray04,
  },
  rectangleContainer: {
    top: 526,
    left: 16,
    height: 230,
    width: 358,
    position: "absolute",
  },
  inputtextWrapper: {
    marginLeft: -162,
    top: 583,
    width: 323,
    height: 50,
  },
  resultsChild: {
    top: 820,
    left: 64,
    width: 54,
    height: 54,
    position: "absolute",
  },
  text1: {
    fontSize: FontSize.size_13xl,
    color: Color.gray04,
  },
  text2: {
    fontSize: FontSize.size_xl,
    color: Color.colorGray_100,
  },
  text: {
    marginLeft: -2,
    top: 816,
    textAlign: "left",
    fontFamily: FontFamily.uI16Semi,
    fontWeight: "600",
  },
  yourSkinHealth: {
    marginLeft: -42,
    top: 854,
    fontSize: FontSize.uI16Semi_size,
    color: Color.colorPlum_200,
    textAlign: "left",
    fontFamily: FontFamily.uI16Semi,
    fontWeight: "600",
  },
  resultsItem: {
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 10,
    elevation: 10,
    shadowOpacity: 1,
    width: 390,
    height: 106,
    left: 0,
    position: "absolute",
  },
  results: {
    flex: 1,
    width: "100%",
    height: 1183,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
  resultsContainer: {
    flexGrow: 1,
  },
  results: {
    flex: 1,
    width: "100%",
    height: 1183,
    overflow: "hidden",
    backgroundColor: "white",
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 16,
  },
});

export default Results;
