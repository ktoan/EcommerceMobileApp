import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  txt: (color, top = 0, size, bold) => ({
    fontFamily: bold ? "bold" : "regular",
    fontSize: size,
    marginTop: top,
    color: color,
    marginHorizontal: 12,
  }),
});

export default styles;
