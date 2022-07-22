import { Divider, Stack, Text } from "@chakra-ui/react";
import React from "react";

const GroupFieldsTitle = (props) => {
  const { title } = props;
  return (
    <Stack>
      <Text
        textTransform="uppercase"
        color="gray.500"
        fontSize="xs"
        fontWeight="700"
        mt={3}
      >
        {title}
      </Text>
      <Divider />
    </Stack>
  );
};

export default GroupFieldsTitle;
