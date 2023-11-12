import React from "react";
import { View } from "react-native";
import { COLORS, SIZES } from "../../../assets/constants";
import CustomText from "../text/CustomText";
import styles from "./userorder.style";

const UserOrder = () => {
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.box,
          { borderRightColor: COLORS.gray2, borderRightWidth: 1 },
        ]}
      >
        <CustomText
          text="3"
          size={SIZES.xLarge}
          bold
          color={COLORS.primary}
          styling={{ textAlign: "center" }}
        />
        <CustomText
          text="Orders"
          color={COLORS.gray}
          styling={{ textAlign: "center" }}
        />
      </View>
      <View style={[styles.box]}>
        <CustomText
          text="40K"
          size={SIZES.xLarge}
          bold
          color={COLORS.primary}
          styling={{ textAlign: "center" }}
        />
        <CustomText
          text="Coins"
          color={COLORS.gray}
          styling={{ textAlign: "center" }}
        />
      </View>
    </View>
  );
};

export default UserOrder;
