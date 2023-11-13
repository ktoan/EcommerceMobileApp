import { Entypo } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { COLORS, SIZES } from "../../assets/constants";
import CartIcon from "../components/cart-icon/CartIcon";
import {
  CartStack,
  CustomerStack,
  Home,
  ProductStack,
  SearchProduct,
  Shop,
} from "../screens";

const Tabs = createBottomTabNavigator();

const screenOptions = {
  tabBarShowLabel: false,
  tabBarHideOnKeyboard: true,
  headerShown: false,
  tabBarStyle: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    elevator: 0,
    height: SIZES.bottomBarHeight,
  },
};

const BottomTabNavigation = () => {
  return (
    <Tabs.Navigator screenOptions={screenOptions}>
      <Tabs.Screen
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Entypo
                name="home"
                size={30}
                color={focused ? COLORS.primary : COLORS.gray2}
              />
            );
          },
        }}
        name="Home"
        component={Home}
      />
      <Tabs.Screen
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Entypo
                name="magnifying-glass"
                size={30}
                color={focused ? COLORS.primary : COLORS.gray2}
              />
            );
          },
        }}
        name="SearchProduct"
        component={SearchProduct}
      />
      <Tabs.Screen
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Entypo
                name="dropbox"
                size={30}
                color={focused ? COLORS.primary : COLORS.gray2}
              />
            );
          },
        }}
        name="Product"
        component={ProductStack}
      />
      <Tabs.Screen
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Entypo
                name="shop"
                size={30}
                color={focused ? COLORS.primary : COLORS.gray2}
              />
            );
          },
        }}
        name="Shop"
        component={Shop}
      />
      <Tabs.Screen
        options={{
          tabBarIcon: ({ focused }) => {
            return <CartIcon color={focused ? COLORS.primary : COLORS.gray2} />;
          },
        }}
        name="Cart"
        component={CartStack}
      />
      <Tabs.Screen
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Entypo
                name="user"
                size={30}
                color={focused ? COLORS.primary : COLORS.gray2}
              />
            );
          },
        }}
        name="Customer"
        component={CustomerStack}
      />
    </Tabs.Navigator>
  );
};

export default BottomTabNavigation;
