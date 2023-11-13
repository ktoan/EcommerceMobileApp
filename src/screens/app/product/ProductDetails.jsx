import React, { useState } from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, OPACITY, SIZES } from "../../../../assets/constants";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { CustomText } from "../../../components";

const ProductDetails = () => {
  const navigation = useNavigation();
  const [isLiked, setLiked] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.upperRow}>
        <TouchableOpacity
          style={styles.icon}
          activeOpacity={OPACITY}
          onPress={() => navigation.goBack()}
        >
          <Entypo size={24} name="chevron-left" color={COLORS.lightWhite} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.icon}
          activeOpacity={OPACITY}
          onPress={() => setLiked(!isLiked)}
        >
          <Entypo
            size={24}
            name={!isLiked ? "heart-outlined" : "heart"}
            color={COLORS.lightWhite}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../../../assets/images/fn1.jpg")}
          style={styles.image}
        />
      </View>
      <CustomText
        bold
        top={SIZES.small}
        size={SIZES.large}
        noLines={2}
        text="Lorem ipsum dolor sit amet consect adipisicing elit"
        color={COLORS.primary}
      />
      <CustomText
        size={SIZES.large - 2}
        text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex fuga enim ratione eligendi voluptatem recusandae? Illo asperiores dicta consectetur veniam.
"
        color={COLORS.gray}
        noLines={3}
      />
    </SafeAreaView>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  container: { flex: 1, position: "relative" },
  upperRow: {
    width: "100%",
    position: "absolute",
    zIndex: 999,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    top: SIZES.xxLarge + 6,
    paddingHorizontal: SIZES.small,
  },
  icon: {
    width: 50,
    height: 50,
    backgroundColor: COLORS.primary,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: { width: "100%", height: 300 },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    alignSelf: "center",
  },
});
