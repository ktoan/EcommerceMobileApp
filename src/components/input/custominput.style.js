import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../assets/constants";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.light,
    borderRadius: SIZES.small,
    marginBottom: SIZES.medium,
    marginHorizontal: SIZES.small,
  },
  icon: {},
  default: {
    padding: SIZES.small,
    flex: 1,
    height: "100%",
    fontFamily: "regular",
    fontSize: SIZES.medium,
  },
});

export default styles;
