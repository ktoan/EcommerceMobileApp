import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  txt: (color, top = 0, size, bold, marginHorizontal) => ({
    fontFamily: bold ? "bold" : "regular",
    fontSize: size,
    marginTop: top,
    color: color,
    marginHorizontal: marginHorizontal,
  }),
});

export default styles;
