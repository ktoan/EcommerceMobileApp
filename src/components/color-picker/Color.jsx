import { View, Text } from "react-native";
import React from "react";
import { COLORS } from "../../../assets/constants";
import styles from "./color.style";

const Color = ({ color = COLORS.primary, active = false }) => {
  return <View style={styles.color(color, active)} />;
};

export default Color;
