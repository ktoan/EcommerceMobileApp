import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../assets/constants";

const styles = StyleSheet.create({
  cardContainer: {
    width: 182,
    height: 240,
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.medium,
    overflow: "hidden",
  },
  imageContainer: {
    flex: 1,
    width: 182,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 182,
    aspectRatio: 1,
    resizeMode: "cover",
  },
});

export default styles;
