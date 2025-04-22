import { Request, Response } from "express";

export const handleGetMovies = async (req: Request, res: Response) => {
  res.json({ message: "Returned all movies" });
};
export const handleGetMovie = async (req: Request, res: Response) => {};
export const handleCreateMovie = async (req: Request, res: Response) => {};
export const handleUpdateMovie = async (req: Request, res: Response) => {};
export const handleDeleteMovie = async (req: Request, res: Response) => {};
