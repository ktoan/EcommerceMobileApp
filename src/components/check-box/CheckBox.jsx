import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Entypo } from "@expo/vector-icons";
import { COLORS, OPACITY } from "../../../assets/constants";
import styles from "./checkBox.style";

const CheckBox = ({
  checked = false,
  checkBoxColor = COLORS.primary,
  iconColor = COLORS.black,
  onClick = () => {},
}) => {
  const [isChecked, setChecked] = useState(checked);

  function onPressCheckBox() {
    setChecked(!isChecked);
    onClick();
  }

  return (
    <TouchableOpacity
      activeOpacity={OPACITY}
      onPress={() => onPressCheckBox()}
      style={styles.container(checkBoxColor, isChecked)}
    >
      <Entypo size={15} name={isChecked ? "check" : ""} color={iconColor} />
    </TouchableOpacity>
  );
};

export default CheckBox;
