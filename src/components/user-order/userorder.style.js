import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../assets/constants";

const styles = StyleSheet.create({
  container: {
    width: SIZES.width,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderTopColor: COLORS.gray2,
    borderBottomColor: COLORS.gray2,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    marginVertical: SIZES.small,
  },
  box: {
    width: "50%",
    paddingVertical: SIZES.medium,
  },
});

export default styles;
