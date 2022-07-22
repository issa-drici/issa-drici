import { Button } from "@chakra-ui/react";
import React from "react";
import { IoMdAddCircle } from "react-icons/io";

const ButtonAdd = (props) => {
  const { children, onClick, ...rest } = props;
  return (
    <Button
      leftIcon={<IoMdAddCircle />}
      backgroundColor="brand.bleuElectrique"
      color={"white"}
      variant="solid"
      _hover={{
        shadow: "bleuElectrique",
      }}
      onClick={onClick}
      {...rest}
    >
      {children}
    </Button>
  );
};

export default ButtonAdd;
