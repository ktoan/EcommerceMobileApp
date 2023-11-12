import { StyleSheet } from "react-native";
import { SIZES } from "../../../assets/constants";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: SIZES.medium,
    marginVertical: SIZES.small,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
});

export default styles;
