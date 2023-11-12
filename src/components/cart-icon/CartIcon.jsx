import { Entypo } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";
import { COLORS, OPACITY } from "../../../assets/constants";
import styles from "./carticon.style";

const CartIcon = ({ color = COLORS.primary }) => {
  return (
    <View activeOpacity={OPACITY} style={{ alignItems: "flex-end" }}>
      <View style={styles.cartCount}>
        <Text style={styles.cartNumber}>3</Text>
      </View>
      <View>
        <Entypo name="shopping-cart" size={30} color={color} />
      </View>
    </View>
  );
};

export default CartIcon;
