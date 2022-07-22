import React, { useEffect } from "react";
import { useField } from "@formiz/core";
import { Stack, Input, Text } from "@chakra-ui/react";
import dayjs from "dayjs";

export const FieldDatePicker = (props) => {
  const { errorMessage, id, isValid, isSubmitted, setValue, value } =
    useField(props);
  const { label, type, required, mb, defaultValue, ...rest } = props;
  const [isTouched, setIsTouched] = React.useState(false);
  const showError = !isValid && (isTouched || isSubmitted);

  if (defaultValue) {
    var dateFormattedForDefaultValue = dayjs(defaultValue, "DD/MM/YYYY").format(
      "YYYY-MM-DD"
    );
  }
  
  useEffect(() => {
    setValue(dateFormattedForDefaultValue);
  }, [defaultValue]);
  
  return (
    <Stack mb={mb} spacing={0} {...rest}>
      <label htmlFor={id}>
        {label}
        {!!required && " *"}
      </label>
      <Input
        id={id}
        type="date"
        defaultValue={dateFormattedForDefaultValue}
        value={value ?? ""}
        onChange={(e) => setValue(e.target.value)}
        onBlur={() => setIsTouched(true)}
        aria-invalid={showError}
        aria-required={!!required}
        aria-describedby={showError ? `${id}-error` : null}
        borderColor={showError ? "red" : null}
      />
      {showError && (
        <Text color="red" fontWeight="500" fontSize="13px" id={`${id}-error`}>
          {errorMessage}
        </Text>
      )}
    </Stack>
  );
};
