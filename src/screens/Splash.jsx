import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, SIZES, SHADOWS } from "../../assets/constants";
import { CustomButton, CustomText } from "../components";
import { useNavigation } from "@react-navigation/native";

const Splash = () => {
  const navigation = useNavigation();

  function navigationToAuthPage(page) {
    navigation.navigate(page);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <ImageBackground
          style={styles.image}
          resizeMode="contain"
          source={require("../../assets/images/welcome.png")}
        />
        <View style={styles.textContainer}>
          <CustomText
            size={SIZES.xxLarge - 6}
            bold
            color={COLORS.primary}
            text="E-Commerce App"
          />
          <CustomText
            noLines={5}
            size={SIZES.medium + 2}
            color={COLORS.gray}
            text="Welcome to our seamless shopping experience. Discover, browse, and shop your heart out today!"
          />
        </View>
        <View style={styles.buttonContainer}>
          <CustomButton
            onPress={() => navigationToAuthPage("Login")}
            bold
            text="Login"
            buttonStyling={{
              width: "45%",
              ...SHADOWS.medium,
              shadowColor: COLORS.lightWhite,
            }}
          />
          <CustomButton
            onPress={() => navigationToAuthPage("Register")}
            bold
            text="Register"
            bgColor={COLORS.light}
            color={COLORS.black}
            buttonStyling={{
              width: "45%",
              ...SHADOWS.medium,
              shadowColor: COLORS.lightWhite,
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    width: SIZES.width,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: SIZES.height / 2.5,
  },
  textContainer: {
    paddingHorizontal: SIZES.small,
    paddingTop: SIZES.small,
  },
  buttonContainer: {
    paddingHorizontal: SIZES.small,
    paddingTop: SIZES.small,
    flexDirection: "row",
    gap: SIZES.small,
    justifyContent: "center",
  },
});
