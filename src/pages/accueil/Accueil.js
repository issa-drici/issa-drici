import { Box, HStack, IconButton, Stack, Text } from "@chakra-ui/react";
import React from "react";

const Accueil = () => {
  return (
    <Stack>
      <HStack w="100%" p={5}>
        <Box flex={1}>
          <Text>Issa</Text>
        </Box>
        <HStack flex={5} justifyContent="center" spacing={10}>
          <Text cursor="pointer">SERVICES</Text>
          <Text cursor="pointer">WORK</Text>
          <Text cursor="pointer">NOTES</Text>
          <Text cursor="pointer">EXPERIENCE</Text>
        </HStack>
        <HStack flex={1}>
          <Text>+33647173271</Text>
          <IconButton />
        </HStack>
      </HStack>
      <Text>
        Hey,
        <br /> c'est Issa
      </Text>
    </Stack>
  );
};

export default Accueil;
