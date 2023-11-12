import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import MainCustomer from "./customer/MainCustomer";
import InformationStack from "./customer/InformationStack";

const Stack = createNativeStackNavigator();

const CustomerStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MainCustomer" component={MainCustomer} />
      <Stack.Screen name="Information" component={InformationStack} />
    </Stack.Navigator>
  );
};

export default CustomerStack;
