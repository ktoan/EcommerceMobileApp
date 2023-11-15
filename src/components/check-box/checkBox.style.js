import { StyleSheet } from "react-native";
import { SIZES } from "../../../assets/constants";

const styles = StyleSheet.create({
  container: (color, active) => ({
    width: 25,
    height: 25,
    backgroundColor: active ? color : "transparent",
    borderColor: color,
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: SIZES.small / 2,
  }),
});

export default styles;
