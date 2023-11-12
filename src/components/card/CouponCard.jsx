import React, { useState } from "react";
import { Image, View } from "react-native";
import { COLORS, SIZES } from "../../../assets/constants";
import CustomText from "../text/CustomText";
import styles from "./couponCard.style";

const CouponCard = () => {
  const [isReceived, setReceived] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={{
            uri: "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
          }}
          resizeMode="cover"
          style={styles.logoImage}
        />
      </View>
      <CustomText
        marginHorizontal={0}
        top={SIZES.small}
        bold
        text="Daily Coupon"
        color={COLORS.primary}
      />
      <View>
        <CustomText
          size={SIZES.medium - 2}
          color={COLORS.gray}
          noLines={2}
          text="Discount for ..."
          marginHorizontal={0}
        />
        <View style={styles.receiveContainer}>
          <CustomText
            onPress={() => setReceived(!isReceived)}
            text={isReceived ? "Received" : "Receive"}
            color={isReceived ? COLORS.red : COLORS.primary}
            marginHorizontal={0}
            top={SIZES.small}
          />
        </View>
      </View>
    </View>
  );
};

export default CouponCard;
