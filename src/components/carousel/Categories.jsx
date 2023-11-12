import React, { useState } from "react";
import { FlatList } from "react-native";
import { SIZES } from "../../../assets/constants";
import Category from "../card/Category";

const Categories = () => {
  const [activedCategory, setActivedCategory] = useState(1);
  const [categories, setCategories] = useState([1, 2, 3, 4, 5, 6, 7]);
  return (
    <FlatList
      horizontal
      data={categories}
      renderItem={({ item }) => <Category active={item === activedCategory} />}
      contentContainerStyle={{ columnGap: SIZES.medium }}
      showsHorizontalScrollIndicator={false}
      style={{ marginHorizontal: SIZES.small }}
    />
  );
};

export default Categories;
