import { Box, HStack, Stack } from "@chakra-ui/react";
import Breadcrumb from "components/breadcrumb/Breadcrumb";
import NavbarAdmin from "components/navbar/NavbarAdmin";
import React from "react";

export const LayoutAdmin = ({ children }) => {
  return (
    <HStack minH="100vh" maxWidth="100vw" flex={1}>
      <NavbarAdmin />
      <Stack
        bgColor="brand.grisBackground"
        height="100vh"
        flex={1}
        style={{ marginInlineStart: 0 }}
      >
        <Box mt={5} ml={5} mb={2}>
          <Breadcrumb />
        </Box>
        {children}
      </Stack>
    </HStack>
  );
};
