import { Entypo } from "@expo/vector-icons";
import React, { useState } from "react";
import { Text, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { COLORS, SIZES } from "../../../assets/constants";
import styles from "./customDropdown.style";
import CustomText from "../text/CustomText";

const CustomDropdown = ({
  iconName = "",
  color = COLORS.gray,
  data = [],
  styling = {},
  ...props
}) => {
  const [value, setValue] = useState(null);

  const renderItem = (item) => {
    return (
      <View
        style={{
          padding: 17,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <CustomText text={item.label} />
        {item.value === value && (
          <Entypo color={color} name="check" size={24} />
        )}
      </View>
    );
  };

  return (
    <Dropdown
      style={[styles.dropdown, styling]}
      data={data}
      search
      placeholderStyle={{
        marginLeft: iconName !== "" ? SIZES.small : 0,
        color: color,
        fontFamily: "regular",
        fontSize: SIZES.medium,
      }}
      selectedTextStyle={{
        marginLeft: iconName !== "" ? SIZES.small : 0,
        color: color,
        fontFamily: "regular",
        fontSize: SIZES.medium,
      }}
      onChange={(item) => {
        setValue(item.value);
      }}
      labelField="label"
      valueField="value"
      renderLeftIcon={() => <Entypo size={24} color={color} name={iconName} />}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
      {...props}
    />
  );
};

export default CustomDropdown;
