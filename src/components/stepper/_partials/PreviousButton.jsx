import { Button } from "@chakra-ui/react";
import React from "react";

const PreviousButton = (props) => {
  const { form } = props;
  return (
    !form?.isFirstStep && (
      <Button type="button" onClick={form?.prevStep}>
        Précédent
      </Button>
    )
  );
};

export default PreviousButton;
