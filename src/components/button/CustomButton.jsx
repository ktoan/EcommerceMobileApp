import { TouchableOpacity } from "react-native";
import { COLORS, OPACITY } from "../../../assets/constants";
import CustomText from "../text/CustomText";
import styles from "./custonbutton.style";
import { Entypo } from "@expo/vector-icons";

const CustomButton = ({
  onPress = () => {},
  iconName = "",
  text = "Button",
  bgColor = COLORS.primary,
  color = COLORS.lightWhite,
  buttonStyling = {},
  textStyling = {},
  bold = false,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={OPACITY}
      style={[styles.buttonContainer(bgColor), buttonStyling]}
    >
      <Entypo name={iconName} size={24} color={color} />
      <CustomText
        onPress={onPress}
        bold={bold}
        styling={[{ textAlign: "center" }, textStyling]}
        color={color}
        text={text}
      />
    </TouchableOpacity>
  );
};

export default CustomButton;
