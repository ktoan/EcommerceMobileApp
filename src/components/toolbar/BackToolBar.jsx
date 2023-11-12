import { Entypo } from "@expo/vector-icons";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import { OPACITY, SIZES } from "../../../assets/constants";
import CustomText from "../text/CustomText";

const BackToolBar = ({ text = "Text", navigation = null }) => {
  function backAction() {
    if (!navigation) return;
    navigation.goBack();
  }

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        gap: 4,
        paddingHorizontal: SIZES.medium,
      }}
    >
      <TouchableOpacity activeOpacity={OPACITY} onPress={() => backAction()}>
        <Entypo name="chevron-left" size={24} color={"black"} />
      </TouchableOpacity>
      <CustomText
        text={text}
        size={SIZES.xxLarge - 6}
        bold
        top={SIZES.xSmall}
      />
    </View>
  );
};

export default BackToolBar;
