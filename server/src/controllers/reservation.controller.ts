import { Request, Response } from "express";

export const handleGetReservations = async (req: Request, res: Response) => {
  res.json({ message: "Returned all reservations" });
};
export const handleGetReservation = async (req: Request, res: Response) => {};
export const handleCreateReservation = async (
  req: Request,
  res: Response
) => {};
export const handleUpdateReservation = async (
  req: Request,
  res: Response
) => {};
export const handleDeleteReservation = async (
  req: Request,
  res: Response
) => {};
