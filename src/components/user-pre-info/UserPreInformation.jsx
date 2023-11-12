import React from "react";
import { Image, View } from "react-native";
import { COLORS, SIZES } from "../../../assets/constants";
import CustomText from "../text/CustomText";
import styles from "./userpreinfo.style";

const UserPreInformation = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.avatar}
        source={require("../../../assets/images/default-avatar.png")}
      />
      <View>
        <CustomText
          bold
          size={SIZES.xLarge}
          color={COLORS.primary}
          text="Toan Nguyen"
        />
        <CustomText color={COLORS.gray} text="nktoanwork@gmail.com" />
      </View>
    </View>
  );
};

export default UserPreInformation;
