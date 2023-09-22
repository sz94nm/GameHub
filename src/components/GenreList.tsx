import React from "react";
import useGenres from "../hooks/useGenres";
import { VStack } from "@chakra-ui/react";

const GenreList = () => {
  const { genres, error, isLoading } = useGenres();

  return (
    <VStack>
      {genres.map((genre) => (
        <p key={genre.id}>{genre.name}</p>
      ))}
    </VStack>
  );
};

export default GenreList;
