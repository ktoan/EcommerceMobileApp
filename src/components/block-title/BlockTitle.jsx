import { View } from "react-native";
import React from "react";
import styles from "./blockTitle.style";
import CustomText from "../text/CustomText";
import { COLORS, SIZES } from "../../../assets/constants";
import { Entypo } from "@expo/vector-icons";

const BlockTitle = ({ text = "Text", iconName = "", onPress = () => {} }) => {
  return (
    <View style={styles.container}>
      <CustomText
        onPress={onPress}
        size={SIZES.medium + 4}
        bold
        color={COLORS.primary}
        text={text}
      />
      <Entypo
        name={iconName}
        size={30}
        color={COLORS.primary}
        style={{ marginRight: SIZES.small }}
      />
    </View>
  );
};

export default BlockTitle;
