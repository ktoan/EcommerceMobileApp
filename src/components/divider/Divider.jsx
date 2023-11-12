import React from "react";
import { View } from "react-native";
import { COLORS } from "../../../assets/constants";

const Divider = () => {
  return (
    <View style={{ width: "100%", height: 1, backgroundColor: COLORS.gray2 }} />
  );
};

export default Divider;
