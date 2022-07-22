import { Box, Stack, Text } from "@chakra-ui/react";
import React from "react";

const DotStepper = (props) => {
  const { form, length, element } = props;

  let bgColor = null;
  let color = null;
  let border = null;
  let cursor = null;

  if (element.isVisited) {
    bgColor = "white";
    color = "brand.bleuElectrique";
    border = "2px solid";

    cursor = "pointer";
  }

  if (element.isSubmitted) {
    bgColor = "white";
    color = "brand.bleuElectrique";
    border = "2px solid";
  }
  if (element.isCurrent) {
    bgColor = "brand.bleuElectrique";
    color = "white";
  }

  return (
    <Stack alignItems="center" justifyContent="center">
      <Box
        position="relative"
        rounded="full"
        width={5}
        height={5}
        display="flex"
        justifyContent="center"
        alignItems="center"
        bgColor={bgColor}
        cursor={cursor}
        border={border}
        outlineOffset="20px"
        borderColor="brand.bleuElectrique"
        onClick={() => {
          if (element.isVisited) {
            form.goToStep(element.name);
          }
        }}
        _before={
          element.isSubmitted &&
          element.index + 1 !== length && {
            content: '""',
            display: "block",
            position: "absolute",
            mt: "-1px",
            mr: "2px",
            top: "50%",
            left: "100%",
            bg:
              element.isVisited || element.isCurrent
                ? "brand.bleuElectrique"
                : null,
            h: "2px",
            w: "100%",
          }
        }
        _after={
          element.index !== 0
            ? {
                content: '""',
                display: "block",
                position: "absolute",
                mt: "-1px",
                mr: "2px",
                top: "50%",
                right: "100%",
                bg:
                  element.isVisited || element.isCurrent
                    ? "brand.bleuElectrique"
                    : null,
                h: "2px",
                w: "100%",
              }
            : null
        }
      >
        <Text
          textAlign="center"
          fontSize={13}
          color={color}
          fontWeight={element.isCurrent || element.isVisited ? "bold" : null}
        >
          {element.index + 1}
        </Text>
      </Box>
      <Text
        fontSize={9}
        color={
          element.isSubmitted || element.isCurrent
            ? "brand.bleuElectrique"
            : null
        }
        fontWeight={element.isCurrent ? "bold" : null}
      >
        {element.name}
      </Text>
    </Stack>
  );
};

export default DotStepper;
