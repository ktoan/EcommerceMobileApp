import { Entypo } from "@expo/vector-icons";
import React, { useState } from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { COLORS, OPACITY, SIZES } from "../../../assets/constants";
import CheckBox from "../check-box/CheckBox";
import CustomText from "../text/CustomText";
import styles from "./cartitem.style";

const CartItem = () => {
  const [quantity, setQuantity] = useState(1);
  const [isChecked, setChecked] = useState(false);

  function onChangeQuantity(action) {
    if (action === "minus") {
      if (quantity === 1) {
        return;
      } else {
        setQuantity((quantity) => quantity - 1);
      }
    } else if (action === "plus") {
      setQuantity((quantity) => quantity + 1);
    } else {
      return;
    }
  }

  function onChangeSelectedOption() {
    setChecked(!isChecked);
  }

  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Image
          source={require("../../../assets/images/fn1.jpg")}
          style={{
            width: "100%",
            height: "100%",
            resizeMode: "cover",
            borderRadius: SIZES.medium,
          }}
        />
      </View>
      <View style={styles.inforContainer}>
        <CustomText
          text="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
          noLines={2}
          color={COLORS.primary}
          bold
        />
        <CustomText text="$499" color={COLORS.gray} />
        <View style={styles.quantityContainer}>
          <TouchableOpacity
            onPress={() => onChangeQuantity("minus")}
            disabled={quantity === 1}
            activeOpacity={OPACITY}
            style={styles.actionBtn}
          >
            <Entypo name="minus" size={SIZES.large} color={COLORS.gray} />
          </TouchableOpacity>
          <CustomText
            text={quantity}
            size={SIZES.large}
            color={COLORS.primary}
          />
          <TouchableOpacity
            onPress={() => onChangeQuantity("plus")}
            activeOpacity={OPACITY}
            style={styles.actionBtn}
          >
            <Entypo name="plus" size={SIZES.large} color={COLORS.gray} />
          </TouchableOpacity>
        </View>
        <CustomText text="Total: $499" top={SIZES.small} />
      </View>
      <CheckBox
        checked={isChecked}
        checkBoxColor={COLORS.primary}
        iconColor={isChecked ? COLORS.lightWhite : COLORS.primary}
        onClick={() => onChangeSelectedOption()}
      />
    </View>
  );
};

export default CartItem;
