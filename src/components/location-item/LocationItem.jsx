import React, { useState } from "react";
import { View } from "react-native";
import CustomInput from "../input/CustomInput";
import styles from "./locationItem.style";

const LocationItem = () => {
  const [isEditable, setEditable] = useState(false);
  return (
    <View style={styles.container}>
      <CustomInput
        onBlur={() => setEditable(false)}
        value="TT Hồ Xá, Vĩnh Linh, Quảng Trị"
        editable={isEditable}
      />
    </View>
  );
};

export default LocationItem;
