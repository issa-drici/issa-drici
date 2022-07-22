import { Icon, Link } from "@chakra-ui/react";
import React from "react";
import { FiExternalLink } from "react-icons/fi";

const LinkStyled = (props) => {
  const { href, isExternal, children } = props;

  return (
    <Link
      href={href}
      color="blue.400"
      textDecoration="underline"
      isExternal={isExternal}
      _hover={{ color: "blue.600" }}
      onClick={(e) => console.log(e)}
    >
      {children} {isExternal && <Icon as={FiExternalLink} w={3} h={3} />}
    </Link>
  );
};

export default LinkStyled;
