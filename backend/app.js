import express from "express";
import dbConnection  from "./database/dbConnection.js";
import jobRouter from "./routes/jobRoutes.js";
import userRouter from "./routes/userRoutes.js";
import applicationRouter from "./routes/applicationRoutes.js";
import healthRouter from "./routes/healthRoutes.js";
import cors from "cors";
import { errorMiddleware } from "./middlewares/error.js";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";

import dotenv from "dotenv";
dotenv.config();


const app = express();

// ✅ Log to verify .env value is loaded
console.log("🚀 FRONTEND_URL from .env:", process.env.FRONTEND_URL);

// Allow configured frontend URL and fall back to localhost:5173 in dev
const allowedOrigins = [process.env.FRONTEND_URL, "http://localhost:5173"].filter(Boolean);

app.use(
  cors({
    origin: allowedOrigins,
    methods: ["GET", "POST", "DELETE", "PUT"],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/job", jobRouter);
app.use("/api/v1/application", applicationRouter);
app.use("/api/v1", healthRouter);
dbConnection();

app.use(errorMiddleware);
export default app;
