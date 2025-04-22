import { GetId } from "@/schemas";
import { CreateMovie, UpdateMovie } from "@/schemas/movie.schema";
import {
  createMovie,
  deleteMovie,
  findAllMovies,
  findMovieById,
  updateMovie,
} from "@/services/movie.service";
import { Request, Response } from "express";

export const handleGetMovies = async (req: Request, res: Response) => {
  const movies = await findAllMovies();

  if (movies.length === 0) {
    res.status(404).json({ message: "No movies found" });
    return;
  }

  res.json(movies);
};

export const handleGetMovie = async (
  req: Request<GetId["params"], unknown, unknown>,
  res: Response
) => {
  const { id } = req.params;

  const movie = await findMovieById(+id);

  if (!movie) {
    res.status(404).json({ message: "Movie not found" });
    return;
  }

  res.json(movie);
};

export const handleCreateMovie = async (
  req: Request<unknown, unknown, CreateMovie["body"]>,
  res: Response
) => {
  await createMovie(req.body);

  res.status(201).json({ message: "Movie added" });
};

export const handleUpdateMovie = async (
  req: Request<UpdateMovie["params"], unknown, UpdateMovie["body"]>,
  res: Response
) => {
  const { id } = req.params;

  const movie = await findMovieById(+id);

  if (!movie) {
    res.status(404).json({ message: "Movie not found" });
    return;
  }

  await updateMovie(req.body, +id);
  res.json({ message: "Movie updated" });
};

export const handleDeleteMovie = async (
  req: Request<GetId["params"], unknown, unknown>,
  res: Response
) => {
  const { id } = req.params;

  const movie = await findMovieById(+id);

  if (!movie) {
    res.status(404).json({ message: "Movie not found" });
    return;
  }

  await deleteMovie(+id);

  res.json({ message: "Movie deleted" });
};
