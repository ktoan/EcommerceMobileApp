import React from "react";
import { View } from "react-native";
import InformationItem from "./InformationItem";
import styles from "./informationitems.style";

const InformationItems = () => {
  return (
    <View style={styles.container}>
      <InformationItem
        text="TT Hồ Xá, Vĩnh Linh, Quảng Trị (Default)"
        iconName="location"
      />
      <InformationItem text="0868319857" iconName="phone" />
    </View>
  );
};

export default InformationItems;
