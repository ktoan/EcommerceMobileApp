import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import {
  InformationItems,
  MenuItems,
  UserOrder,
  UserPreInformation,
} from "../../../components";
import { SIZES } from "../../../../assets/constants";

const MainCustomer = () => {
  return (
    <SafeAreaView style={{ marginBottom: SIZES.bottomBarHeight, flex: 1 }}>
      <UserPreInformation />
      <InformationItems />
      <UserOrder />
      <MenuItems />
    </SafeAreaView>
  );
};

export default MainCustomer;
