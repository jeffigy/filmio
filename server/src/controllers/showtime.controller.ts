import { Request, Response } from "express";

export const handleGetShowtimes = async (req: Request, res: Response) => {
  res.json({ message: "Returned all showtimes" });
};
export const handleGetShowtime = async (req: Request, res: Response) => {};
export const handleCreateShowtime = async (req: Request, res: Response) => {};
export const handleUpdateShowtime = async (req: Request, res: Response) => {};
export const handleDeleteShowtime = async (req: Request, res: Response) => {};
