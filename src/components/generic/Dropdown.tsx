import { DropDownPicker, Fragment, useEffect, Text, useValidateSelect } from '@/imports';

const Dropdown = () => {
  const {
    open: selectOpen,
    itemsList: selectItems,
    value: selectValue,
    isDisabled: selectIsDisabled,
    setItems: selectSetItems,
    setValue: selectSetValue,
    setOpen: selectSetOpen,
    onChangeValueCallBack: selectOnChangeValueCallBack,
    onSelectItemCallBack: selectOnSelectItemCallBack,
    onPressCallBack: selectOnPressCallBack,
    onOpenCallBack: selectOnOpenCallBack,
    onCloseCallBack: selectOnCloseCallBack,
    min: selectMin,
    max: selectMax,
    multiple: selectMultiple,
    selectedItems: selectSelectedItems,
    selectedValues: selectSelectedValues,
    isValid: selectIsValid,
    hasError: selectHasError,
    customError: selectCustomError,
  } = useValidateSelect({
    itemsList: [
      { label: 'Apple', value: 'apple' },
      { label: 'Banana', value: 'banana' },
      { label: 'Mango', value: 'mango' },
      { label: 'Lemon', value: 'lemon' },
    ],
    isRequired: true,
    // defaultValue:"banana",
    defaultValue: ['banana', 'apple'],
    multiple: true,
  });
  useEffect(() => {
    selectSetItems([
      { label: 'Apple', value: 'apple' },
      { label: 'Banana', value: 'banana' },
    ]);
  }, []);
  return (
    <Fragment>
      <DropDownPicker
        open={selectOpen}
        mode="BADGE"
        // style={styles.pickerStyle}
        // textStyle={styles.pickerItem}
        // containerStyle={styles.pickerItem}
        // labelStyle={styles.pickerItem}
        // placeholder={label}
        // listMode="MODAL"
        closeAfterSelecting
        value={selectValue}
        items={selectItems}
        setOpen={selectSetOpen}
        setValue={selectSetValue}
        // setItems={setItems}
        autoScroll
        itemSeparator
        onChangeValue={selectOnChangeValueCallBack}
        onSelectItem={selectOnSelectItemCallBack}
        disabled={selectIsDisabled}
        onPress={selectOnPressCallBack}
        onOpen={selectOnOpenCallBack}
        onClose={selectOnCloseCallBack}
        min={selectMin}
        max={selectMax}
        multiple={selectMultiple}
        searchable
      />
      <Text style={{ color: 'red', fontSize: 20 }}>
        {selectIsValid.toString()} - {selectHasError.toString()} - {selectCustomError}
      </Text>
    </Fragment>
  );
};

export default Dropdown;
