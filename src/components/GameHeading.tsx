import { Heading, Text, HStack } from "@chakra-ui/react";
import React from "react";

interface Props {
  selectedGenre: string | null | undefined;
  selectedPlatform: string | null | undefined;
}
const GameHeading = ({ selectedGenre, selectedPlatform }: Props) => {
  const heading = `${selectedPlatform} ${selectedGenre} Games`;
  return (
    <Heading margin={1} as="h1">
      {heading}
    </Heading>
  );
};

export default GameHeading;
