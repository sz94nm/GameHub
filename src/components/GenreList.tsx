import React from "react";
import useGenres, { Genre } from "../hooks/useGenres";
import {
  List,
  ListItem,
  VStack,
  HStack,
  Image,
  Text,
  Spinner,
  Box,
  Center,
  Button,
} from "@chakra-ui/react";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}
const GenreList = ({ onSelectGenre }: Props) => {
  const { genres, error, isLoading } = useGenres();

  if (isLoading)
    return (
      <Center height={"100vh"}>
        <Spinner />
      </Center>
    );
  if (error) {
    return null;
  }
  return (
    <List>
      {genres.map((genre) => (
        <ListItem margin={3} key={genre.id}>
          <Button variant={"link"} onClick={() => onSelectGenre(genre)}>
            <HStack>
              <Image
                borderRadius={"8px"}
                src={genre.image_background}
                boxSize={8}
                overflow={"hidden"}
              />
              <Text fontSize={"large"}>{genre.name}</Text>
            </HStack>
          </Button>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
