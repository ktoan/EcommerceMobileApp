import { Entypo } from "@expo/vector-icons";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import { COLORS, OPACITY, SIZES } from "../../../assets/constants";
import CustomText from "../text/CustomText";
import styles from "./menuitem.style";

const MenuItem = ({
  text = "Text",
  color = COLORS.primary,
  iconName = "code",
  isChevron = true,
  onPress = () => {},
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={OPACITY}
      style={styles.container}
    >
      <View style={styles.wrapper}>
        <Entypo name={iconName} size={30} color={color} />
        <CustomText size={SIZES.medium + 4} text={text} color={color} />
      </View>
      {isChevron && <Entypo name="chevron-right" size={30} color={color} />}
    </TouchableOpacity>
  );
};

export default MenuItem;
