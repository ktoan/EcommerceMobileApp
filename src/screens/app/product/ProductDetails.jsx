import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, OPACITY, SHADOWS, SIZES } from "../../../../assets/constants";
import {
  ColorPicker,
  CustomButton,
  CustomText,
  OptionPicker,
  ReviewProduct,
} from "../../../components";
import { useDispatch } from "react-redux";

const ProductDetails = () => {
  const navigation = useNavigation();
  const [isLiked, setLiked] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [sizes, setSizes] = useState(["XL", "L", "M"]);

  function onChangeQuantity(action) {
    if (action === "minus") {
      if (quantity === 1) {
        return;
      } else {
        setQuantity((quantity) => quantity - 1);
      }
    } else if (action === "plus") {
      setQuantity((quantity) => quantity + 1);
    } else {
      return;
    }
  }

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
      <View style={styles.ratingContainer}>
        <Entypo name="star" size={24} color={COLORS.yellow} />
        <CustomText
          marginHorizontal={SIZES.small / 2}
          text="4.8"
          size={SIZES.medium + 2}
          bold
        />
      </View>
      <CustomText
        bold
        size={SIZES.large}
        noLines={2}
        text="Lorem ipsum dolor sit amet consect adipisicing elit"
        color={COLORS.primary}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <CustomText
          size={SIZES.large - 2}
          text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex fuga enim ratione eligendi voluptatem recusandae? Illo asperiores dicta consectetur veniam.
"
          color={COLORS.gray}
          noLines={5}
        />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <CustomText bold text="Price: $499" size={SIZES.xLarge} />
          <CustomText text="Sales: 199" color={COLORS.gray} />
        </View>
        <ColorPicker />
        <OptionPicker options={sizes} title="Size" />
        <CustomText text="Reviews" size={SIZES.large} bold />
        <ReviewProduct data={[1, 2, 3, 4, 5]} />
      </ScrollView>
      <View style={styles.lowerRow}>
        <View style={styles.quantityContainer}>
          <TouchableOpacity
            onPress={() => onChangeQuantity("minus")}
            activeOpacity={OPACITY}
          >
            <Entypo name="minus" size={24} />
          </TouchableOpacity>
          <CustomText marginHorizontal={SIZES.medium} bold text={quantity} />
          <TouchableOpacity
            onPress={() => onChangeQuantity("plus")}
            activeOpacity={OPACITY}
          >
            <Entypo name="plus" size={24} />
          </TouchableOpacity>
        </View>
        <CustomButton
          buttonStyling={{ flex: 2 }}
          iconName="shopping-cart"
          text="Add to cart"
        />
      </View>
    </SafeAreaView>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    marginBottom: SIZES.bottomBarHeight,
  },
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
  ratingContainer: {
    marginTop: SIZES.small,
    marginHorizontal: SIZES.small,
    flexDirection: "row",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    alignSelf: "center",
  },
  lowerRow: {
    flexDirection: "row",
    alignItems: "center",
    margin: SIZES.small,
    gap: SIZES.small,
  },
  quantityContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: SIZES.medium,
    backgroundColor: COLORS.lightWhite,
    paddingVertical: SIZES.small,
    ...SHADOWS.medium,
    shadowColor: COLORS.light,
    borderRadius: SIZES.medium,
  },
});
