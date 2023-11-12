import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import { COLORS, OPACITY, SIZES } from "../../../assets/constants";
import styles from "./homesearch.style";

const Search = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.searchContainer}>
      <TouchableOpacity activeOpacity={OPACITY}>
        <Entypo
          name="magnifying-glass"
          size={SIZES.xLarge}
          style={styles.searchIcon}
        />
      </TouchableOpacity>
      <View style={styles.searchWrapper}>
        <TextInput
          style={styles.searchInput}
          onPressIn={() => {
            navigation.navigate("SearchProduct");
          }}
          dense
          placeholder="What are you looking for?"
        />
      </View>
      <TouchableOpacity activeOpacity={OPACITY} style={styles.searchBtn}>
        <Entypo name="camera" size={SIZES.xLarge} color={COLORS.lightWhite} />
      </TouchableOpacity>
    </View>
  );
};

export default Search;
