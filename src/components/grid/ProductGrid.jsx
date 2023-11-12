import React from "react";
import { ScrollView, View } from "react-native";
import { SIZES } from "../../../assets/constants";
import ProductCard from "../card/ProductCard";

const ProductGrid = ({ products = [], col = 2 }) => {
  const RenderItem = () => {
    return (
      <View style={{ width: `${100 / col - 1}%` }}>
        <ProductCard col />
      </View>
    );
  };

  return (
    <View
      style={{
        flexDirection: "row",
        flexWrap: "wrap",
        paddingHorizontal: SIZES.small,
        gap: SIZES.small / 2,
        justifyContent: "space-between",
      }}
    >
      {products.map((item, index) => (
        <RenderItem key={index} />
      ))}
    </View>
  );
};

export default ProductGrid;
