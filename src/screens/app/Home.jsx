import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, SIZES } from "../../../assets/constants";
import { CustomText, HomeSearch, ToolBar } from "../../components";

const Home = () => {
  return (
    <SafeAreaView>
      <ToolBar />
      <CustomText
        bold
        text="Find The Most"
        top={SIZES.xSmall}
        size={SIZES.xxLarge - 6}
      />
      <CustomText
        bold
        text="Good Products"
        color={COLORS.primary}
        size={SIZES.xxLarge - 6}
      />
      <HomeSearch />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
