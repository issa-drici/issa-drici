import { Box, Grid, Stack } from "@chakra-ui/react";
import React from "react";
import DotStepper from "./_partials/DotStepper";
import NextButton from "./_partials/NextButton";
import PreviousButton from "./_partials/PreviousButton";

const StepperWrapper = (props) => {
  const { form } = props;

  return (
    <Grid templateColumns="1fr 2fr 1fr" alignItems="center" width="100%" mt={5}>
      <Box>
        <PreviousButton form={form} />
      </Box>
      <Stack
        direction="row"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Grid
          templateColumns="1fr 1fr 1fr"
          alignItems="center"
          gap={0}
        >
          {form?.steps.map((element) => {
            return (
              <DotStepper
              key={element?.name}
                form={form}
                element={element}
                length={form?.steps?.length}
              />
            );
          })}
        </Grid>
      </Stack>
      <Box textAlign="right">
        <NextButton form={form} />
      </Box>
    </Grid>
  );
};

export default StepperWrapper;
