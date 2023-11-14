import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./optionItem.style";
import CustomText from "../text/CustomText";
import { COLORS, OPACITY } from "../../../assets/constants";

const OptionItem = ({ onPress = () => {}, text = "Text", active = false }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={OPACITY}
      style={styles.size(active)}
    >
      <CustomText
        onPress={onPress}
        text={text}
        bold={active}
        color={active ? COLORS.primary : COLORS.gray}
      />
    </TouchableOpacity>
  );
};

export default OptionItem;
