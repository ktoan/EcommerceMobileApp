import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { COLORS, OPACITY, SIZES } from "../../../assets/constants";
import CustomText from "../text/CustomText";
import styles from "./searchitem.style";

const SearchItem = ({ onPress = () => {} }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={OPACITY}
      style={styles.container}
    >
      <View style={styles.image}>
        <Image
          style={styles.productImg}
          source={require("../../../assets/images/fn1.jpg")}
        />
      </View>
      <View style={styles.textContainer}>
        <CustomText color={COLORS.primary} bold text="Green Counch" />
        <CustomText
          color={COLORS.gray}
          text="Supplier"
          size={SIZES.small + 2}
        />
        <CustomText text="$499" color={COLORS.gray} size={SIZES.small + 2} />
      </View>
    </TouchableOpacity>
  );
};

export default SearchItem;
