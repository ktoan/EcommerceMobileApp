import React from "react";
import { Text } from "react-native";
import { COLORS, SIZES } from "../../../assets/constants";
import styles from "./customtext.style";

const CustomText = ({
  text = "Text",
  size = SIZES.medium,
  color = COLORS.black,
  top = 0,
  bold = false,
  styling = {},
  noLines = 1,
  marginHorizontal = SIZES.small,
  onPress = () => {},
}) => {
  return (
    <Text
      onPress={onPress}
      numberOfLines={noLines}
      style={[styles.txt(color, top, size, bold, marginHorizontal), styling]}
    >
      {text}
    </Text>
  );
};

export default CustomText;
