import express from "express";
import { helloBackend } from "../controllers/healthController.js";

const router = express.Router();

router.get("/hello", helloBackend);

export default router;


