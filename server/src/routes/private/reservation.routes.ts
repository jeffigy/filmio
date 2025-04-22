import {
  handleCreateReservation,
  handleDeleteReservation,
  handleGetReservation,
  handleGetReservations,
  handleUpdateReservation,
} from "@/controllers/reservation.controller";
import { Router } from "express";

const reservationRoutes = Router();

reservationRoutes
  .route("/")
  .get(handleGetReservations)
  .post(handleCreateReservation);
reservationRoutes
  .route("/:id")
  .get(handleGetReservation)
  .patch(handleUpdateReservation)
  .delete(handleDeleteReservation);

export default reservationRoutes;
