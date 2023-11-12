import { Entypo } from "@expo/vector-icons";
import React from "react";
import { TextInput, View } from "react-native";
import styles from "./commonsearch.style";

const CommonSearch = ({ placeholder = "Search..." }) => {
  return (
    <View style={styles.searchContainer}>
      <Entypo name="magnifying-glass" size={24} style={styles.searchIcon} />
      <TextInput style={styles.searchInput} placeholder={placeholder} />
    </View>
  );
};

export default CommonSearch;
