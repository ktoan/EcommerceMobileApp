import { StyleSheet } from "react-native";
import { COLORS, SHADOWS, SIZES } from "../../../assets/constants";

const styles = StyleSheet.create({
  container: {
    marginVertical: SIZES.small,
    paddingVertical: SIZES.small,
    paddingHorizontal: SIZES.medium,
    borderRadius: SIZES.medium,
    backgroundColor: COLORS.lightWhite,
    ...SHADOWS.medium,
    shadowColor: COLORS.lightWhite,
  },
  userContainer: {
    flexDirection: "row",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    resizeMode: "contain",
  },
  infor: {
    flex: 1,
  },
});

export default styles;
