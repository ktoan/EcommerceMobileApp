import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../assets/constants";

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: SIZES.small,
    backgroundColor: COLORS.light,
    borderRadius: SIZES.medium,
    marginVertical: SIZES.medium,
    height: 50,
  },
  searchIcon: { marginHorizontal: SIZES.small, color: COLORS.gray },
  searchInput: {
    flex: 1,
    height: "100%",
    textAlignVertical: "center",
    fontSize: SIZES.medium,
    textAlignVertical: "center",
    paddingRight: SIZES.small,
    textDecorationStyle: "solid",
  },
});

export default styles;
