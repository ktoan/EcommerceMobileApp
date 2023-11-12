import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import MainCustomer from "./customer/MainCustomer";

const Stack = createNativeStackNavigator();

const CustomerStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MainCustomer" component={MainCustomer} />
    </Stack.Navigator>
  );
};

export default CustomerStack;
