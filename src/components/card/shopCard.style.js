import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../assets/constants";

const styles = StyleSheet.create({
  cardContainer: (col) => ({
    width: !col ? 182 : "100%",
    paddingVertical: SIZES.medium,
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.medium,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  }),
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    resizeMode: "cover",
  },
  ratingContainer: {
    marginHorizontal: SIZES.small,
    flexDirection: "row",
  },
});

export default styles;
