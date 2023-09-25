import Fonts from '@/assets/fonts';
import Images from '@/assets/images';
import { debugLog, infoLog } from '@/config/logsConfig';
import { stringifyValue } from '@/helpers/functions';
import { SplashScreen, useFonts, useAssets, useEffect, FC } from '@/imports';
import { Splash } from '@/screens';
SplashScreen.preventAutoHideAsync();
const CachingProvider: FC<any> = (props: any) => {
  const [fontsLoaded, fontsError] = useFonts(Fonts);
  const [assets, assetsError] = useAssets(Object.values(Images));
  const initialLoad = async () => {
    if (fontsLoaded && assets) {
      SplashScreen.hideAsync();
    }
  };
  useEffect(() => {
    initialLoad();
  }, [fontsLoaded, assets]);
  if (fontsLoaded && assets) {
    infoLog('SplashScreenHiddenFromCachingProvider');
    return props.children;
  }
  if (fontsError) {
    throw new Error(stringifyValue(fontsError));
  }
  if (assetsError) {
    throw new Error(stringifyValue(assetsError));
  }

  debugLog('caachingProvider', fontsLoaded, assets);
  return <Splash />;
};

export default CachingProvider;
