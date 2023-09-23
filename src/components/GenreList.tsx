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
  Heading,
} from "@chakra-ui/react";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}
const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
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
    <>
      <Heading fontSize={"2xl"} fontWeight={"normal"} margin={2}>
        Genres
      </Heading>
      <List>
        {genres.map((genre) => (
          <ListItem margin={3} key={genre.id}>
            <Button variant={"link"} onClick={() => onSelectGenre(genre)}>
              <HStack>
                <Image
                  borderRadius={"8px"}
                  objectFit={"cover"}
                  src={genre.image_background}
                  boxSize={8}
                  overflow={"hidden"}
                />
                <Text
                  fontWeight={
                    selectedGenre?.id === genre.id ? " bold" : "normal"
                  }
                  fontSize={"large"}
                >
                  {genre.name}
                </Text>
              </HStack>
            </Button>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
