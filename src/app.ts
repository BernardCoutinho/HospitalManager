import "express-async-errors";
import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import router from "./Routers/patientsRouter";

const app = express();

app.use(cors());
app.use(express.json())
app.use(router)
export default app;