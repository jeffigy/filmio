import { useMoviesQuery } from "@/hooks/useMovies";
import { Alert, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import MovieListLoader from "./MovieListLoader";
import Movie, { MovieSelect } from "./Movie";

const NSMovieList = () => {
  const { data, isLoading, isError, error } = useMoviesQuery("now_showing");

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

export default NSMovieList;
