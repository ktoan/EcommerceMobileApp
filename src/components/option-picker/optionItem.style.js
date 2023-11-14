import { StyleSheet } from "react-native";
import { SIZES, SHADOWS, COLORS } from "../../../assets/constants";

const styles = StyleSheet.create({
  container: {
    margin: SIZES.small,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: SIZES.small,
    width: "100%",
  },
  size: (active) => ({
    paddingVertical: SIZES.small,
    paddingHorizontal: SIZES.small,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    ...SHADOWS.medium,
    shadowColor: COLORS.light,
    borderWidth: 3,
    borderColor: active ? COLORS.primary : "transparent",
  }),
});

export default styles;
