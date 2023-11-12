import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, SIZES } from "../../../assets/constants";
import { CommonSearch, CustomText } from "../../components";

const Shop = () => {
  return (
    <SafeAreaView>
      <CustomText
        text="Shop"
        size={SIZES.xxLarge - 6}
        bold
        top={SIZES.xSmall}
      />
      <CustomText
        text="Search for a store that suits your needs"
        size={SIZES.xLarge - 6}
        color={COLORS.primary}
      />
      <CommonSearch placeholder="Search shop..." />
    </SafeAreaView>
  );
};

export default Shop;
