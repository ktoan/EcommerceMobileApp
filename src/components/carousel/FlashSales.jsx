import React, { useState } from "react";
import { FlatList } from "react-native";
import { SIZES } from "../../../assets/constants";
import FlashSaleCard from "../card/FlashSaleCard";

const FlashSales = () => {
  const [slashSales, setFlashSales] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  return (
    <FlatList
      horizontal
      data={slashSales}
      renderItem={({ item }) => <FlashSaleCard />}
      contentContainerStyle={{ columnGap: SIZES.medium }}
      showsHorizontalScrollIndicator={false}
      style={{ marginHorizontal: SIZES.small }}
    />
  );
};

export default FlashSales;
