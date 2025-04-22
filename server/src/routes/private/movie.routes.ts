import {
  handleCreateMovie,
  handleDeleteMovie,
  handleGetMovie,
  handleGetMovies,
  handleUpdateMovie,
} from "@/controllers/movie.controller";
import { Router } from "express";

const movieRoutes = Router();

movieRoutes.route("/").get(handleGetMovies).post(handleCreateMovie);
movieRoutes
  .route("/:id")
  .get(handleGetMovie)
  .patch(handleUpdateMovie)
  .delete(handleDeleteMovie);

export default movieRoutes;
