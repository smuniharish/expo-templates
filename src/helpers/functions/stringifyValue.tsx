const stringifyValue = (value: string | object | any) => {
  if (typeof value === 'object') {
    return JSON.stringify(value);
  } else {
    return value;
  }
};
export default stringifyValue;
