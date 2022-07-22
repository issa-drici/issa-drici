import { Box, Text } from "@chakra-ui/react";
import React from "react";

const BadgeStatut = (props) => {
  const { statut } = props;

  let cle;

  if (statut?.includes("statut.")) {
    cle = statut.substring(statut.indexOf("statut.") + 7);
  }

  var backgroundColor = "black";
  var textColor = "white";
  var value = "statut";

  switch (cle) {
    case "enattente":
      backgroundColor = "gray.400";
      textColor = "white";
      value = "En Attente";
      break;

    case "encours":
      backgroundColor = "blue.300";
      textColor = "white";
      value = "En Cours";
      break;

    case "termine":
      backgroundColor = "green.400";
      textColor = "white";
      value = "Terminé";
      break;

    case "cloture":
      backgroundColor = "green.400";
      textColor = "white";
      value = "Clotûré";
      break;

    default:
      break;
  }

  return (
    <Box
      backgroundColor={backgroundColor}
      width="fit-content"
      px={2}
      py={1}
      borderRadius="md"
      alignItems="center"
      justifyContent="center"
      lineHeight={1}
    >
      <Text color={textColor} fontSize="9px" fontWeight="600">
        {value.toUpperCase()}
      </Text>
    </Box>
  );
};

export default BadgeStatut;
