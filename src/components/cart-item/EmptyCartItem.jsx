import { Entypo } from "@expo/vector-icons";
import React from "react";
import { View } from "react-native";
import { COLORS, SIZES } from "../../../assets/constants";
import CustomText from "../text/CustomText";
import styles from "./emptycartitem.style";

const EmptyCartItem = () => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View>
          <Entypo
            style={{ textAlign: "center" }}
            name="warning"
            size={SIZES.xxLarge}
            color={COLORS.gray}
          />
          <CustomText
            top={SIZES.small}
            size={SIZES.medium + 4}
            color={COLORS.gray}
            bold
            text="Your cart is empty, add new item"
          />
        </View>
      </View>
    </View>
  );
};

export default EmptyCartItem;
