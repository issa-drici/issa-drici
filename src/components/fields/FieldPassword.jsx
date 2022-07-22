import React, { useState } from "react";
import { useField } from "@formiz/core";
import {
  Stack,
  Input,
  Text,
  InputGroup,
  InputRightElement,
  Button,
  Icon,
} from "@chakra-ui/react";
import {
  AiFillEyeInvisible as HideIcon,
  AiFillEye as ShowIcon,
} from "react-icons/ai";

export const FieldPassword = (props) => {
  const { errorMessage, id, isValid, isSubmitted, setValue, value } =
    useField(props);
  const { label, required } = props;
  const [isTouched, setIsTouched] = React.useState(false);
  const showError = !isValid && (isTouched || isSubmitted);

  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <Stack mb={30}>
      <label htmlFor={id}>
        {label}
        {!!required && " *"}
      </label>
      <InputGroup>
        <Input
          id={id}
          type={show ? "text" : "password"}
          value={value ?? ""}
          onChange={(e) => setValue(e.target.value)}
          onBlur={() => setIsTouched(true)}
          aria-invalid={showError}
          aria-required={!!required}
          aria-describedby={showError ? `${id}-error` : null}
        />
        <InputRightElement width="4.5rem">
          <Button h="1.75rem" size="sm" onClick={handleClick}>
            {show ? <Icon as={ShowIcon} /> : <Icon as={HideIcon} />}
          </Button>
        </InputRightElement>
      </InputGroup>
      {showError && (
        <Text color="red" fontWeight="500" fontSize="13px" id={`${id}-error`}>
          {errorMessage}
        </Text>
      )}
    </Stack>
  );
};
