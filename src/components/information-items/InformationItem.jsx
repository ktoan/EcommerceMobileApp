import { Entypo } from "@expo/vector-icons";
import React from "react";
import { View } from "react-native";
import { COLORS } from "../../../assets/constants";
import CustomText from "../text/CustomText";
import styles from "./informationitem.style";

const InformationItem = ({
  iconName = "code",
  color = COLORS.gray,
  size = 24,
  text = "Information item",
}) => {
  return (
    <View style={styles.container}>
      <Entypo name={iconName} color={color} size={size} />
      <CustomText color={color} text={text} />
    </View>
  );
};

export default InformationItem;
