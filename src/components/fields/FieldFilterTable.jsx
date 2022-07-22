import { HStack, IconButton, Input } from "@chakra-ui/react";
import React from "react";
import { GrFormClose } from "react-icons/gr";

const FieldFilterTable = (props) => {
  const { filterText, onFilter, onClear } = props;

  return (
    <HStack spacing={0}>
      <Input
        id="search"
        type="text"
        placeholder="Filtrer par le nom"
        aria-label="Champ de recherche"
        value={filterText}
        onChange={onFilter}
        borderTopRightRadius={0}
        borderBottomRightRadius={0}
      />
      <IconButton
        aria-label="Fermer"
        variant="outline"
        onClick={onClear}
        icon={<GrFormClose />}
        borderTopLeftRadius={0}
        borderBottomLeftRadius={0}
      />
    </HStack>
  );
};

export default FieldFilterTable;
