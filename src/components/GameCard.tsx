import React from "react";
import { Game } from "../hooks/useGames";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Image,
  Heading,
  HStack,
} from "@chakra-ui/react";
import PlatformIconsList from "./PlatformIconsList";
import GameScore from "./GameScore";

interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={"8px"} overflow={"hidden"}>
      <Image src={game.background_image} />
      <CardBody>
        <HStack marginBottom={1} justifyContent="space-between">
          {" "}
          <PlatformIconsList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <GameScore score={game.metacritic} />
        </HStack>
        <Heading fontSize={"2xl"}>{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
