import { StyleSheet } from "react-native";
import { SIZES } from "../../../assets/constants";

const styles = StyleSheet.create({
  buttonContainer: (bgColor) => ({
    paddingVertical: SIZES.small,
    backgroundColor: bgColor,
    paddingHorizontal: SIZES.medium,
    borderRadius: SIZES.small,
    flexDirection: "row",
    gap: 2,
    justifyContent: "center",
  }),
});

export default styles;
