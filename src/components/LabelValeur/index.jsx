import { Stack, Text } from "@chakra-ui/react";
import React from "react";
import PropTypes from "prop-types";

const LabelValeur = (props) => {
  const {
    label,
    children,
    fontSizeLabel,
    fontSizeValue,
    colorLabel,
    colorValue,
    horizontal,
    ...rest
  } = props;

  return (
    <Stack
      spacing={horizontal ? 2 : 0}
      direction={horizontal ? "row" : "column"}
      align={horizontal ? "center" : null}
      {...rest}
    >
      <Text fontSize={fontSizeLabel ?? 11} color={colorLabel ?? "gray.500"}>
        {label}
      </Text>
      <Text
        fontSize={fontSizeValue ?? 14}
        color={colorValue ?? "gray.700"}
        fontWeight="600"
      >
        {children}
      </Text>
    </Stack>
  );
};

LabelValeur.propTypes = {
  horizontal: PropTypes.bool,
};

LabelValeur.defaultProps = {
  horizontal: false,
};

export default LabelValeur;
