import { Stack } from "@chakra-ui/react";
import React from "react";
import { useMenuAdmin } from "./useMenuAdmin";
import ListNav from "./_partials/ListNav";

const NavbarAdmin = () => {
  const { NavAdmin } = useMenuAdmin();

  return (
    <Stack
      maxWidth="15%"
      minHeight="100vh"
      flex={1}
      bgColor="brand.800"
      borderRightWidth="1px"
      borderRightStyle="solid"
      borderRightColor="brand.300"
    >
      {NavAdmin?.map((item) => {
        return <ListNav key={item?.title} catNav={item} />;
      })}
    </Stack>
  );
};

export default NavbarAdmin;
