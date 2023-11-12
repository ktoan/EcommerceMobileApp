import React, { useState } from "react";
import { FlatList } from "react-native";
import CouponCard from "../card/CouponCard";
import { SIZES } from "../../../assets/constants";

const DailyCoupon = () => {
  const [dailyCoupons, setDailyCoupons] = useState([1, 2, 3, 4, 5]);
  return (
    <FlatList
      horizontal
      data={dailyCoupons}
      renderItem={({ item }) => <CouponCard />}
      contentContainerStyle={{ columnGap: SIZES.medium }}
      showsHorizontalScrollIndicator={false}
      style={{ marginHorizontal: SIZES.small }}
    />
  );
};

export default DailyCoupon;
