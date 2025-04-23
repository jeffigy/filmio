import { GetId } from "@/schemas";
import { CreateTheater, UpdateTheater } from "@/schemas/theater.schema";
import {
  createTheater,
  deleteTheater,
  findAllTheaters,
  findTheaterById,
  updateTheater,
} from "@/services/theater.service";
import { Request, Response } from "express";

export const handleGetTheaters = async (req: Request, res: Response) => {
  const theaters = await findAllTheaters();

  if (theaters.length === 0) {
    res.status(404).json({ message: "No theaters found" });
    return;
  }

  res.json(theaters);
};

export const handleGetTheater = async (
  req: Request<GetId["params"], unknown, unknown>,
  res: Response
) => {
  const { id } = req.params;

  const theater = await findTheaterById(+id);

  if (!theater) {
    res.status(404).json({ message: "Theater not found" });
    return;
  }

  res.json(theater);
};

export const handleCreateTheater = async (
  req: Request<unknown, unknown, CreateTheater["body"]>,
  res: Response
) => {
  await createTheater(req.body);

  res.status(201).json({ message: "Theater added" });
};

export const handleUpdateTheater = async (
  req: Request<UpdateTheater["params"], unknown, UpdateTheater["body"]>,
  res: Response
) => {
  const { id } = req.params;

  const theater = await findTheaterById(+id);

  if (!theater) {
    res.status(404).json({ message: "Theater not found" });
    return;
  }

  await updateTheater(req.body, +id);
  res.json({ message: "Theater updated" });
};

export const handleDeleteTheater = async (
  req: Request<GetId["params"], unknown, unknown>,
  res: Response
) => {
  const { id } = req.params;

  const theater = await findTheaterById(+id);

  if (!theater) {
    res.status(404).json({ message: "Theater not found" });
    return;
  }

  await deleteTheater(+id);

  res.json({ message: "Theater deleted" });
};
