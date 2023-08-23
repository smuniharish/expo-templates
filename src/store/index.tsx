import { persistReducer as PR, localizationReducer } from './slices';

import {
  AsyncStorage,
  TypedUseSelectorHook,
  configureStore,
  createSecureStore,
  persistReducer,
  persistStore,
  useDispatch,
  useSelector,
} from '@/imports';

// Secure storage
const secureStorage = createSecureStore();
const securePersistConfig = {
  key: 'secure',
  version: 1,
  storage: secureStorage,
  //   blacklist: ['somethingTemporary']
};

// Non-secure (AsyncStorage) storage
const mainPersistConfig = {
  key: 'main',
  version: 1,
  storage: AsyncStorage,
  blacklist: ['localization'],
};

const store = configureStore({
  reducer: {
    auth: persistReducer(securePersistConfig, PR),
    localization: persistReducer(mainPersistConfig, localizationReducer),
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ immutableCheck: false, serializableCheck: false }),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const persistor = persistStore(store);
export default store;
