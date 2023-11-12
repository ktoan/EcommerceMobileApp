import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../assets/constants";

const styles = StyleSheet.create({
  appBarWrapper: {
    marginHorizontal: 22,
    marginTop: SIZES.small,
  },
  appBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  greetingText: {
    fontSize: SIZES.large,
    fontFamily: "semibold",
    color: COLORS.gray,
  },
});

export default styles;
