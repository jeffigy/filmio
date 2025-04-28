import express, { json } from "express";
import apiRoutes from "@/routes";
import errorHandler from "@/middlewares/error-handler.middleware";
import cookieParser from "cookie-parser";
const app = express();

app.use(json());
app.use(cookieParser());

app.use("/api", apiRoutes);

app.use(errorHandler);

export default app;
