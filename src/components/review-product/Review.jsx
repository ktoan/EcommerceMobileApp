import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./review.style";
import CustomText from "../text/CustomText";
import { COLORS, OPACITY, SIZES } from "../../../assets/constants";
import { Entypo } from "@expo/vector-icons";
import { toggleBottomPopup } from "../../redux/actions/appActions";
import { useDispatch } from "react-redux";

const Review = () => {
  const dispatch = useDispatch();

  function onPressShowOptions() {
    toggleBottomPopup(dispatch, true);
  }

  return (
    <View style={styles.container}>
      <View style={styles.userContainer}>
        <Image
          style={styles.image}
          source={require("../../../assets/images/default-avatar.png")}
        />
        <View style={styles.infor}>
          <CustomText bold text="Toan Nguyen" color={COLORS.primary} />
          <CustomText
            color={COLORS.gray}
            size={SIZES.medium - 2}
            text="2023-01-01 13:00:00"
          />
        </View>
        <TouchableOpacity
          onPress={() => onPressShowOptions()}
          activeOpacity={OPACITY}
        >
          <Entypo
            name="dots-three-horizontal"
            size={24}
            color={COLORS.primary}
          />
        </TouchableOpacity>
      </View>
      <CustomText
        top={SIZES.small}
        noLines={5}
        text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni totam repellat mollitia."
      />
    </View>
  );
};

export default Review;
