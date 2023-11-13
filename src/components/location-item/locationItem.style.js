import { StyleSheet } from "react-native";
import { COLORS, SIZES, SHADOWS } from "../../../assets/constants";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    ...SHADOWS.medium,
    shadowColor: COLORS.light,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default styles;
