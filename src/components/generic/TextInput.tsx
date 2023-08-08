import { Fragment, OutlinedTextField, useValidateForm } from "@/imports";

const TextInput = () => {
  const {
    label: textLabel,
    value: textValue,
    required: textIsRequired,
    keyboardType: textKeyboardType,
    defaultValue: textDefaultValue,
    isValid: textIsValid,
    hasError: textHasError,
    customError: textCustomError,
    inputIsDisabled: textIsDisabled,
    inputIsEditable: textIsEditable,
    min: textMin,
    max: textMax,
    valueChangeHandler: textValueChangeHandler,
    valueFocusHandler: textFocusHandler,
    valueBlurHandler: textBlurHandler,
    reset: textResetHandler,
  } = useValidateForm({
    type: "string",
    label: "TextLabel",
    isRequired: true,
    //   minValue?: number;
    //   maxValue?: number;
    minLength: 10,
    maxLength: 15,
    // defaultValue: "123",
    isDisabled: false,
    isEditable: true,
    //   validationPattern:/^([a-z0-9]{5,})$/,
    //   minValueError?: string;
    //   maxValueError?: string;
    minLengthError: "MinLengthError",
    maxLengthError: "MaxLengthErrorSudhakar",
    //   focusError?: string;
    validError: "ValidError",
    //   valueChangeCallback?:any;
  });
  const {
    label: numberLabel,
    value: numberValue,
    required: numberIsRequired,
    keyboardType: numberKeyboardType,
    defaultValue: numberDefaultValue,
    isValid: numberIsValid,
    hasError: numberHasError,
    customError: numberCustomError,
    inputIsDisabled: numberIsDisabled,
    inputIsEditable: numberIsEditable,
    min: numberMin,
    max: numberMax,
    valueChangeHandler: numberValueChangeHandler,
    valueFocusHandler: numberFocusHandler,
    valueBlurHandler: numberBlurHandler,
    reset: numberResetHandler,
  } = useValidateForm({
    type: "number",
    label: "Number",
    isRequired: true,
    minValue: 10,
    maxValue: 15,
    //   minLength:10,
    //   maxLength:15,
    // defaultValue: 8,
    isDisabled: false,
    isEditable: true,
    //   validationPattern:/^([a-z0-9]{5,})$/,
    minValueError: "MinValueError",
    maxValueError: "MaxValueError",
    //   minLengthError: "MinLengthError",
    //   maxLengthError:"MaxLengthError",
    //   focusError?: string;
    validError: "ValidError",
    //   valueChangeCallback?:any;
  });
  return (
    <Fragment>
      <OutlinedTextField
        label={textLabel}
        value={textValue}
        keyboardType={textKeyboardType}
        onChangeText={textValueChangeHandler}
        onFocus={textFocusHandler}
        onBlur={textBlurHandler}
        disabled={textIsDisabled}
        editable={textIsEditable}
        min={textMin}
        max={textMax}
        defaultValue={textDefaultValue}
        error={textCustomError}
      />
      <OutlinedTextField
        label={numberLabel}
        value={numberValue}
        keyboardType={numberKeyboardType}
        onChangeText={numberValueChangeHandler}
        onFocus={numberFocusHandler}
        onBlur={numberBlurHandler}
        disabled={numberIsDisabled}
        editable={numberIsEditable}
        min={numberMin}
        max={numberMax}
        defaultValue={numberDefaultValue}
        error={numberCustomError}
      />
    </Fragment>
  );
};

export default TextInput;
