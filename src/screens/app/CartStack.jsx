import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import CheckOut from "./cart/CheckOut";
import MainCart from "./cart/MainCart";

const Stack = createNativeStackNavigator();

const CartStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="MainCart"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="MainCart" component={MainCart} />
      <Stack.Screen name="CheckOut" component={CheckOut} />
    </Stack.Navigator>
  );
};

export default CartStack;
