import React, { useState } from "react";
import { View } from "react-native";
import { SIZES } from "../../../assets/constants";
import CustomText from "../text/CustomText";
import OptionItem from "./OptionItem";
import styles from "./optionPicker.style";

const OptionPicker = ({ title = "Title", options = [] }) => {
  const [value, setValue] = useState("");

  return (
    <View>
      <CustomText text={title} size={SIZES.large} bold />
      <View style={styles.container}>
        {options.map((item, index) => (
          <OptionItem
            onPress={() => setValue(item)}
            key={index}
            text={item}
            active={value === item}
          />
        ))}
      </View>
    </View>
  );
};

export default OptionPicker;
