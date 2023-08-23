import Fonts from '@/assets/fonts';
import Images from '@/assets/images';
import { debugLog, infoLog } from '@/config/logsConfig';
import { SplashScreen, useFonts, useAssets, useEffect } from '@/imports';
import { Splash } from '@/screens';
SplashScreen.preventAutoHideAsync();
const CachingProvider = (props: any) => {
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
    throw new Error(JSON.stringify(fontsError));
  }
  if (assetsError) {
    throw new Error(JSON.stringify(assetsError));
  }

  debugLog('caachingProvider', fontsLoaded, assets);
  return <Splash />;
};

export default CachingProvider;
