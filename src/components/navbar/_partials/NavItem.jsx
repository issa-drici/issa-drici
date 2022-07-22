import { Box, HStack, Text } from "@chakra-ui/react";
import React from "react";
import * as FontAwesome from "react-icons/fa";
import { useMatch, useNavigate } from "react-router-dom";

const NavItem = (props) => {
  const { navItem } = props;
  const isActive = !!useMatch(navItem?.url);
  const navigate = useNavigate();

  return (
    <HStack
      cursor="pointer"
      backgroundColor={isActive ? "brand.bleuElectrique" : null}
      color={isActive ? "white" : null}
      shadow={isActive ? "bleuElectrique" : null}
      px={5}
      py={2}
      borderRadius={5}
      role="group"
      onClick={() => navigate(navItem?.url)}
    >
      <Box
        _groupHover={{ transform: "translateX(5px)" }}
        transition=".2s ease-out"
      >
        {React.createElement(FontAwesome[navItem?.icon])}
      </Box>
      <Text
        fontWeight={500}
        color={isActive ? "white" : null}
        _groupHover={{ transform: "translateX(5px)" }}
        transition=".1s ease-out"
      >
        {navItem?.label}
      </Text>
    </HStack>
  );
};

export default NavItem;
