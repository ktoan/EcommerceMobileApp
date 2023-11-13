import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, SIZES } from "../../../../assets/constants";
import {
  BackToolBar,
  CustomButton,
  CustomInput,
  CustomText,
} from "../../../components";
import LocationItem from "../../../components/location-item/LocationItem";

const Information = () => {
  const navigation = useNavigation();
  const [locations, setLocations] = useState([1, 2]);
  const [isEditProfile, setEditProfile] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1, marginBottom: SIZES.bottomBarHeight }}>
      <BackToolBar leftIcon="edit" navigation={navigation} text="Information" />
      <CustomText
        text="View your information, update when it isn't matched with your identifications"
        noLines={2}
        size={SIZES.xLarge - 6}
        color={COLORS.primary}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <CustomInput
          iconName="email"
          styling={{ marginTop: SIZES.medium }}
          placeholder="Email"
          value="nktoanwork@gmail.com"
          editable={isEditProfile}
        />
        <CustomInput
          placeholder="Full Name"
          value="Toan Nguyen Khanh"
          iconName={"v-card"}
          editable={isEditProfile}
        />
        <CustomInput
          placeholder="Phone"
          value="0868319857"
          iconName={"phone"}
          editable={isEditProfile}
        />
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <CustomText
            text="Location"
            size={SIZES.large}
            bold
            color={COLORS.primary}
          />
          <Entypo name="location" size={24} color={COLORS.primary} />
        </View>
        <View
          style={{
            marginTop: SIZES.small,
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          {locations.map((location, index) => (
            <LocationItem key={index} />
          ))}
          {isEditProfile && locations.length < 3 && (
            <View style={{ flexDirection: "row", justifyContent: "center" }}>
              <CustomButton iconName="plus" text="Add Location" />
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Information;
