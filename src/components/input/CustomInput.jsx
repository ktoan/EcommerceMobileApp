import React, { useState } from "react";
import { TextInput } from "react-native";
import { COLORS, SHADOWS } from "../../../assets/constants";
import styles from "./custominput.style";

const CustomInput = ({ styling = {}, ...props }) => {
  const [focused, setFocused] = useState(false);
  return (
    <TextInput
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      placeholderTextColor={COLORS.gray}
      underlineColorAndroid="transparent"
      style={[
        styles.default,
        focused && {
          borderWidth: 1,
          borderColor: COLORS.primary,
          ...SHADOWS.medium,
          shadowColor: COLORS.primary,
        },
        styling,
      ]}
      {...props}
    />
  );
};

export default CustomInput;
