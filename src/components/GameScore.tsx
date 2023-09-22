import React from "react";
import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}
const GameScore = ({ score }: Props) => {
  return (
    <Badge
      colorScheme={score > 85 ? "green" : "yellow"}
      paddingX={2}
      borderRadius={"4px"}
    >
      {score}
    </Badge>
  );
};

export default GameScore;
