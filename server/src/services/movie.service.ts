import db from "@/db";
import { moviesTable } from "@/db/schema";
import { MovieInsert } from "@/types/movie.type";
import { eq } from "drizzle-orm";

export const findAllMovies = async () => {
  return await db.select().from(moviesTable);
};

export const findMovieById = async (id: number) => {
  const [movie] = await db
    .select()
    .from(moviesTable)
    .where(eq(moviesTable.movieId, id));

  return movie;
};

export const createMovie = async (payload: MovieInsert) => {
  const [createdMovie] = await db
    .insert(moviesTable)
    .values({ ...payload })
    .returning();

  return createdMovie;
};

export const updateMovie = async (payload: MovieInsert, id: number) => {
  const [updatedMovie] = await db
    .update(moviesTable)
    .set({ ...payload })
    .where(eq(moviesTable.movieId, id))
    .returning();

  return updatedMovie;
};

export const deleteMovie = async (id: number) => {
  const [deletedMovie] = await db
    .delete(moviesTable)
    .where(eq(moviesTable.movieId, id))
    .returning();

  return deletedMovie;
};
