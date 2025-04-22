import {
  handleCreateTheater,
  handleDeleteTheater,
  handleGetTheater,
  handleGetTheaters,
  handleUpdateTheater,
} from "@/controllers/theater.controller";
import { Router } from "express";

const theaterRoutes = Router();

theaterRoutes.route("/").get(handleGetTheaters).post(handleCreateTheater);
theaterRoutes
  .route("/:id")
  .get(handleGetTheater)
  .patch(handleUpdateTheater)
  .delete(handleDeleteTheater);

export default theaterRoutes;
