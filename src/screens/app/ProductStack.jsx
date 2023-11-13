import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Products from "./product/Products";
import ProductDetails from "./product/ProductDetails";

const Stack = createNativeStackNavigator();

const ProductStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="ProductDetails"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="ProductDetails" component={ProductDetails} />
      {/* <Stack.Screen name="Products" component={Products} /> */}
    </Stack.Navigator>
  );
};

export default ProductStack;
