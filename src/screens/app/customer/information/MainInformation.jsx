import { useNavigation } from "@react-navigation/native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { BackToolBar, CustomInput, CustomText } from "../../../../components";
import { COLORS, SIZES } from "../../../../../assets/constants";

const MainInformation = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <BackToolBar leftIcon="edit" navigation={navigation} text="Information" />
      <CustomText
        text="View your information, update when it isn't matched with your identifications"
        noLines={2}
        size={SIZES.xLarge - 6}
        color={COLORS.primary}
      />
      <CustomInput
        styling={{ marginTop: SIZES.medium }}
        placeholder="Email"
        value="nktoanwork@gmail.com"
      />
    </SafeAreaView>
  );
};

export default MainInformation;
