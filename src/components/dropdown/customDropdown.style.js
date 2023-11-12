import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../assets/constants";

const styles = StyleSheet.create({
  dropdown: {
    fontFamily: "regular",
    fontSize: SIZES.medium,
    padding: SIZES.small,
    backgroundColor: COLORS.light,
    borderRadius: SIZES.small,
    marginBottom: SIZES.medium,
  },
});

export default styles;
