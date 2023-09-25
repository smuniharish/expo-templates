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
import BottomSheet, { BottomSheetFlatList, BottomSheetBackdrop } from '@gorhom/bottom-sheet';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NetInfo from '@react-native-community/netinfo';
import { createBottomTabNavigator, BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { NavigationContainer, useFocusEffect, useIsFocused } from '@react-navigation/native';
import { createStackNavigator, StackNavigationProp, StackNavigationOptions } from '@react-navigation/stack';
import { PayloadAction, createSlice, configureStore } from '@reduxjs/toolkit';
import { FlashList } from '@shopify/flash-list';
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { useAssets } from 'expo-asset';
import Checkbox from 'expo-checkbox';
import Constants from 'expo-constants';
import * as Device from 'expo-device';
import * as DocumentPicker from 'expo-document-picker';
import * as FileSystem from 'expo-file-system';
import { useFonts } from 'expo-font';
import { Image, ImageContentFit } from 'expo-image';
import * as ImagePicker from 'expo-image-picker';
import * as Linking from 'expo-linking';
import { useLocales } from 'expo-localization';
import * as Localization from 'expo-localization';
import * as Notifications from 'expo-notifications';
import * as Print from 'expo-print';
import * as ScreenOrientation from 'expo-screen-orientation';
import * as SecureStore from 'expo-secure-store';
import * as Sharing from 'expo-sharing';
import * as SplashScreen from 'expo-splash-screen';
import { I18n } from 'i18n-js';
import LottieView from 'lottie-react-native';
import { useState, Fragment, useEffect, useContext, createContext, useCallback, useMemo, useRef, FC } from 'react';
import {
  View,
  Text,
  Platform,
  Button,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  useColorScheme,
  Alert,
  ActivityIndicator,
  Modal,
  TextInput,
  TouchableWithoutFeedback,
  FlatList,
  KeyboardAvoidingView,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { fileAsyncTransport, logger } from 'react-native-logs';
import { consoleTransport } from 'react-native-logs/dist/transports/consoleTransport';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { heightPercentageToDP as hp, heightPercentageToDP as wp } from 'react-native-responsive-screen';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { enableScreens } from 'react-native-screens';
import { WebView } from 'react-native-webview';
import { useDispatch, useSelector, Provider, TypedUseSelectorHook } from 'react-redux';
import { persistReducer, persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { TextField, FilledTextField, OutlinedTextField } from 'rn-material-ui-textfield';
import { createSecureStore } from 'smh-expo-persist-secure-store';
import { useDefaultReducer } from 'smh-react-typescript-hooks';
import { OTPTextView, OTPTextViewType } from 'smh-rn-otp-textinput';
import { useValidateCheckBox, useValidateSelect, useValidateForm } from 'smh-rn-typescript-hooks';
import { ToWords } from 'to-words';
import XLSX from 'xlsx';

export { SafeAreaProvider, useSafeAreaInsets };
export { XLSX };
export { Sharing };
export { Print };
export { ToWords };
const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();
export { Image, ImageContentFit };
export { Linking };
export { axios, AxiosInstance, AxiosRequestConfig };
export { FlashList };
export { useState, Fragment, useEffect, useContext, createContext, useCallback, useMemo, useRef, FC };
export { NetInfo };
export { WebView };
export { DateTimePickerModal };
export {
  View,
  KeyboardAvoidingView,
  Text,
  Platform,
  Button,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  useColorScheme,
  Alert,
  ActivityIndicator,
  Modal,
  TextInput as TI,
  TouchableWithoutFeedback,
  FlatList,
};
export { Checkbox };
export { useValidateCheckBox, useValidateSelect, useValidateForm };
export { DropDownPicker };
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
export { DocumentPicker };
export { ImagePicker };
export { OTPTextView, OTPTextViewType };
export { fileAsyncTransport, logger, consoleTransport };
export { FileSystem };
export { hp, wp };
export { SecureStore };
export { useAssets };
export { useFonts };
export { createSecureStore };
export { SplashScreen };
export { NavigationContainer, useFocusEffect, useIsFocused };
export { Stack, Tabs };
export { StackNavigationProp, BottomTabNavigationOptions, StackNavigationOptions };
export { useDispatch, useSelector, Provider, TypedUseSelectorHook };
export { I18n };
export { useLocales, Localization };
export { Notifications };
export { Device };
export { Constants };
export { LottieView };
export { PayloadAction, createSlice, configureStore };
export { persistReducer, persistStore };
export { AsyncStorage };
export { PersistGate };
export { GestureHandlerRootView };
export { BottomSheet, BottomSheetFlatList, BottomSheetBackdrop };
export { ScreenOrientation };
export { enableScreens };
export { useDefaultReducer };
