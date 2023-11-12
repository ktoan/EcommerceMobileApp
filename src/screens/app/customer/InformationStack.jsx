import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import MainInformation from "./information/MainInformation";

const Stack = createNativeStackNavigator();

const InformationStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="MainInformation"
    >
      <Stack.Screen name="MainInformation" component={MainInformation} />
    </Stack.Navigator>
  );
};

export default InformationStack;
