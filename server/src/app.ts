import express, { json } from "express";
import apiRoutes from "@/routes";
import errorHandler from "@/middlewares/error-handler.middleware";

const app = express();

app.use(json());

app.use("/api", apiRoutes);

app.use(errorHandler);

export default app;
