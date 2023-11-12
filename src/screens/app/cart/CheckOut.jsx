import { useNavigation } from "@react-navigation/native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { BackToolBar } from "../../../components";

const CheckOut = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <BackToolBar navigation={navigation} text="Check out" />
    </SafeAreaView>
  );
};

export default CheckOut;
