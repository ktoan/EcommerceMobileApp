import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, SIZES } from "../../../assets/constants";
import {
  CustomButton,
  CustomInput,
  CustomText,
  Divider,
} from "../../components";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <CustomText
        text="Sign in"
        size={SIZES.xxLarge - 6}
        bold
        top={SIZES.xSmall}
      />
      <CustomText
        text="Enter credentials to access application"
        size={SIZES.xLarge - 6}
        color={COLORS.primary}
      />
      <CustomInput styling={{ marginTop: SIZES.medium }} placeholder="Email" />
      <CustomInput placeholder="Password" />
      <CustomButton
        iconName="login"
        text="Sign in"
        buttonStyling={{
          marginHorizontal: SIZES.small,
          marginBottom: SIZES.medium,
        }}
      />
      <Divider />
      <CustomButton
        iconName="facebook"
        text="Sign in with Facebook"
        bgColor={COLORS.facebook}
        buttonStyling={{
          marginHorizontal: SIZES.small,
          marginVertical: SIZES.medium,
        }}
      />
      <CustomButton
        iconName="google-"
        text="Sign in with Google"
        bgColor={COLORS.google}
        buttonStyling={{
          marginHorizontal: SIZES.small,
          marginBottom: SIZES.medium,
        }}
      />
      <Divider />
      <CustomText
        top={SIZES.medium}
        bold
        text="Forgot Password?"
        styling={{
          textAlign: "center",
          width: "100%",
        }}
      />
      <CustomButton
        onPress={() => navigation.navigate("Register")}
        iconName="add-user"
        text="Register if you dont have account"
        bgColor={COLORS.primary}
        buttonStyling={{
          marginHorizontal: SIZES.small,
          marginVertical: SIZES.medium,
        }}
      />
    </SafeAreaView>
  );
};

export default Login;
