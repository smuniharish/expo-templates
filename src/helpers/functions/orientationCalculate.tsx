enum orientationTypes {
  PORTRAIT = 'PORTRAIT',
  LANDSCAPE = 'LANDSCAPE',
}
const orientationCalculate = (orientation: string, portraitValue: any, landscapeValue: any) => {
  return orientation === orientationTypes.PORTRAIT ? portraitValue : landscapeValue;
};
export default orientationCalculate;
