import { StyleSheet } from "react-native";
import { SIZES } from "../../../assets/constants";

const styles = StyleSheet.create({
  container: {
    margin: SIZES.small,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: SIZES.small,
    width: "100%",
  },
});

export default styles;
