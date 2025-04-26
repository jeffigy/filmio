import {
  createShowtime,
  deleteShowtime,
  findAllShowtimes,
  findShowtimeById,
  updateShowtime,
} from "@/services/showtime.service";
import { Request, Response } from "express";
import { CreateShowtime, UpdateShowtime } from "@/schemas/showtime.schema";
import { findMovieById } from "@/services/movie.service";
import { findTheaterById } from "@/services/theater.service";
import { GetId } from "@/schemas";

export const handleGetShowtimes = async (req: Request, res: Response) => {
  const showtimes = await findAllShowtimes();

  if (showtimes.length === 0) {
    res.status(404).json({ message: "No showtime found" });
    return;
  }

  res.json(showtimes);
};
export const handleGetShowtime = async (req: Request, res: Response) => {
  const { id } = req.params;

  const showtime = await findShowtimeById(id);

  if (!showtime) {
    res.status(404).json({ message: "Showtime not found" });
    return;
  }

  res.json(showtime);
};

export const handleCreateShowtime = async (
  req: Request<unknown, unknown, CreateShowtime["body"]>,
  res: Response
) => {
  const { movieId, startTime, theaterId, endTime } = req.body;

  const [existedMovie, existedTheater] = await Promise.all([
    findMovieById(movieId),
    findTheaterById(theaterId),
  ]);

  if (!existedMovie) {
    res.status(404).json({ message: "Movie not found" });
    return;
  }

  if (!existedTheater) {
    res.status(404).json({ message: "Theater not found" });
    return;
  }

  await createShowtime({
    movieId,
    theaterId,
    startTime,
    endTime,
  });

  res.status(201).json({ message: "Showtime added" });
};

export const handleUpdateShowtime = async (
  req: Request<UpdateShowtime["params"], unknown, UpdateShowtime["body"]>,
  res: Response
) => {
  const { id } = req.params;
  const { movieId, startTime, theaterId, endTime } = req.body;

  const showtime = await findShowtimeById(id);

  if (!showtime) {
    res.status(404).json({ message: "Showtime not found" });
    return;
  }

  const [existedMovie, existedTheater] = await Promise.all([
    findMovieById(movieId),
    findTheaterById(theaterId),
  ]);

  if (!existedMovie) {
    res.status(404).json({ message: "Movie not found" });
    return;
  }

  if (!existedTheater) {
    res.status(404).json({ message: "Theater not found" });
    return;
  }

  await updateShowtime(
    {
      movieId,
      theaterId,
      startTime,
      endTime,
    },
    id
  );

  res.json({ message: "Showtime updated" });
};

export const handleDeleteShowtime = async (
  req: Request<GetId["params"], unknown, unknown>,
  res: Response
) => {
  const { id } = req.params;

  const showtime = await findShowtimeById(id);

  if (!showtime) {
    res.status(404).json({ message: "Showtime not found" });
    return;
  }

  await deleteShowtime(id);

  res.json({ message: "Showtime deleted" });
};
