import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, SIZES } from "../../../assets/constants";
import { CommonSearch, CustomText } from "../../components";

const Product = () => {
  return (
    <SafeAreaView>
      <CustomText
        text="Product"
        size={SIZES.xxLarge - 6}
        bold
        top={SIZES.xSmall}
      />
      <CustomText
        text="All products of the highest quality"
        size={SIZES.xLarge - 6}
        color={COLORS.primary}
      />
      <CommonSearch placeholder="Search product..." />
    </SafeAreaView>
  );
};

export default Product;
