import { StyleSheet } from "react-native";
import { COLORS, SHADOWS, SIZES } from "../../../assets/constants";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginVertical: SIZES.small,
    flexDirection: "row",
    padding: SIZES.medium,
    borderRadius: SIZES.small,
    backgroundColor: "#FFF",
    ...SHADOWS.medium,
    shadowColor: COLORS.lightWhite,
  },
  image: {
    width: "30%",
    height: 150,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.lightWhite,
    borderRadius: SIZES.medium,
    marginRight: SIZES.small,
  },
  inforContainer: { flex: 1 },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: SIZES.small,
  },
  actionBtn: {
    width: SIZES.xLarge,
    height: SIZES.xLarge,
    alignItems: "center",
    justifyContent: "center",
    borderColor: COLORS.gray2,
    borderWidth: 1,
    borderRadius: 5,
  },
});

export default styles;
