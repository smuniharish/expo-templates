import {
  AntDesign,
  Entypo,
  EvilIcons,
  Feather,
  FontAwesome,
  FontAwesome5,
  Fontisto,
  Foundation,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
  SimpleLineIcons,
  Zocial,
} from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { PayloadAction, createSlice, configureStore } from '@reduxjs/toolkit';
import { FlashList } from '@shopify/flash-list';
import axios from 'axios';
import { useAssets } from 'expo-asset';
import Checkbox from 'expo-checkbox';
import Constants from 'expo-constants';
import * as Device from 'expo-device';
import * as FileSystem from 'expo-file-system';
import { useFonts } from 'expo-font';
import { useLocales } from 'expo-localization';
import * as Localization from 'expo-localization';
import * as Notifications from 'expo-notifications';
import { SplashScreen } from 'expo-router';
import * as SecureStore from 'expo-secure-store';
import { I18n } from 'i18n-js';
import LottieView from 'lottie-react-native';
import { useState, Fragment, useEffect, useContext, createContext } from 'react';
import { View, Text, Platform, Button, StyleSheet, Dimensions, useColorScheme } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { fileAsyncTransport, logger } from 'react-native-logs';
import { consoleTransport } from 'react-native-logs/dist/transports/consoleTransport';
import { heightPercentageToDP as hp, heightPercentageToDP as wp } from 'react-native-responsive-screen';
import { useDispatch, useSelector, Provider, TypedUseSelectorHook } from 'react-redux';
import { persistReducer, persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { TextField, FilledTextField, OutlinedTextField } from 'rn-material-ui-textfield';
import { createSecureStore } from 'smh-expo-persist-secure-store';
import { OTPTextView } from 'smh-rn-otp-textinput';
import { useValidateCheckBox, useValidateSelect, useValidateForm } from 'smh-rn-typescript-hooks';
export { axios };
export { FlashList };
export { useState, Fragment, useEffect, useContext, createContext };
export { View, Text, Platform, Button, StyleSheet, Dimensions, useColorScheme };
export { Checkbox };
export { useValidateCheckBox, useValidateSelect, useValidateForm };
export { DropDownPicker };
export { GestureHandlerRootView };
export { TextField, FilledTextField, OutlinedTextField };
export {
  AntDesign,
  Entypo,
  EvilIcons,
  Feather,
  FontAwesome,
  FontAwesome5,
  Fontisto,
  Foundation,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
  SimpleLineIcons,
  Zocial,
};
export { fileAsyncTransport, logger, consoleTransport };
export { FileSystem };
export { persistReducer, persistStore };
export { PersistGate };
export { hp, wp };
export { SecureStore };
export { useAssets };
export { useFonts };
export { SplashScreen };
export { useDispatch, useSelector, Provider, TypedUseSelectorHook };
export { I18n };
export { createSecureStore };
export { AsyncStorage };
export { OTPTextView };
export { useLocales, Localization };
export { Notifications };
export { Device };
export { Constants };
export { LottieView };
export { PayloadAction, createSlice, configureStore };
