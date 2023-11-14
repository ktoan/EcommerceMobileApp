import { View, Text } from "react-native";
import React from "react";
import styles from "./colorPicker.style";
import { COLORS } from "../../../assets/constants";
import Color from "./Color";

const ColorPicker = ({ colors = [] }) => {
  return (
    <View style={styles.container}>
      <Color active />
      <Color color={COLORS.red} />
      <Color color={COLORS.green} />
    </View>
  );
};

export default ColorPicker;
