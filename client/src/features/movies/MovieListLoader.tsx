import { MovieSkeleton } from "./Movie";

const MovieListLoader = () => {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-6 lg:grid-cols-4">
      {Array.from({ length: 10 }).map((_, index) => (
        <MovieSkeleton key={index} />
      ))}
    </div>
  );
};

export default MovieListLoader;
