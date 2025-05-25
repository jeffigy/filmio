import { getMovie, getMovies } from "@/api/movieApi";
import { useQuery } from "@tanstack/react-query";

export const useMoviesQuery = () => {
  return useQuery({
    queryKey: ["movies"],
    queryFn: getMovies,
  });
};

export const useMovieQuery = (id: string) => {
  return useQuery({
    queryKey: ["movie", id],
    queryFn: () => getMovie(id),
    enabled: !!id,
  });
};
