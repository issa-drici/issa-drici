import { CircularProgress, Heading, HStack } from "@chakra-ui/react";
import React from "react";

const LoadingTable = () => {
  return (
    <HStack pb={10}>
      <CircularProgress
        isIndeterminate
        size="25px"
        color="brand.bleuElectrique"
      />
      <Heading size="md">Chargement</Heading>
    </HStack>
  );
};

export default LoadingTable;
