import React, { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, SIZES } from "../../../assets/constants";
import {
  Categories,
  CommonSearch,
  CustomText,
  ProductGrid,
} from "../../components";

const Product = () => {
  const [products, setProducts] = useState([1, 2, 3, 4, 5, 6, 7, 8]);

  return (
    <SafeAreaView style={{ marginBottom: SIZES.bottomBarHeight, flex: 1 }}>
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
      <CommonSearch placeholder="Search Product..." />
      <View style={styles.mbMedium}>
        <Categories />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.mbMedium}>
          <ProductGrid products={products} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Product;

const styles = StyleSheet.create({
  mbMedium: {
    marginBottom: SIZES.medium,
  },
});
