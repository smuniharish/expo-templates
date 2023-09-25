import { Platform } from '@/imports';

const platformCalculate = (androidValue: any, iosValue: any) => {
  return Platform.OS === 'android' ? androidValue : iosValue;
};
export default platformCalculate;
