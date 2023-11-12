import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, SIZES } from "../../../assets/constants";
import {
  BlockTitle,
  CustomText,
  FlashSales,
  HomeSearch,
  RecommendedProducts,
  ToolBar,
} from "../../components";
import DailyCoupon from "../../components/carousel/DailyCoupon";

const Home = () => {
  return (
    <SafeAreaView style={{ marginBottom: SIZES.bottomBarHeight, flex: 1 }}>
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
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.mbMedium}>
          <BlockTitle text="Recommended Products" iconName="grid" />
          <RecommendedProducts />
        </View>
        <View style={styles.mbMedium}>
          <BlockTitle text="Flash Sales" iconName="chevron-right" />
          <FlashSales />
        </View>
        <View style={styles.mbMedium}>
          <BlockTitle text="Daily Coupons" iconName="chevron-right" />
          <DailyCoupon />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  mbMedium: {
    marginBottom: SIZES.medium,
  },
});
