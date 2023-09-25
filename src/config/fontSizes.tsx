import { fontPercent } from '@/helpers/functions/responsive';
export interface fontSizesInterface {
  XS: number;
  SM: number;
  BASE: number;
  MD: number;
  LG: number;
  XL: number;
  XL2: number;
  XL3: number;
  XL4: number;
  XL5: number;
  XL6: number;
  XL7: number;
  XL8: number;
  XL9: number;
  XL10: number;
  XL11: number;
}
const fontSizes: fontSizesInterface = {
  XS: fontPercent(1),
  SM: fontPercent(1.5),
  BASE: fontPercent(2),
  MD: fontPercent(2.5),
  LG: fontPercent(3),
  XL: fontPercent(4),
  XL2: fontPercent(5),
  XL3: fontPercent(7),
  XL4: fontPercent(9),
  XL5: fontPercent(10),
  XL6: fontPercent(15),
  XL7: fontPercent(20),
  XL8: fontPercent(25),
  XL9: fontPercent(30),
  XL10: fontPercent(35),
  XL11: fontPercent(40),
};
export default fontSizes;
