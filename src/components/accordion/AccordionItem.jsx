import {
  AccordionButton,
  AccordionIcon,
  AccordionItem as AccordionItemChakra,
  AccordionPanel,
  Box,
  Heading,
} from "@chakra-ui/react";
import React from "react";

const AccordionItem = (props) => {
  const { children, label } = props;
  return (
    <AccordionItemChakra border="none" mb={1}>
      <h2>
        <AccordionButton bgColor="white" borderWidth={1.5} borderRadius="md">
          <Box flex="1" textAlign="left">
            <Heading size="sm">{label}</Heading>
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel px={3} pb={4}>
        {children}
      </AccordionPanel>
    </AccordionItemChakra>
  );
};

export default AccordionItem;
