import { ScreenOrientation, useEffect, useState } from '@/imports';

enum orientationTypes {
  PORTRAIT = 'PORTRAIT',
  LANDSCAPE = 'LANDSCAPE',
}
const useOrientation = () => {
  const [orientation, setOrientation] = useState(orientationTypes.PORTRAIT);
  const updateOrientation = async () => {
    const currentOrientation = await ScreenOrientation.getOrientationAsync();

    if (
      currentOrientation === ScreenOrientation.Orientation.PORTRAIT_UP ||
      currentOrientation === ScreenOrientation.Orientation.PORTRAIT_DOWN
    ) {
      setOrientation(orientationTypes.PORTRAIT);
    } else {
      setOrientation(orientationTypes.LANDSCAPE);
    }
  };
  useEffect(() => {
    updateOrientation();
    const subscription = ScreenOrientation.addOrientationChangeListener(updateOrientation);

    return () => {
      subscription.remove();
    };
  }, []);
  return { orientation, orientationTypes };
};

export default useOrientation;
