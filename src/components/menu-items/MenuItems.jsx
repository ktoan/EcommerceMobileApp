import React from "react";
import { ScrollView } from "react-native";
import { COLORS } from "../../../assets/constants";
import Divider from "../divider/Divider";
import MenuItem from "./MenuItem";
import styles from "./menuitems.style";
import { useNavigation } from "@react-navigation/native";

const MenuItems = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <MenuItem
        onPress={() => navigation.navigate("Information")}
        iconName="pencil"
        text="Information"
      />
      <MenuItem iconName="shopping-bag" text="Orders" />
      <MenuItem iconName="heart-outlined" text="Favourite" />
      <MenuItem iconName="shop" text="Following Store" />
      <Divider />
      <MenuItem iconName="ticket" text="My Coupons" />
      <MenuItem iconName="wallet" text="My Wallet" />
      <MenuItem iconName="star-outlined" text="My reviews" />
      <Divider />
      <MenuItem iconName="cog" text="Account Settings" />
      <MenuItem iconName="chat" text="Chat with us" />
      <Divider />
      <MenuItem
        iconName="log-out"
        text="Log out"
        color={COLORS.red}
        isChevron={false}
      />
    </ScrollView>
  );
};

export default MenuItems;
