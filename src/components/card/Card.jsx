import { Stack, Text } from "@chakra-ui/react";
import React from "react";

const Card = (props) => {
  const { children, onClick, title, colorTitle, ...rest } = props;

  return (
    <Stack
      position="relative"
      bg="white"
      borderRadius="md"
      shadow="lg"
      w="100%"
      overflow="hidden"
      p={title ? 0 : 3}
      justifyContent={title && "space-between"}
      cursor={onClick ? "pointer" : null}
      onClick={onClick}
      {...rest}
    >
      {!title && children}
      {title && (
        <>
          <Stack p={5} pb={1}>
            {children}
          </Stack>
          <Stack backgroundColor={colorTitle ?? "brand.bleuElectrique"} py={1}>
            <Text
              fontWeight={700}
              textAlign="center"
              textTransform="uppercase"
              color="white"
              fontSize={11}
            >
              {title}
            </Text>
          </Stack>
        </>
      )}
    </Stack>
  );
};

export default Card;
