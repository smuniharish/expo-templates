import { debugLog } from '@/config/logsConfig';
import { translations } from '@/i18n';
import { I18n, useEffect, useLocales } from '@/imports';
import { useAppDispatch, useAppSelector } from '@/store';
import { updateLanguageByCode } from '@/store/slices/localizationSlice';
export const i18n = new I18n(translations);
const I18nProvider = (props: any) => {
  const userLocales = useLocales();
  debugLog('userLocales', JSON.stringify(userLocales));
  const locale = useAppSelector((state: any) => state.localization.locale);
  const dispatch = useAppDispatch();
  debugLog('locale', locale);
  // Set the locale once at the begining of your app.
  i18n.locale = locale;

  // When a value is missing from a language it'll fallback to another language with the key present.
  i18n.enableFallback = true;
  useEffect(() => {
    if (userLocales) {
      dispatch(updateLanguageByCode({ locale: userLocales[0].languageCode }));
    }
  }, []);
  return props.children;
};

export default I18nProvider;
