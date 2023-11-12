import { StyleSheet } from "react-native";

import { SIZES, SHADOWS, COLORS } from "../../../assets/constants";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: SIZES.xLarge,
    paddingVertical: SIZES.small,
    backgroundColor: COLORS.light,
    borderRadius: SIZES.medium,
    ...SHADOWS.medium,
    shadowColor: COLORS.light,
  },
});

export default styles;
