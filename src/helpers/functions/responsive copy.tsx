import { Dimensions, hp, wp } from '@/imports';
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
const heightPercent = (percent: any) => {
  return hp(percent);
};
const widthPercent = (percent: any) => {
  return wp(percent);
};
const fontPercent = (percent: any) => {
  return hp(percent);
};
export { SCREEN_HEIGHT, SCREEN_WIDTH, heightPercent, widthPercent, fontPercent };
