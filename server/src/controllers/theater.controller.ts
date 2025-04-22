import { Request, Response } from "express";

export const handleGetTheaters = async (req: Request, res: Response) => {
  res.json({ message: "Returned all theaters" });
};
export const handleGetTheater = async (req: Request, res: Response) => {};
export const handleCreateTheater = async (req: Request, res: Response) => {};
export const handleUpdateTheater = async (req: Request, res: Response) => {};
export const handleDeleteTheater = async (req: Request, res: Response) => {};
