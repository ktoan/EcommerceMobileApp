import { StyleSheet } from "react-native";
import { COLORS, SHADOWS } from "../../../assets/constants";

const styles = StyleSheet.create({
  color: (color, active) => ({
    backgroundColor: color,
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    ...SHADOWS.medium,
    shadowColor: COLORS.light,
    borderWidth: 3,
    borderColor: active ? COLORS.black : "transparent",
  }),
});

export default styles;
