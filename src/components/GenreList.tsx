import React from "react";
import useGenres from "../hooks/useGenres";
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
} from "@chakra-ui/react";

const GenreList = () => {
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
          <HStack>
            <Image
              borderRadius={"8px"}
              src={genre.image_background}
              boxSize={8}
              overflow={"hidden"}
            />
            <Text fontSize={"large"}>{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
