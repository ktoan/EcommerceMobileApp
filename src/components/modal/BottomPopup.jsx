import React, { useEffect, useState } from "react";
import { Modal, ScrollView, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { COLORS, OPACITY, SIZES } from "../../../assets/constants";
import CustomText from "../text/CustomText";
import { toggleBottomPopup } from "../../redux/actions/appActions";

const BottomPopup = () => {
  const { isShowPopup, options } = useSelector((state) => state.app.popup);
  const dispatch = useDispatch();

  const Outside = ({ onPress = () => {} }) => {
    return (
      <TouchableOpacity
        activeOpacity={OPACITY}
        onPress={onPress}
        style={{ flex: 1, width: "100%" }}
      />
    );
  };
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isShowPopup}
      onRequestClose={() => toggleBottomPopup(dispatch, false)}
    >
      <View
        style={{
          flex: 1,
          backgroundColor: "#000000AA",
          justifyContent: "flex-end",
        }}
      >
        <Outside onPress={() => toggleBottomPopup(dispatch, false)} />
        <View
          style={{
            paddingVertical: SIZES.xLarge,
            backgroundColor: COLORS.lightWhite,
            width: "100%",
            borderTopLeftRadius: SIZES.small,
            borderTopRightRadius: SIZES.small,
            paddingHorizontal: SIZES.small,
          }}
        >
          <ScrollView showsVerticalScrollIndicator={false}>
            {options.map((item, index) => (
              <CustomText
                top={index === 0 ? 0 : SIZES.medium}
                key={index}
                text={item.label}
                onPress={item.onClick ? item.onClick : () => {}}
              />
            ))}
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

export default BottomPopup;
