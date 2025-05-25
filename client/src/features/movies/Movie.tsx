import { Button } from "@/components/ui/button";
import { Link } from "react-router";

export type MovieSelect = {
  duration: number;
  movieId: string;
  title: string;
  description: string;
  genre: string[] | null;
  createdAt: Date;
};

const Movie = ({ movie }: { movie: MovieSelect }) => {
  return (
    <div className="group bg-border relative max-w-xs overflow-hidden rounded-xl shadow-lg transition-shadow duration-300 hover:shadow-2xl">
      <img
        className="aspect-[3/2] w-full object-cover"
        src="https://via.placeholder.com/300x450.png?text=Movie+Poster"
        alt="Movie Poster"
      />
      <div className="p-4">
        <h3 className="truncate text-xl font-semibold text-gray-800">
          {movie.title}
        </h3>
        <div className="flex">
          {movie.genre?.map((genre, index) => (
            <p key={index} className="mr-1 mb-1 text-sm text-gray-500">
              {genre}
            </p>
          ))}
        </div>
        <p className="mb-3 text-sm text-gray-500">{movie.duration} min</p>
        <Button className="w-full" asChild>
          <Link to={`/movies/${movie.movieId}`}>View Details</Link>
        </Button>
      </div>
    </div>
  );
};

export const MovieSkeleton = () => {
  return (
    <div className="group bg-border relative max-w-xs overflow-hidden rounded-xl shadow-lg transition-shadow duration-300">
      {/* Image Skeleton */}
      <div className="bg-muted aspect-[3/2] w-full animate-pulse" />

      <div className="space-y-3 p-4">
        {/* Title Skeleton */}
        <div className="bg-muted h-6 w-3/4 animate-pulse rounded-md" />

        {/* Genres Skeleton */}
        <div className="flex space-x-2">
          <div className="bg-muted h-4 w-12 animate-pulse rounded-md" />
          <div className="bg-muted h-4 w-10 animate-pulse rounded-md" />
        </div>

        {/* Duration Skeleton */}
        <div className="bg-muted h-4 w-20 animate-pulse rounded-md" />

        {/* Button Skeleton */}
        <div className="bg-muted h-10 w-full animate-pulse rounded-md" />
      </div>
    </div>
  );
};

export default Movie;
