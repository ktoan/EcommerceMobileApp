import React, { useState } from "react";
import { FlatList, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, SIZES } from "../../../../assets/constants";
import {
  CartItem,
  CustomButton,
  CustomText,
  EmptyCartItem,
} from "../../../components";
import { useNavigation } from "@react-navigation/native";

const MainCart = () => {
  const [cartItems, setCartItems] = useState([1, 2, 3, 4, 5]);
  const navigation = useNavigation();

  function navigationCheckOutScreen() {
    navigation.navigate("CheckOut");
  }

  return (
    <SafeAreaView style={{ marginBottom: SIZES.bottomBarHeight, flex: 1 }}>
      <CustomText
        text="Your cart"
        size={SIZES.xxLarge - 6}
        bold
        top={SIZES.small}
      />
      <CustomText
        text="Check out all products"
        size={SIZES.xLarge - 6}
        color={COLORS.primary}
      />
      {cartItems.length === 0 ? (
        <EmptyCartItem />
      ) : (
        <>
          <FlatList
            showsVerticalScrollIndicator={false}
            style={{ margin: SIZES.small }}
            data={cartItems}
            renderItem={({ item }) => <CartItem />}
          />
          <View
            style={{
              flexDirection: "row",
              padding: SIZES.small,
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <CustomText text="Total: $499" size={SIZES.xLarge} bold />
            <CustomButton
              onPress={() => navigationCheckOutScreen()}
              text="Check out"
            />
          </View>
        </>
      )}
    </SafeAreaView>
  );
};

export default MainCart;
