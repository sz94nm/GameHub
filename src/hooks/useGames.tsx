import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import { CanceledError } from "axios";
import { Genre } from "./useGenres";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}
interface fetchGamesResponse {
  count: number;
  next: string;
  previous: string;
  results: Game[];
}

const useGames = (selectedGenre: Genre | null) => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const controller = new AbortController();
    apiClient
      .get<fetchGamesResponse>("/games", {
        signal: controller.signal,
        params: { genres: selectedGenre?.id },
      })
      .then((res) => {
        setGames(res.data.results);
        setLoading(false);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, [selectedGenre]);
  return { games, error, isLoading };
};
export default useGames;
