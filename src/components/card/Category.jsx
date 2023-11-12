import React from "react";
import { View } from "react-native";
import { COLORS } from "../../../assets/constants";
import CustomText from "../text/CustomText";
import styles from "./category.style";

const Category = ({ active = false }) => {
  return (
    <View
      style={[styles.container, active && { backgroundColor: COLORS.primary }]}
    >
      <CustomText
        text="Category name"
        color={active ? COLORS.lightWhite : COLORS.gray}
      />
    </View>
  );
};

export default Category;
