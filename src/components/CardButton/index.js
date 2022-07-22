import * as React from "react";
import { Box, HStack, Text } from "@chakra-ui/react";
import Card from "components/card/Card";

export default function CardButton(props) {
  const { imagePath, title, onClick } = props;

  return (
    <Card
      width="100%"
      height="100%"
      onClick={onClick}
      padding={0}
      overflow="hidden"
    >
      <HStack
        alignItems="center"
        justifyContent="center"
        width="100%"
        height="100%"
        backgroundImage={`url(${imagePath})`}
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        borderRadius="md"
        overflow="hidden"
      >
        <Box
          position="absolute"
          top={0}
          right={0}
          bottom={0}
          left={0}
          backgroundColor="black"
          opacity={0.3}
          zIndex={5}
          borderRadius="md"
        />
        <Text
          fontSize="15px"
          textAlign="center"
          textTransform="uppercase"
          fontWeight="900"
          color="white"
          zIndex={6}
        >
          {title}
        </Text>
      </HStack>
    </Card>
  );
}
