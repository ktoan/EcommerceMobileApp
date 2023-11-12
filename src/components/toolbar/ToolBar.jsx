import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { OPACITY } from "../../../assets/constants";
import CartIcon from "../cart-icon/CartIcon";
import styles from "./toolbar.style";

const ToolBar = () => {
  const navigation = useNavigation();

  function navigateCartScreen() {
    navigation.navigate("Cart");
  }

  return (
    <View style={styles.appBarWrapper}>
      <View style={styles.appBar}>
        <Text style={styles.greetingText}>Hello Toan Nguyen</Text>
        <TouchableOpacity
          activeOpacity={OPACITY}
          onPress={() => navigateCartScreen()}
        >
          <CartIcon />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ToolBar;
