import { Button } from "@chakra-ui/react";
import React from "react";

const NextButton = (props) => {
  const { form } = props;

  return form?.isLastStep ? (
    <Button type="submit" disabled={!form?.isValid}>
      Enregistrer
    </Button>
  ) : (
    <Button type="submit" disabled={!form?.isStepValid}>
      Suivant
    </Button>
  );
};

export default NextButton;
