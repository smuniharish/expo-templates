import { ToWords } from '@/imports';

const toWord = new ToWords({
  localeCode: 'en-IN',
  converterOptions: {
    currency: false,
    ignoreDecimal: false,
    ignoreZeroCurrency: false,
  },
});
const toWords = (value: number) => {
  return toWord.convert(value);
};
export default toWords;
