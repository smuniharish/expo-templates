import CachingProvider from './CachingProvider';
import GestureProvider from './GestureProvider';
import I18nProvider from './I18nProvider';
import NotificationProvider from './NotificationProvider';
import PersistGateProvider from './PersistGateProvider';
import { AuthContextProvider, ThemeContextProvider } from './context';

import { Provider } from '@/imports';
import store from '@/store';
const index = (props: any) => {
  return (
    <PersistGateProvider>
      <GestureProvider>
        <ThemeContextProvider>
          <Provider store={store}>
            <AuthContextProvider>
              <I18nProvider>
                <NotificationProvider>
                  <CachingProvider>{props.children}</CachingProvider>
                </NotificationProvider>
              </I18nProvider>
            </AuthContextProvider>
          </Provider>
        </ThemeContextProvider>
      </GestureProvider>
    </PersistGateProvider>
  );
};
export default index;
