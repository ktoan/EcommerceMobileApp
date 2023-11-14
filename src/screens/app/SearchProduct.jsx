import React, { useState } from "react";
import { FlatList, Image, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SIZES } from "../../../assets/constants";
import { CommonSearch, SearchItem } from "../../components";

const SearchProduct = () => {
  const [searchResult, setSearchResult] = useState([1, 2, 3]);

  return (
    <SafeAreaView>
      <CommonSearch />
      {searchResult.length === 0 ? (
        <View style={styles.container}>
          <Image
            source={require("../../../assets/images/search-img.png")}
            style={styles.searchImg}
          />
        </View>
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          style={{ marginHorizontal: 12 }}
          data={searchResult}
          renderItem={({ item }) => <SearchItem />}
        />
      )}
    </SafeAreaView>
  );
};

export default SearchProduct;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchImg: {
    resizeMode: "contain",
    width: SIZES.width - 80,
    height: SIZES.height - 300,
    alignSelf: "center",
  },
});
