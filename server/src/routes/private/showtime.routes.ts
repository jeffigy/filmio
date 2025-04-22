import {
  handleCreateShowtime,
  handleDeleteShowtime,
  handleGetShowtime,
  handleGetShowtimes,
  handleUpdateShowtime,
} from "@/controllers/showtime.controller";
import { Router } from "express";

const showtimeRoutes = Router();

showtimeRoutes.route("/").get(handleGetShowtimes).post(handleCreateShowtime);
showtimeRoutes
  .route("/:id")
  .get(handleGetShowtime)
  .patch(handleUpdateShowtime)
  .delete(handleDeleteShowtime);

export default showtimeRoutes;
