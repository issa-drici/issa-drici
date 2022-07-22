import React from "react";
import LinkStyled from "./LinkStyled";

const LinkContact = (props) => {
  const { contact, type } = props;
  switch (type) {
    case "email":
      return <LinkStyled href={`mailto:${contact}`}>{contact}</LinkStyled>;

    case "phone":
      return <LinkStyled href={`tel:${contact}`}>{contact}</LinkStyled>;

    default:
      break;
  }
};

export default LinkContact;
