import { Box, Stack } from "@chakra-ui/react";
import Breadcrumb from "components/breadcrumb/Breadcrumb";
import React from "react";

export const LayoutDefault = ({ children }) => {
  return (
    <Stack
      padding={3}
      minHeight="100vh"
      maxWidth="100vw"
      backgroundImage={{
        base: "url(./media/backgroundMobile.svg)",
        md: "url(./media/backgroundFull.svg)",
      }}
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
    >
      <Box mt={5} ml={5} mb={2}>
        <Breadcrumb />
      </Box>
      {children}
    </Stack>
  );
};
