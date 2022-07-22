import React from "react";
import { useField } from "@formiz/core";
import { Stack } from "@chakra-ui/react";
import Select from "react-select";

export const FieldSelect = (props) => {
  const { id } = useField(props);
  const { label, mb, ...rest } = props;

  return (
    <Stack mb={mb} spacing={0}>
      <label htmlFor={id}>{label}</label>
      <Select
        {...rest}
        className="basic-multi-select"
        classNamePrefix="select"
      />
    </Stack>
  );
};
