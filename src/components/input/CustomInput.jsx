import React, { useState } from "react";
import { COLORS, SHADOWS, SIZES } from "../../../assets/constants";
import { TextInput } from "react-native";

const CustomInput = ({ styling = {}, ...props }) => {
  const [focused, setFocused] = useState(false);
  return (
    <TextInput
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      placeholderTextColor={COLORS.gray}
      underlineColorAndroid="transparent"
      style={[
        {
          fontFamily: "regular",
          fontSize: SIZES.medium,
          padding: SIZES.small,
          backgroundColor: COLORS.light,
          borderRadius: SIZES.small,
          marginBottom: SIZES.medium,
          marginHorizontal: SIZES.small,
        },
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
