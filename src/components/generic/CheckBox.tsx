// import useValidateCheckBox from '@/hooks/useValidateCheckBox';
import { Checkbox, StyleSheet, Text, View, useValidateCheckBox } from '@/imports';

const CheckBox = () => {
  const {
    color: checkboxColor,
    inputIsDisabled: checkBoxIsDisabled,
    onValueChangeHandler: checkBoxChangeHandler,
    value: checkBoxValue,
    isValid: checkBoxIsValid,
    customError: checkBoxCustomError,
    hasError: checkBoxHasError,
    reset: checkBoxReset,
  } = useValidateCheckBox({
    isRequired: true,
    value: false,
    checkedColor: '#4630EB',
  });
  console.log('checkboxValue', checkBoxValue);

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Checkbox
          style={styles.checkbox}
          value={checkBoxValue}
          onValueChange={checkBoxChangeHandler}
          color={checkboxColor}
        />
        <Text style={styles.paragraph}>Custom colored checkbox</Text>
      </View>
    </View>
  );
};
export default CheckBox;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
    marginVertical: 32,
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  paragraph: {
    fontSize: 15,
    color: 'red',
  },
  checkbox: {
    margin: 8,
  },
});
