/* eslint-disable react/forbid-prop-types */
import React, { useEffect } from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';
import { useField } from '@formiz/core';
import { Stack, Text } from '@chakra-ui/react';

export const ReactSelect = (props) => {
  const [isTouched, setIsTouched] = React.useState(false);

  const { errorMessage, id, resetKey, isValid, isSubmitted, setValue, value } = useField(props);
  
  useEffect(() => {
    setIsTouched(false);
  }, [resetKey]);

  const handleBlur = () => {
    setIsTouched(true);
  };

  const {
    options,
    placeholder,
    isMulti,
    closeMenuOnSelect,
    label,
    width,
    last,
    required,
    isClearable,
    isDisabled,
    isError,
    isLoading,
    callback,
    defaultValue,
    onInputChange,
    callbackOnChange,
    readOnly,
    horizontal,
    noOptionsMessage,
    ...rest
  } = props;

  const handleChange = (newValue, option) => {
    callbackOnChange(newValue, option);

    setValue(newValue);
  };

  const showError = !isValid && (isTouched || isSubmitted);

  // Permet de faire une action à la selection d'un item option
  useEffect(() => {
    if (callback && value) {
      callback(value);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  // Set default value to value
  useEffect(() => {
    if (defaultValue && !value) {
      setValue(defaultValue);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [defaultValue]);

  useEffect(() => {
    if (defaultValue === '' || defaultValue === null) {
      setValue(defaultValue);
    }
  }, [defaultValue, setValue]);

  const customStyles = {
    control: (base, state) => ({
      ...base,
      borderColor: showError ? "red" : null,
    }),
  };

  return (
    <Stack spacing={0}>
      <label htmlFor={id}>
        {label}
        {!!required && " *"}
      </label>
      {!isError && !isLoading && (
        <Select
          required={required}
          value={value ?? ''}
          isClearable={isClearable}
          onBlur={handleBlur}
          // menuPosition="fixed"
          closeMenuOnSelect={closeMenuOnSelect}
          isMulti={isMulti}
          isDisabled={isDisabled}
          placeholder={options?.[0]?.label ?? placeholder}
          onChange={(newValue, option) => handleChange(newValue, option)}
          options={options}
          onInputChange={onInputChange}
          aria-invalid={showError}
          aria-required={!!required}
          aria-describedby={showError ? `${id}-error` : null}
          loadingMessage='loading'
          styles={customStyles}
          borderColor={showError ? "red" : null}
          noOptionsMessage={noOptionsMessage}
          {...rest}
        />
      )}
      {showError && (
        <Text color="red" fontWeight="500" fontSize="13px" id={`${id}-error`}>
          {errorMessage}
        </Text>
      )}
    </Stack>
  );
};

ReactSelect.propTypes = {
  options: PropTypes.array,
  placeholder: PropTypes.string,
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Object)]),
  isMulti: PropTypes.bool,
  closeMenuOnSelect: PropTypes.bool,
  label: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  last: PropTypes.bool,
  isError: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  required: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  isClearable: PropTypes.bool,
  callback: PropTypes.func,
  onInputChange: PropTypes.func,
  callbackOnChange: PropTypes.func,
  readOnly: PropTypes.bool,
  horizontal: PropTypes.bool,
  noOptionsMessage: PropTypes.func
};

ReactSelect.defaultProps = {
  options: [],
  placeholder: 'Débuter votre recherche',
  defaultValue: null,
  isMulti: false,
  closeMenuOnSelect: true,
  label: null,
  width: '350px',
  last: false,
  isError: false,
  isLoading: false,
  isDisabled: false,
  required: undefined,
  isClearable: false,
  callback: undefined,
  onInputChange: undefined,
  callbackOnChange: () => null,
  readOnly: false,
  horizontal: false,
  noOptionsMessage: () => 'Aucun résultat',
};
