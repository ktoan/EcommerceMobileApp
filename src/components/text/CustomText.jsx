import { View, Text } from "react-native";
import React from "react";
import styles from "./customtext.style";
import { COLORS, SIZES } from "../../../assets/constants";

const CustomText = ({
  text = "Text",
  size = SIZES.medium,
  color = COLORS.black,
  top = 0,
  bold = false,
  styling = {},
  noLines = 1,
  onPress = () => {},
}) => {
  return (
    <Text
      onPress={onPress}
      numberOfLines={noLines}
      style={[styles.txt(color, top, size, bold), styling]}
    >
      {text}
    </Text>
  );
};

export default CustomText;
