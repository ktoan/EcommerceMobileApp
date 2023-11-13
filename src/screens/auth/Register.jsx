import { useNavigation } from "@react-navigation/native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, SIZES } from "../../../assets/constants";
import {
  CustomButton,
  CustomInput,
  CustomText,
  Divider,
} from "../../components";

const Register = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <CustomText
        text="Register"
        size={SIZES.xxLarge - 6}
        bold
        top={SIZES.xSmall}
      />
      <CustomText
        text="Create new account for joining with us"
        size={SIZES.xLarge - 6}
        color={COLORS.primary}
      />
      <CustomInput
        iconName="email"
        styling={{ marginTop: SIZES.medium }}
        placeholder="Email"
      />
      <CustomInput placeholder="Full Name" iconName="v-card" />
      <CustomInput placeholder="Password" iconName="lock" />
      <CustomInput placeholder="Confirm Password" iconName="lock" />
      <CustomButton
        iconName="add-user"
        text="Sign up"
        buttonStyling={{
          marginHorizontal: SIZES.small,
          marginBottom: SIZES.medium,
        }}
      />
      <Divider />
      <CustomButton
        onPress={() => navigation.navigate("Login")}
        iconName="login"
        text="Login if you already have an account"
        buttonStyling={{
          marginHorizontal: SIZES.small,
          marginVertical: SIZES.medium,
        }}
      />
    </SafeAreaView>
  );
};

export default Register;
