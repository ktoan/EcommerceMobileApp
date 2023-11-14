import React from "react";
import { ScrollView, View } from "react-native";
import { SIZES } from "../../../assets/constants";
import ProductCard from "../card/ProductCard";
import { useNavigation } from "@react-navigation/native";

const ProductGrid = ({ products = [], col = 2 }) => {
  const navigation = useNavigation();

  const RenderItem = () => {
    return (
      <View style={{ width: `${100 / col - 1}%` }}>
        <ProductCard
          onPress={() => navigation.navigate("ProductDetails")}
          col
        />
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
