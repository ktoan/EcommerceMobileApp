import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { COLORS, OPACITY, SIZES } from "../../../assets/constants";
import CustomText from "../text/CustomText";
import styles from "./productCard.style";

const ProductCard = ({ col = false, onPress = () => {} }) => {
  return (
    <TouchableOpacity activeOpacity={OPACITY} onPress={onPress}>
      <View style={styles.cardContainer(col)}>
        <View style={styles.imageContainer(col)}>
          <Image
            style={styles.image}
            source={require("../../../assets/images/fn1.jpg")}
          />
        </View>
        <View>
          <CustomText
            onPress={onPress}
            bold
            text="Product name"
            color={COLORS.primary}
          />
          <CustomText
            onPress={onPress}
            text="Supplier"
            size={SIZES.small}
            color={COLORS.gray}
          />
          <CustomText
            onPress={onPress}
            text="Category"
            size={SIZES.medium - 2}
            color={COLORS.gray}
          />
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <CustomText
              onPress={onPress}
              text="$399"
              color={COLORS.red}
              styling={{ textDecorationLine: "line-through" }}
            />
            <CustomText onPress={onPress} text="$399" marginHorizontal={0} />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;
