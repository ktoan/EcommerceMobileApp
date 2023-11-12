import { Entypo } from "@expo/vector-icons";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import { COLORS, OPACITY, SIZES } from "../../../assets/constants";
import CustomText from "../text/CustomText";

const BackToolBar = ({
  text = "Text",
  navigation = null,
  leftIcon = "",
  leftIconPress = () => {},
  leftIconColor = COLORS.black,
}) => {
  function backAction() {
    if (!navigation) return;
    navigation.goBack();
  }

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: SIZES.medium,
        justifyContent: "space-between",
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
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
      <Entypo
        name={leftIcon}
        size={24}
        color={leftIconColor}
        onPress={leftIconPress}
      />
    </View>
  );
};

export default BackToolBar;
