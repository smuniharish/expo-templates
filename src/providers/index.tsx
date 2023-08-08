import store from "@/store";
import CachingProvider from "./CachingProvider";
import I18nProvider from "./I18nProvider";
import NotificationProvider from "./NotificationProvider";
import { AuthContextProvider, ThemeContextProvider } from "./context";
import { Provider } from "@/imports";
const index = (props: any) => {
  return (
    <ThemeContextProvider>
      <CachingProvider>
        <Provider store={store}>
          <AuthContextProvider>
            <I18nProvider>
              <NotificationProvider>
                {props.children}
                </NotificationProvider>
            </I18nProvider>
          </AuthContextProvider>
        </Provider>
      </CachingProvider>
    </ThemeContextProvider>
  );
};
export default index;
