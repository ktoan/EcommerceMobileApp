import React, { useState } from "react";
import { FlatList } from "react-native";
import { SIZES } from "../../../assets/constants";
import ProductCard from "../card/ProductCard";

const RecommendedProducts = () => {
  const [recommendedProducts, setRecommendedProducts] = useState([
    1, 2, 3, 4, 5,
  ]);

  return (
    <FlatList
      horizontal
      data={recommendedProducts}
      renderItem={({ item }) => <ProductCard />}
      contentContainerStyle={{ columnGap: SIZES.medium }}
      showsHorizontalScrollIndicator={false}
      style={{ marginHorizontal: SIZES.small }}
    />
  );
};

export default RecommendedProducts;
