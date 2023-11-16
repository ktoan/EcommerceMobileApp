import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./shopCard.style";
import { COLORS, SIZES } from "../../../assets/constants";
import CustomText from "../text/CustomText";
import { Entypo } from "@expo/vector-icons";

const ShopCard = ({ col = false, onPress = () => {} }) => {
  return (
    <View style={styles.cardContainer(col)}>
      <Image
        style={styles.image}
        source={require("../../../assets/images/fn1.jpg")}
      />
      <CustomText
        top={SIZES.small}
        onPress={onPress}
        bold
        text="Shop name"
        color={COLORS.primary}
      />
      <CustomText
        onPress={onPress}
        text="444 followers"
        color={COLORS.gray}
        size={SIZES.small}
      />
      <View style={styles.ratingContainer}>
        <Entypo name="star" size={SIZES.medium} color={COLORS.yellow} />
        <CustomText
          marginHorizontal={SIZES.small / 2}
          text="4.8"
          size={SIZES.small}
          bold
        />
      </View>
    </View>
  );
};

export default ShopCard;
