import { createMovie, getMovie, getMovies } from "@/api/movieApi";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { toast } from "sonner";

export const useMoviesQuery = (
  filter: "now_showing" | "upcoming" | undefined,
) => {
  return useQuery({
    queryKey: ["movies"],
    queryFn: () => getMovies(filter),
  });
};

export const useMovieQuery = (id: string) => {
  return useQuery({
    queryKey: ["movie", id],
    queryFn: () => getMovie(id),
    enabled: !!id,
  });
};

export const useCreateMovieMutation = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationKey: ["new-movie"],
    mutationFn: (payload: any) => createMovie(payload),
    onSuccess: (data) => {
      toast.success(data.message);
      navigate(-1);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
