import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../assets/constants";

const styles = StyleSheet.create({
  cardContainer: (col) => ({
    width: !col ? 182 : "100%",
    height: 240,
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.medium,
    overflow: "hidden",
  }),
  imageContainer: (col) => ({
    flex: 1,
    width: !col ? 182 : "100%",
    overflow: "hidden",
  }),
  image: {
    width: "100%",
    height: "auto",
    aspectRatio: 1,
    resizeMode: "cover",
  },
});

export default styles;
