import { combineReducers } from "redux";
import appSlice from "./slices/appSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import persistReducer from "redux-persist/es/persistReducer";
import { configureStore } from "@reduxjs/toolkit";
import persistStore from "redux-persist/es/persistStore";

const reducer = combineReducers({
  app: appSlice,
});

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: [],
};

const persistRdc = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistRdc,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

const persistor = persistStore(store);

const Store = { store, persistor };

export default Store;
