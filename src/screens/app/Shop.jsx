import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, SIZES } from "../../../assets/constants";
import {
  CommonSearch,
  CustomDropdown,
  CustomText,
  ShopGrid,
} from "../../components";
import { ScrollView, StyleSheet, View } from "react-native";

const Shop = () => {
  const data = [
    { label: "Item 1", value: "1" },
    { label: "Item 2", value: "2" },
    { label: "Item 3", value: "3" },
    { label: "Item 4", value: "4" },
    { label: "Item 5", value: "5" },
    { label: "Item 6", value: "6" },
    { label: "Item 7", value: "7" },
    { label: "Item 8", value: "8" },
  ];

  const [countries, setCountries] = useState([]);
  const [locations, setLocations] = useState([]);

  return (
    <SafeAreaView>
      <CustomText
        text="Shop"
        size={SIZES.xxLarge - 6}
        bold
        top={SIZES.xSmall}
      />
      <CustomText
        text="Search for a store that suits your needs"
        size={SIZES.xLarge - 6}
        color={COLORS.primary}
      />
      <CommonSearch placeholder="Search Shop..." />
      <View
        style={{
          flexDirection: "row",
          gap: SIZES.small / 2,
          justifyContent: "space-between",
          paddingHorizontal: SIZES.small,
        }}
      >
        <CustomDropdown
          data={data}
          iconName="book"
          placeholder="Category"
          styling={{ width: "49%" }}
        />
        <CustomDropdown
          iconName="location"
          placeholder="Location"
          styling={{ width: "49%" }}
        />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.mbMedium}>
          <ShopGrid products={[1, 2, 3]} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Shop;

const styles = StyleSheet.create({
  mbMedium: {
    marginBottom: SIZES.medium,
  },
});
