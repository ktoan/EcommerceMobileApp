import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../assets/constants";

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: SIZES.small,
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.medium,
    marginVertical: SIZES.medium,
    height: 50,
  },
  searchIcon: {
    marginHorizontal: SIZES.small,
    color: COLORS.gray,
  },
  searchWrapper: {
    flex: 1,
    marginRight: SIZES.small,
    borderRadius: SIZES.small,
  },
  searchInput: {
    height: "100%",
    textAlignVertical: "center",
    fontSize: SIZES.medium,
    textAlignVertical: "center",
    paddingRight: SIZES.small,
    textDecorationStyle: "solid",
  },
  searchBtn: {
    width: 50,
    height: "100%",
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.primary,
  },
});

export default styles;
