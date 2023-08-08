import { configureStore} from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import AsyncStorage from "redux-persist/lib/storage";
import { persistReducer as PR, localizationReducer } from "./slices";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { createSecureStore } from "@/package";


// Secure storage
const secureStorage = createSecureStore();
const securePersistConfig = {
  key: "secure",
  version:1,
  storage: secureStorage,
//   blacklist: ['somethingTemporary']
};

// Non-secure (AsyncStorage) storage
const mainPersistConfig = {
  key: "main",
  version:1,
  storage: AsyncStorage,
  blacklist: ['localization']
};

const store = configureStore({reducer:{
    auth: persistReducer(securePersistConfig, PR),
    localization: persistReducer(mainPersistConfig, localizationReducer),
}})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch:()=>AppDispatch = useDispatch
export const useAppSelector:TypedUseSelectorHook<RootState>=useSelector
export const persistor = persistStore(store)
export default store;