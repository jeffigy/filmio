import { useMoviesQuery } from "@/hooks/useMovies";
import Movie, { MovieSelect } from "./Movie";
import MovieListLoader from "./MovieListLoader";
import { Alert, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

const UMovieList = () => {
  const { data, isLoading, isError, error } = useMoviesQuery("upcoming");

  if (isLoading) return <MovieListLoader />;
  if (isError) {
    return (
      <Alert variant={"destructive"}>
        <AlertCircle />
        <AlertTitle>{error.message}</AlertTitle>
      </Alert>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-6 lg:grid-cols-4">
      {data.map((movie: MovieSelect) => (
        <Movie key={movie.movieId} movie={movie} />
      ))}
    </div>
  );
};

export default UMovieList;
