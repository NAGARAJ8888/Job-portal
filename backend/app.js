import express from "express";
import dbConnection from "./database/dbConnection.js";
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

// 🔥 FINAL CORS CONFIG — ONLY ONE
const allowedOrigins = [
  "https://daily-job-portal.netlify.app",
  "http://localhost:5173",
  process.env.FRONTEND_URL
].filter(Boolean);

console.log("🚀 Allowed Origins:", allowedOrigins);

app.use(
  cors({
    origin: allowedOrigins,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

// Handle OPTIONS preflight
app.options("*", cors());

// Middlewares
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

// Routes
app.use("/api/v1/user", userRouter);
app.use("/api/v1/job", jobRouter);
app.use("/api/v1/application", applicationRouter);
app.use("/api/v1", healthRouter);

// Database
dbConnection();

// Error handler
app.use(errorMiddleware);

export default app;
