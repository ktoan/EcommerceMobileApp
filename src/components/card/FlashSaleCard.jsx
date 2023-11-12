import React, { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { COLORS, OPACITY, SIZES } from "../../../assets/constants";
import CustomText from "../text/CustomText";
import styles from "./flashSaleCard.style";

const FlashSaleCard = ({ onPress = () => {} }) => {
  const [time, setTime] = useState(24 * 60 * 60);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <TouchableOpacity activeOpacity={OPACITY} onPress={onPress}>
      <View style={styles.cardContainer}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require("../../../assets/images/fn1.jpg")}
          />
        </View>
        <View>
          <CustomText bold text="Product name" color={COLORS.primary} />
          <CustomText text="Supplier" size={SIZES.small} color={COLORS.gray} />
          <CustomText
            text="Category"
            size={SIZES.medium - 2}
            color={COLORS.gray}
          />
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <CustomText
              text="$399"
              color={COLORS.red}
              styling={{ textDecorationLine: "line-through" }}
            />
            <CustomText text="$399" marginHorizontal={0} />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              backgroundColor: COLORS.gray2,
            }}
          >
            <CustomText color={COLORS.lightWhite} text={formatTime(time)} />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default FlashSaleCard;
