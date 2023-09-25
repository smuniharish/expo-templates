const checkZeros = (value: number) => {
  return value.toString().length === 1 ? `0${value.toString()}` : value;
};
const stringToDateString = (value: string) => {
  const date = new Date(value);
  return `${checkZeros(date.getDay())}-${checkZeros(date.getMonth() + 1)}-${date.getFullYear()}`;
};
export default stringToDateString;
