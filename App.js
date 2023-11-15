import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback, useState } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import BottomTabNavigation from "./src/navigations/BottomTabNavigation";
import Store from "./src/redux/store";
import { Login, Register, Splash } from "./src/screens";
import { BottomPopup } from "./src/components";

const Stack = createNativeStackNavigator();

const App = () => {
  const [isUserLogin, setUserLogin] = useState(true);

  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Bottom Navigation"
    >
      {!isUserLogin ? (
        <>
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
        </>
      ) : (
        <Stack.Screen
          name="Bottom Navigation"
          component={BottomTabNavigation}
        />
      )}
    </Stack.Navigator>
  );
};

export default function RenderedApp() {
  const [fontsLoaded] = useFonts({
    regular: require("./assets/fonts/Poppins-Regular.ttf"),
    light: require("./assets/fonts/Poppins-Light.ttf"),
    bold: require("./assets/fonts/Poppins-Bold.ttf"),
    medium: require("./assets/fonts/Poppins-Medium.ttf"),
    extrabold: require("./assets/fonts/Poppins-ExtraBold.ttf"),
    semibold: require("./assets/fonts/Poppins-SemiBold.ttf"),
  });

  useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={Store.store}>
      <PersistGate loading={null} persistor={Store.persistor}>
        <NavigationContainer>
          <App />
          <BottomPopup />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
