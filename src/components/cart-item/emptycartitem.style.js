import { StyleSheet } from "react-native";
import { SIZES } from "../../../assets/constants";

const styles = StyleSheet.create({
  container: { flex: 1 },
  wrapper: {
    width: SIZES.width,
    height: SIZES.height - 300,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default styles;
