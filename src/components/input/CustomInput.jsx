import { Entypo } from "@expo/vector-icons";
import React, { useState } from "react";
import { TextInput, View } from "react-native";
import { COLORS, SIZES } from "../../../assets/constants";
import styles from "./custominput.style";

const CustomInput = ({ iconName, styling = {}, ...props }) => {
  const [focused, setFocused] = useState(false);
  return (
    <View
      style={[
        styles.container,
        styling,
        focused
          ? { borderColor: COLORS.primary, borderWidth: 1 }
          : { borderColor: "transparent", borderWidth: 1 },
      ]}
    >
      <Entypo
        name={iconName}
        size={24}
        color={COLORS.primary}
        style={iconName ? { margin: SIZES.small } : { marginLeft: SIZES.small }}
      />
      <TextInput
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholderTextColor={COLORS.gray}
        underlineColorAndroid="transparent"
        style={[styles.default]}
        {...props}
      />
    </View>
  );
};

export default CustomInput;
