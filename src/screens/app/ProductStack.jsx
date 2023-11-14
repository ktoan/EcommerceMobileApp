import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Products from "./product/Products";
import ProductDetails from "./product/ProductDetails";

const Stack = createNativeStackNavigator();

const ProductStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Products"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Products" component={Products} />
      <Stack.Screen name="ProductDetails" component={ProductDetails} />
    </Stack.Navigator>
  );
};

export default ProductStack;
