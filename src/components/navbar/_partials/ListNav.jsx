import { Stack, Text } from "@chakra-ui/react";
import React from "react";
import NavItem from "./NavItem";

const ListNav = (props) => {
  const { catNav } = props;

  const links = catNav?.links ?? [];

  return (
    <Stack p={5}>
      <Text fontWeight={700} fontSize={12} color="gray.500">
        {catNav?.title}
      </Text>
      {links.map((item) => {
        return <NavItem key={item?.label} navItem={item} />;
      })}
    </Stack>
  );
};

export default ListNav;
